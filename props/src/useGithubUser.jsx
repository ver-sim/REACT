import  useSWR  from 'swr'

const fetchApi = (url) => fetch(url).then((resp) => resp.json())

export const useGithubUser = (username) => {
    const {data, error} = useSWR(username ? `https://api.github.com/users/${username}` : {}, fetchApi);

    return {
        userData: data,
        error,
        isLoading: !data && !error,
    };
}