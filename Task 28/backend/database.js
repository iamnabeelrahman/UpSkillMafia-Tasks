const mongoose = require("mongoose");

// Use environment variable for MongoDB connection
const mongoUrl = "mongodb+srv://Nabeel:Nusrat@clusterforpractice.qd1hf.mongodb.net/todos"
mongoose.connect(mongoUrl);

const todosSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
});

const todo = mongoose.model('todos', todosSchema);

module.exports = {
    todo
};

