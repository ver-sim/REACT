import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
export function Coounter({ startValue = 0}) {
    const [counter, setCounter] = useState(startValue);

    useEffect(() => {
        console.log(`counter value is ${counter}`);
    })

    function handleCounterClick() {
        setCounter((count) => count + 1) 
    }

    return (
        <div>
            <h2>How many time you&apos;ve clicked the button? {counter}</h2>
            <button onClick={handleCounterClick}>Click me!</button>
        </div>
    );
}