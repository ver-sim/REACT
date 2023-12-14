import { useState } from "react";
import { CounterDisplay } from "./CounterDisplay";
import { useRef } from "react";
import { useEffect } from "react";

// eslint-disable-next-line react/prop-types
export function Counter({ startValue = 0}) {
    const [counter, setCounter] = useState(startValue);
    let valRef = useRef(null);

    useEffect(() => {
        if (counter > startValue) {
            if(valRef.current !== 'up'){
                valRef.current = 'up';
                console.log(valRef.current);        
            }
        }
        else if (counter < startValue){
            if(valRef.current !== 'down'){
                valRef.current = 'down';
                console.log(valRef.current);
            }
        }
        else{
            valRef.current = 'initial value';
            console.log(valRef.current);
        }
    }, [counter, startValue])

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