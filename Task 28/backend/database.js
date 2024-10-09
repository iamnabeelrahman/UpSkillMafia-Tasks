const mongoose = require("mongoose");
const { boolean } = require("zod");
//
mongoose.connect("mongodb+srv://XYZ:ZYXZ@cluster.qoyfq2x.mongodb.net/todos")
const todosSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: boolean
})

const todo = mongoose.model('todos', todosSchema);

module.exports = {
    todo
}
