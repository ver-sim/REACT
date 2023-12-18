
import { Container } from "./Container";
import { TodoList } from "./TodoList";

export function App(){
    return (
        <Container title={<h1>Click for show the to do list</h1>}>
            <TodoList />
        </Container>
    );
}