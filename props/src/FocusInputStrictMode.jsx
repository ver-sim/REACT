import { useEffect } from "react";
import { useRef } from "react";

export const FocusInputStrictMode = () => {
    const inputRef = useRef(null);
    const mountedInputRef = useRef(null);

    useEffect(() => {
        if (!mountedInputRef.current){
            mountedInputRef.current = true;
            console.log('first time mounted');
        }else{
            console.log('again mounted');
        }

        inputRef.current?.focus()
    }, []);

    return <input type="text" ref={inputRef} />

}