import { SWRConfig } from "swr";
import { App } from "./App";
import { BrowserRouter } from "react-router-dom"

const fetcher = (url) => fetch(url).then((resp) => resp.json())

export const Root = () => {
    return (
        <SWRConfig value={{ fetcher }}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </SWRConfig>
    );
}