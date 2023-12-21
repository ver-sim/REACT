/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

export const GithubUser = ({ username }) => {
    const [userData, setUserData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
      const fetchApi = async () => {
        try {
          setLoading(true);
          const resp = await fetch(`https://api.github.com/users/${username}`);
          if (resp.ok){
            const json = await resp.json();
            setUserData(json);
            setLoading(false);
            setError(null)
          } else {
            setError("there is a problem");
            setLoading(false);
            setUserData(null)
           }
  
        } catch (error) {
          setError(error.message);
        }
      }
        fetchApi();
    }, [username]);
    return (
        <div>
            {error && <h2>{error}</h2>}
            {loading && <h2>Loading...</h2>}
            {userData && <li><h3>User&apos;s name: {userData.name}</h3>
              <p>Login: {userData.login}</p>
              <img src={userData.avatar_url} alt="avatar" width={100} height={100} />
            </li>}    
        </div>
    );
}

// Create a GithubUser component that receives a username prop and fetches the data of the corresponding Github user from the Github API.
// The component should render the user's name, login and avatar.

//The base URL for GitHub APIs is:- https://api.github.com/

// Fetching user information with its username
// Request type: GET API endpoint: /users/{username}