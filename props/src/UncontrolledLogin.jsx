export const UncontrolledLogin = () => {
    
    const handelFormSubmit = (event) => {
        event.preventDefault()
        const data = new FormData(event.target);

        const formData = {
            username: data.get('username'),
            password: data.get('password'),
            remember: data.get('remember') === 'on' ? true : false,
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
/* Vantaggi di FormData sono:
    - codice con meno righe rispetto ad non usarlo
    - usando questa classe si incorre anche ad un minore errore ad accedere al valore
    - è crossplatform

  Svantaggi:
   - poco usato
   - per accedere ad alcuni valori bisogna usare del condizioni(es remember)
*/