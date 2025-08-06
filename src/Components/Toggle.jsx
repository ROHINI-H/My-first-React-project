import { useState } from "react";

function Toggle() {
    const [show, setShow] = useState(false);

    function handleClick() {
        setShow(!show);
    }

    return (
        <div>
            <button onClick={handleClick}>Click me</button>
            {show ? <Message /> : null}
        </div>
    )
}

function Message() {
    return (
        <>
            <h1>Hello, I am Message</h1>
        </>
    )
}

export default Toggle;