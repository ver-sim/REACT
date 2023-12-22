/* eslint-disable react/prop-types */
import { useGithubUser } from "./useGithubUser";

export const GithubUser = ({ username }) => {
  const {userData, error, loading} = useGithubUser(username)
    return (
        <li>
            {error && <h2>{error}</h2>}
            {loading && <h2>Loading...</h2>}
            {userData && <div><h3>User&apos;s name: {userData.name}</h3>
              <p>Login: {userData.login}</p>
              <img src={userData.avatar_url} alt="avatar" width={100} height={100} />
            </div>}    
        </li>
    );
}

//The base URL for GitHub APIs is:- https://api.github.com/

// Fetching user information with its username
// Request type: GET API endpoint: /users/{username}