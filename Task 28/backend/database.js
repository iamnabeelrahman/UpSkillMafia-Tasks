const mongoose = require("mongoose");


mongoose.connect("mongodb+srv://Nabeel:Nusrat%4025@nabeelcluster.qoyfq2x.mongodb.net/todos")
const todosSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todosSchema);

module.exports = {
    todo
}
