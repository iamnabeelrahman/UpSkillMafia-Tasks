import { useState } from "react";
import { useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { CreateTodo } from "./components/CreateTodo";
import { Todos } from "./components/Todos";
import SearchTodo from './components/SearchTodo'; // Adjust the path if necessary


function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/todos")
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
      <div>
            <SearchTodo/>
        </div>

    </div>
  );
}

export default App;
