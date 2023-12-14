export const UncontrolledLogin = () => {
    
    const handelFormSubmit = (event) => {
        event.preventDefault()
        const username = event.target.elements.namedItem('username').value;
        const password = event.target.elements.namedItem('password').value;
        const remember = event.target.elements.namedItem('remember').checked;

        const formData = {
            username,
            password,
            remember,
        }
        console.log(formData);
    }

    return (
        <form onSubmit={handelFormSubmit}>
            <input type="text" name="username" required/>
            <input type="password" name="password" required/>
            <input type="checkbox" name="remember" />
            <button type="submit">Login</button>
            <button type="reset">Reset</button>
        </form>
    );
}

// Implement an UncontrolledLogin component that implements all the operations of the Login component, but does so using uncontrolled components. Attempt to access the values of the form using the DOM API by reading the event.target of the onSubmit event handler.