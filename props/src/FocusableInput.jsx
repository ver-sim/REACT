import { useEffect } from "react";
import { useRef } from "react"

export const FocusableInput = () => {
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current?.focus()
    }, []);

    return <input type="text" ref={inputRef} />
}
