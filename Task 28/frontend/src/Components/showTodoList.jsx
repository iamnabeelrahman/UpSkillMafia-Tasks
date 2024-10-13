
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { UpdateTodo } from "./updateTodo"; 

function TodoCard({ data, handleEdit, handleDelete, handleComplete }) { 
    const { _id, title, description, completed } = data;

    return (
        <li key={_id}>
            <div className="title-description">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>

            <div className="button-container">
                <button className="button" name={_id} onClick={handleEdit}> 
                    edit
                </button>
                <button className="button" name={_id} onClick={handleDelete}>
                    delete
                </button>

                {/* Button to mark todo as completed */}
                <button className="button" onClick={() => handleComplete(_id)}>
                    {completed ? "Completed" : "Mark as Completed"}
                </button>
            </div>
        </li>
    );
}

export function ShowTodoList() {
    const [todo, setTodo] = useState([]);
    const [open, setOpen] = useState(false);
    const [id, setId] = useState(""); 
    const [update, setUpdate] = useState(false); 

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/todo")
            .then((res) => {
                console.log(res.data);
                setTodo(res.data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, [update]);

    function handleEdit(e) { 
        setId(e.target.name); 
        setOpen(true);
    }

    function handleUpdate() { 
        setUpdate(!update);
    }

    function handleDelete(e) { 
        axios.delete(`http://localhost:8000/api/todo/${e.target.name}`);
        setTodo((data) => data.filter((todo) => todo._id !== e.target.name));
    }

    //  function to mark todo as completed
    function handleComplete(id) {
        axios.put(`http://localhost:8000/api/todo/${id}/complete`)
            .then((res) => {
                console.log(res.data.message);
                setUpdate(!update); // Trigger re-fetch
            })
            .catch((err) => {
                console.error("Error marking todo as completed:", err);
            });
    }

    function handleClose() { 
        setId("");
        setOpen(false);
    }

    return (
        <section className="container">
            <Link to="/create-todo" className="button-new">
                <button className="button">New</button>
            </Link>
            <section className="contents">
                <h1>TODO</h1>
                <ul className="list-container">
                    {todo.map((data) => (
                        <TodoCard
                            key={data._id} 
                            data={data}
                            handleEdit={handleEdit}
                            handleDelete={handleDelete}
                            handleComplete={handleComplete} 
                        />
                    ))}
                </ul>
            </section>
            
            {open ? (
                <section className="update-container">
                    <div className="update-contents">
                        <p onClick={handleClose} className="close">
                            &times;
                        </p>

                        <UpdateTodo
                            _id={id}
                            handleClose={handleClose}
                            handleUpdate={handleUpdate}
                        />
                    </div>
                </section>
            ) : (
                ""
            )}
        </section>
    );
}
