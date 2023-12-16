import { Colors } from "./Colors";

const name = [
    {id: 1, name: "bianco"},
    {id: 2, name: "rosso"},
    {id: 3, name: "blu"},
    {id: 4, name: "giallo"},
    {id: 5, name: "nero"},
];

export function App(){
    return <Colors colors={name}/>
}