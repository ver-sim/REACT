import { Age } from "./Age";
import { Welcome } from "./Hello";

export function App() {
    return (
        <Welcome name="John">
            <Age age={30}/>
        </Welcome>
    );
}