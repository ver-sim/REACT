import { Link, Route, Routes } from "react-router-dom";
import { Welcome } from "./Welcome";
import { Counter } from "./Counter";
// import { ShowGithubUser } from "./ShowGithubUser";
import { GithubUserList } from "./GithubUserList";
import { ShowGithubUser } from "./ShowGithubUser";

export function App() {
    return (
        <>
            {/* <GithubUserList /> */}
            <Link to="/">Welcome </Link>
            <Link to="/counter">Counter </Link>
            <Link to="/users">SwohGitHubUser </Link>
            <Routes>  
                <Route path="/" element={<Welcome name="John"/>} />
                <Route path="/counter" element={<Counter />} />
                <Route path="/users" element={<GithubUserList />} >
                    <Route path=":users" element={<ShowGithubUser />}/>
                </Route>
                <Route path="*" element={<p>Not found</p>} />
            </Routes>
        </>
    );
}