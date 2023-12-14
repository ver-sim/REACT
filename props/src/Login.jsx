import { useState } from "react";

function createData() {
    return {
        username: "",
        password: "",
        remember: false,
    }
}

// eslint-disable-next-line react/prop-types
export function Login({ logged }) {
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

    const handelLogin = () => logged(data);

    const handleReset = () => {
        setData(createData());
    }

    return (
        <div>
            <input type="text" name="username" value={data.username} onChange={handelChangeInput}/>
            <input type="password" name="password" value={data.password} onChange={handelChangeInput}/>
            <input type="checkbox" name="remember" checked={data.remember} onChange={handelChangeInput}/>
            <button disabled={!data.username || !data.password} onClick={handelLogin}>Login</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    );
}
