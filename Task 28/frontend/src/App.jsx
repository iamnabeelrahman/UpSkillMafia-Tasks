import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ShowTodoList } from "./Components/showTodoList";
import { CreateTodo } from "./Components/createTodo";
import "./App.css";

function App() {
    return (
        <div className="app-contents">
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<ShowTodoList />} />
                    <Route path="/create-todo" element={<CreateTodo />} />
                    
                </Routes>
            </BrowserRouter>
            
        </div>
    );
}

export default App;
