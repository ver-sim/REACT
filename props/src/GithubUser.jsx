/* eslint-disable react/prop-types */
import { useGithubUser } from "./useGithubUser";


export const GithubUser = ({ username }) => {
    const {userData, error, isLoading, onRefresh } = useGithubUser(username)

    return (
        <div>
            <button onClick={onRefresh}>refresh</button>
            {error && <h2>you have an error </h2>}
            {isLoading && <h2>Loading...</h2>}
            {userData && <div><h1>User&apos;s name: {userData.name}</h1>
              <h2>Login: {userData.login}</h2>
              <img src={userData.avatar_url} alt="avatar" />
            </div>}
            
            
        </div>
    );
}

//The base URL for GitHub APIs is:- https://api.github.com/

// Fetching user information with its username
// Request type: GET API endpoint: /users/{username}