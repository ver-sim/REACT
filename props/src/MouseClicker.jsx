export function MouseClicker() {

    function handleClick(event) {
       return event.target.src ? console.log(event.target.src) : console.log(event.target.name)
    }

    return <button name="one" onClick={handleClick}>
        <img src="hey" alt="" width={30} height={30} />
        Click me!</button>
}
