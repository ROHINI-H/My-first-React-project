import { useState } from "react";

function Counter() {
    let [counter, setCounter] = useState(0);

    function dec() {
        setCounter((count) => count - 1);
        setCounter((count) => count - 1);
    }

    function inc() {
        setCounter((count) => count + 1);
        setCounter((count) => count + 1);
    }
    return (
        <>
            <button onClick={dec}>-</button>
            <h1>{counter}</h1>
            <button onClick={inc}>+</button>
        </>
    )
}

export default Counter;