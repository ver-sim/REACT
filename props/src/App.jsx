import { Route, Routes } from "react-router-dom";
import { Welcome } from "./Welcome";
import { Counter } from "./Counter";

export function App() {
    return (
        <Routes>
            <Route path="/" element={<Welcome name="John"/>} />
            <Route path="/counter" element={<Counter />} />
        </Routes>
    );
}