import { Login } from "./Login";


export function App(){
    const onLogin = (e) => {
        console.log(e);
    }

    return <Login logged={onLogin}/>
}