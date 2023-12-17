import { Clock } from "./Clock";
import { Welcome } from "./Welcome";

export function App(){
    return (
        <>
            <Welcome name={"mario"}/>
            <Clock />
        </>
    );
}