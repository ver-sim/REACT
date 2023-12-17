
import { useState } from "react";
import classes from "./TodoList.module.scss"

export const TodoList = () => {

    const [todos, setTodos] = useState([]);
    const [toDoAdd, setToDoAdd] = useState('');

    const handleTodoButton = (e) => {
        e.preventDefault();
        setTodos(()=>[...todos, toDoAdd]);
        setToDoAdd('');
    }

    const handleRemoveTodo = (index) => {
        const copyTodo = [...todos];
        copyTodo.splice(index, 1);
        setTodos(copyTodo);
    }

    return (
        <div className={classes.todoList}>
            <form className={classes.formList}>
                <input type="text" value={toDoAdd} onChange={(e) => setToDoAdd(() => e.target.value)}/>
                <button onClick={handleTodoButton} >Add todo</button>
                <button type="reset" onClick={() => setTodos([])}>Reset</button>
            </form>
            <ul>
                {todos.map((todo, index) => 
                    <li key={index}>
                        {todo} <button onClick={() => handleRemoveTodo(index)}>Remove</button>
                    </li>)}
            </ul>
        </div>
    );   
}