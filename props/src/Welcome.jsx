// eslint-disable-next-line react/prop-types
export function Welcome({ name, children }) {
    return (
        <div>
            <p>Welcome, <strong>{name}</strong>!</p>
            {children}
        </div>
    );
}