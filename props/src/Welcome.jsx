import { Age } from "./Age";

// eslint-disable-next-line react/prop-types
export function Welcome({ name, age }) {
    return (
        <div>
            <p>Welcome, <strong>{name}</strong>!</p>
             <Age age={age}/>
             {age > 18 && <Age age={age}/>}
             {age && <Age age={age}/>}
             {age > 18 && age < 65 && <Age age={age}/>}
             {age > 18 && age < 65 && name === "John" && <Age age={age}/>}
        </div>
    );
}