import { useState } from "react";

function createData() {
    return {
        username: "",
        password: "",
        remember: false,
    }
}

export function Login() {
    const [data, setData] = useState(createData());

    function handelChangeInput(event) {
        const name = event.target.name;
        const value = event.target.value;
        const checked = event.target.checked;
        const type = event.target.type;

        setData((data) => {
            return {
                ...data,
                [name]: type === 'checkbox' ? checked : value,
            }
        })
    }

    return (
        <div>
            <input type="text" name="username" value={data.username} onChange={handelChangeInput}/>
            <input type="password" name="password" value={data.password} onChange={handelChangeInput}/>
            <input type="checkbox" name="remember" checked={data.remember} onChange={handelChangeInput}/>
        </div>
    );
}
