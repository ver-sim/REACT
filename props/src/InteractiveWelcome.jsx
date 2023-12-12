import { useState } from "react";
import { Welcome } from "./Welcome";

export function InteractiveWelcome() {
    const [username, setUsername] = useState('');

    function handleInputUsername(event) {
        setUsername(event.target.value)
    }
    
    return (
        <div>
            <input type="text" name="username" value={username} onChange={handleInputUsername}/>
            <Welcome name={username} />
        </div>
    );
}