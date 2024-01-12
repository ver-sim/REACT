import  useSWR  from 'swr'


export const useGithubUser = (username) => {
    const {data, error, mutate} = useSWR(username ? `https://api.github.com/users/${username}` : {});

    return {
        userData: data,
        error,
        isLoading: !data && !error,
        onRefresh: () => mutate (),
    };
}