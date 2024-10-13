import React from 'react';

export function Todos({ todos, setTodos }) {
    const handleMarkAsCompleted = async (id) => {    
        try {
            const response = await fetch("https://todo-task28-frontend.onrender.com/completed", {                
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






    return (
        <div>
            {todos.map(todo => (
                <div key={todo._id}>
                    <h1>{todo.title}</h1>
                    <h2>{todo.description}</h2>
                    <button onClick={() => handleMarkAsCompleted(todo._id)}>
                        {todo.completed ? "Completed" : "Mark as completed"}
                    </button>

        
                </div>
            ))}

            
        </div>
    );
}
