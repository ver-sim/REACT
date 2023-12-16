
import { useState } from "react";

export const TodoList = () => {

    const [todos, setTodos] = useState([]);
    const [toDoAdd, setToDoAdd] = useState('');

    const handleTodoButton = (e) => {
        e.preventDefault()
        setTodos([...todos, toDoAdd])
    }
    return (
        <div>
            <form>
                <input type="text" value={toDoAdd} onChange={(e) => setToDoAdd(e.target.value)}/>
                <button onClick={handleTodoButton} >Add todo</button>
            </form>
            <ul>
                {todos.map((todo, index) => <li key={index}>{todo}</li>)}
            </ul>
        </div>
    );   
}