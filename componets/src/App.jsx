import { Hello } from "./Hello";
import { Message } from "./Message";

export function App() {
    return (
        <div>
            <Hello />
            {/* <Hello /> */}
            <Message />
        </div>
    );
}

// se si usa il componente Hello più di una volta verrà visulizzato il compente per le volte che viene richiamato  

//il componente Message si può mettere anche dentro app, a livello di visualizzazione nel broswer non cambia, a livello del codice nel compent di App si dovrà fare il collegamento con il compent di Message