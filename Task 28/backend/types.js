const zod = require("zod");

const createTodo  = zod.object({
        title: zod.string(),
        description: zod.string()
})

const updateTodo  = zod.object({
    id: zod.string(),   
})

const querySchema = zod.object({
    title: zod.string().min(1, "title must be at least 1 character long"), // Ensures query is a non-empty string
});

module.exports = {
    createTodo: createTodo,
    updateTodo: updateTodo,
    querySchema: querySchema
}
