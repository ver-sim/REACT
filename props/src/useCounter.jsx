import { useState } from "react";

export const useCounter = (initialValue = 0) => {
    const [counter, setCounter] = useState(initialValue);

    const handleIncrement = () => {
        setCounter((count) => count + 1)
    };

    const handleDecrement = () => {
        setCounter((count) => count - 1)
    };

    const handleReset = () => {
        setCounter(initialValue)
    };

    return ({
        counter: counter,
        onIncrement: handleIncrement,
        onDecrement: handleDecrement,
        onReset: handleReset,
    });
}

// Create a custom hook useCounter that keeps track of the state of a counter, and returns the current value of the counter as well as three functions to increment, decrement and reset the counter.