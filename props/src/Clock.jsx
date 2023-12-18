import { useContext, useEffect, useState } from "react";
import { LanguageContext } from "./LanguageContext";

export function Clock() {
    const [time, setTime] = useState(new Date());
    const language = useContext(LanguageContext);

    useEffect(() => {  
       const id =  setInterval(() => {setTime(new Date())
        }, 1000) 
        return () => {
            clearInterval(id)
        }
    }, [])
    return <h2>
                {language === 'en' &&  `The current time is ${time.toLocaleTimeString()}`}
                {language === 'it' &&  `Adesso sono le ${time.toLocaleTimeString()}`}
                {language === 'fr' &&  `L'heure actuelle est ${time.toLocaleTimeString()}`}
            </h2>
}