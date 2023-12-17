import { useEffect, useState } from "react";
import classes from "./Clock.module.scss"

export function Clock() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {  
       const id =  setInterval(() => {setTime(new Date())
        }, 1000) 
        return () => {
            clearInterval(id)
        }
    }, [])
    return <h2 className={classes.clock}>The current time is {time.toLocaleTimeString()}</h2>
}