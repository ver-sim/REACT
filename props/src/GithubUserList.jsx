import { useEffect, useState } from "react"
// import { ShowGithubUser } from "./ShowGithubUser";
import { Link, Outlet } from "react-router-dom";

export const GithubUserList = () => {
    const [user, setUser] = useState([]);
    useEffect(() => {
        const fetchApi = async () => {
            const resp = await fetch('https://api.github.com/users');
            const json = await resp.json();
            console.log(json);
            setUser(json)
        }
        fetchApi();
    }, []);

    return (
        <div>
            <ul>
                {user.map((val, key) => (
                    <li key={key}>
                        <Link to={`/users/${val.login}`}>{val.login}</Link>
                    </li>
                ))}
            </ul>
            <hr />
            <Outlet />
        </div>
    );

}

// Create a GithubUserList component that fetching this API url, https://api.github.com/users, show a list of links of github usernames.
// By clicking on a username, the ShowGithubUser component will be displayed. Add a Route to the users path that shows the GithubUserList component. In doing so, remove the /users/:username route from the App component, and add a new nested route within the /users route.