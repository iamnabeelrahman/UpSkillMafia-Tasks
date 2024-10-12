import React from 'react';

export function Todos({ todos, setTodos }) {
    const handleMarkAsCompleted = async (id) => {    
        try {
            const response = await fetch("http://localhost:3000/completed", {                
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ id }),
            });

            if (!response.ok) {
                const errorResponse = await response.json();
                throw new Error(`Failed to mark todo as completed: ${errorResponse.msg}`);
            }            
            const updatedTodos = todos.map(todo => 
                todo._id === id ? { ...todo, completed: true } : todo
            );
            setTodos(updatedTodos); 
        } catch (error) {
            alert("Error marking todo as completed 2");
        }
    };


    const handleDeleteTodo = async (id) => {
        try {
            const response = await fetch(`http://localhost:3000/delete/${id}`, {
                method: "DELETE",
            });

            if (!response.ok) {
                const errorResponse = await response.json();
                throw new Error(`Failed to delete todo: ${errorResponse.msg}`);
            }

            // Remove the deleted todo from the local state
            const remainingTodos = todos.filter(todo => todo._id !== id);
            setTodos(remainingTodos);

            alert("Todo deleted successfully!");
        } catch (error) {
            alert("Error deleting todo");
        }
    };




    return (
        <div>
            {todos.map(todo => (
                <div key={todo._id}>
                    <h1>{todo.title}</h1>
                    <h2>{todo.description}</h2>
                    <button onClick={() => handleMarkAsCompleted(todo._id)}>
                        {todo.completed ? "Completed" : "Mark as completed"}
                    </button>

                    <button onClick={() => handleDeleteTodo(todo._id)}>
                        Delete
                    </button>
                </div>
            ))}

            
        </div>
    );
}
