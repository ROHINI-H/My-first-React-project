function Events() {
    function handleClick() {
        console.log("I am Clicked");
    }

    function colors(a, b) {
        console.log(a, b);
    }

    return (
        <>
            <button onClick={handleClick}>Cick me!</button> 
            <button onClick={() => colors("red", "Blue")}>Cick me!</button>
        </>
    )
}

export default Events;