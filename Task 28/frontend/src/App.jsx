import { useState } from "react";
import { useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { CreateTodo } from "./components/CreateTodo";
import { Todos } from "./components/Todos";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://todo-backend-hc8l.onrender.com/todos")
        .then(async function(res) {
            const json = await res.json();
            setTodos(json.todos);
        });
}, []); 



  return (
    <div>
      <h1>UpSkillMafia Task - 28</h1>
      <CreateTodo />
      <Todos todos={todos} setTodos={setTodos} />

    </div>
  );
}

export default App;
