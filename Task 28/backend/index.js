    const express = require("express");
    const { createTodo, updateTodo } = require("./types");
    const { todo } = require("./database");
    const app = express();
    const cors = require("cors");

    const PORT = process.env.PORT || 3000;
    app.use(express.json());
    app.use(cors());

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

    app.listen(PORT, () => {
        console.log(`Server is listening to ${PORT}`);
    });
