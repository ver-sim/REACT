import { useState } from "react";

// eslint-disable-next-line react/prop-types
export function Coounter({ startValue = 0}) {
    const [counter, setCounter] = useState(startValue);
    function handleCounterClick() {
        setCounter((count) => count + 1) 
        // è buona pratica inserire una callback invece che un paramatro, perché via della particolare carreteristiche funzionalità di background di react
    }

    return (
        <div>
            <h2>How many time you&apos;ve clicked the button? {counter}</h2>
            <button onClick={handleCounterClick}>Click me!</button>
        </div>
    );
}