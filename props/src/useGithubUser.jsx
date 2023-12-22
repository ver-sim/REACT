import { useEffect, useState } from "react"

export const useGithubUser = (username) => {
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
    
   return {userData, error, loading};
}  