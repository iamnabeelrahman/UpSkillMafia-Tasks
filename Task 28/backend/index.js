    const express = require("express");
    const { createTodo, updateTodo, querySchema } = require("./types");
    const { todo } = require("./database");
    const app = express();
    const cors = require("cors");

    const PORT =3000;
    app.use(express.json());
    app.use(cors());



    app.get("/", function(req, res){
        const todo = "Go to /todo for creating todo";
        const todos = "Go to /todos for getting all todo"
        const completed = "Go to /completed making the todo completed"
        const delete1 = "Go to /delete to delete todocompleted"
        res.send(`<h1> Welcome to the Todo API!</h1> </br> ${todo} </br>${todos} </br>${completed} </br>${delete1}`);
    })

    
    app.post("/todo", async (req, res) => {
        const createPayload = req.body;
        const parsedPayload = createTodo.safeParse(createPayload);

        if (!parsedPayload.success) {
            res.status(411).json({
                msg: "You sent wrong input",
            });
            return; // Exit early if validation fails
        }

        await todo.create({
            title: createPayload.title,
            description: createPayload.description,
            completed: false,
        });

        res.json({
            msg: "Todo created",
        });
    });

    app.get("/todos", async (req, res) => {
        const todos = await todo.find();
        res.json({
            todos,
        });
    });


    app.put("/completed", async (req, res) => {
        const updatePayload = req.body;
        const parsedPayload = updateTodo.safeParse(updatePayload);

        if (!parsedPayload.success) {
            return res.status(400).json({
                msg: "You sent wrong inputs",
            }); // Return early on validation failure
        }

        // Attempt to update the todo
        const result = await todo.updateOne(
            { _id: req.body.id },
            { $set: { completed: true } }
        );

        if (result.modifiedCount === 0) {
            return res.status(404).json({ msg: "Todo not found." });
        }

        res.json({ msg: "Todo marked as completed." });
    });



    app.delete("/delete/:id", async (req, res) => {
        const id = req.params.id;
        const deletedTodo = await todo.deleteOne({ _id: id });

        if (deletedTodo.deletedCount === 0) {
            return res.json({
                msg: "Todo not found",
            });
        }

        res.json({
            msg: "Todo deleted successfully!",
        });
    });



// Endpoint for updating task details (title, description)
app.put("/update/:id", async (req, res) => {
    const { id } = req.params;
    const { title, description } = req.body;

    const updatedTodo = await todo.updateOne(
        { _id: id }, // Find the todo by ID
        { $set: { title: title, description: description } } // Update title and description
    );

    if (updatedTodo.modifiedCount === 0) {
        return res.status(404).json({ msg: "Todo not found or no changes made." });
    }

    res.json({
        msg: "Todo updated successfully!",
    });
});


// Endpoint for searching tasks by title or description
// Create a search endpoint  
app.get('/search', async (req, res) => {  
    const title = req.query.title; // Get the search query from the URL  
    const parsedTitle = querySchema.safeParse({ title }); 

    if (!parsedTitle.success) {
        return res.status(400).json({ error: parsedTitle.error.errors });        
    }

    try {  
        const results = await todo.find({ title: new RegExp(parsedTitle.data.title, 'i') }); // Case-insensitive search  
        console.log(results);  // Log results for debugging
        res.json({ results });  // Wrap results in an object
    } catch (error) {  
        console.error(error);  // Log the error for debugging
        res.status(500).json({ error: 'An error occurred while searching.' });  
    }  
});

     


    app.listen(PORT, () => {
        console.log(`Server is listening to ${PORT}`);
    });
