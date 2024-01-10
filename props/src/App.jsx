import { Link, Route, Routes } from "react-router-dom";
import { Welcome } from "./Welcome";
import { Counter } from "./Counter";
import { ShowGithubUser } from "./ShowGithubUser";

export function App() {
    return (
        <>
            <Link to="/">Welcome </Link>
            <Link to="/counter">Counter </Link>
            <Link to="/users/:username">SwohGitHubUser </Link>
            <Routes>  
                <Route path="/" element={<Welcome name="John"/>} />
                <Route path="/counter" element={<Counter />} />
                <Route path="users/:username" element={<ShowGithubUser />} />
                <Route path="*" element={<p>Not found</p>} />
            </Routes>
        </>
    );
}