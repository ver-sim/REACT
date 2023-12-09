import { Age } from "./Age";
import { AlertClock } from "./AlertClock";
import { Welcome } from "./Welcome";

export function App() {
    function handleShowTime(){
        const now = new Date;

        alert(`The time is ${now.toLocaleTimeString()}`)
    }
    return (
        <div>
            <Welcome name="John">
                <Age age={30}/>
            </Welcome>
            <AlertClock onClick={handleShowTime}/>
        </div>
    );
}