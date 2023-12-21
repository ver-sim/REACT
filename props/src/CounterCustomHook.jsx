/* eslint-disable react/prop-types */
import { useCounter } from "./useCounter"

export const CounterCustomHook = ({ initialValue = 0 }) => {
    const { counter, onIncrement, onDecrement, onReset } = useCounter(initialValue);

    return (
        <div>
            <h1>Counter click: {counter}</h1>
            <button onClick={onIncrement}>Increment</button>
            <button onClick={onDecrement}>Decrement</button>
            <button onClick={onReset}>Reset</button>
        </div>
    );
}