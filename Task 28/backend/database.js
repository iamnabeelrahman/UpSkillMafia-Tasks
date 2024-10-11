const mongoose = require("mongoose");

// Use environment variable for MongoDB connection
const mongoUrl = process.env.MONGODB_URL || "mongodb://localhost:27017/todos";
mongoose.connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const todosSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
});

const todo = mongoose.model('todos', todosSchema);

module.exports = {
    todo
};
