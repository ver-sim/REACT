import { Link, Route, Routes } from "react-router-dom";
import { Welcome } from "./Welcome";
import { Counter } from "./Counter";
import { ShowGithubUser } from "./ShowGithubUser";
import { GithubUserList } from "./GithubUserList";

export function App() {
    return (
        <>
            <Link to="/">Welcome </Link>|
            <Link to="/counter"> Counter </Link> | 
            <Link to="/users"> SwohGitHubUser </Link>
            <Routes>  
                <Route path="/" element={<Welcome name="John"/>} />
                <Route path="/counter" element={<Counter />} />
                <Route path="/users" element={<GithubUserList />} >
                    <Route index element={<p>Add a user and select it</p> } />
                    <Route path=":username" element={<ShowGithubUser />}/>
                </Route>
                <Route path="*" element={<p>Not found</p>} />
            </Routes>
        </>
    );
}