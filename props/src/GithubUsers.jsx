import { useState } from "react";
import { GithubUser } from "./GithubUser";

export const GithubUsers = () => {
    const [inputValue, setInputValue] = useState('');
    const [userData, setUserData] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();
        setUserData((preUser) =>[...preUser, inputValue]);
        setInputValue('');
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username"> Searching by username
                    <input type="text" name="username" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
                </label>
                <button type="submit">Submit</button>
            </form>
            <ul>
                {userData.map((user, index) => (
                    <GithubUser key={index} username={user}/>
                ))}
            </ul>
        </div>
    );
} 