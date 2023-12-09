import { useState } from "react";
import { CounterDisplay } from "./CounterDisplay";

// eslint-disable-next-line react/prop-types
export function Counter({ startValue = 0}) {
    const [counter, setCounter] = useState(startValue);
    function handleCounterAdd() {
        setCounter((count) => count + 1) 
    }
    function handleCounterDelete() {
        setCounter((count) => count - 1) 
    }
    function handleCounterReset() {
        setCounter(startValue) 
    }

    return (
        <div>
            <CounterDisplay counter={counter}/>
            <button onClick={handleCounterAdd}>Add</button>
            <button onClick={handleCounterDelete}>Delete</button>
            <button onClick={handleCounterReset}>Reset</button>
        </div>
    );
}