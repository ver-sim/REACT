import { App } from "./App";
import { BrowserRouter } from "react-router-dom"

export const Root = () => {
    return (
        <BrowserRouter>
            <App />
        </BrowserRouter>
    );
}