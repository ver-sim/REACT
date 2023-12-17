import { Clock } from "./Clock";
import { TodoList } from "./TodoList";
import { Welcome } from "./Welcome";

export function App(){
    return (
        <>
            <Welcome name={"mario"}/>
            <Clock />
            <TodoList />
        </>
    );
}