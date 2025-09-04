import { useRef, useState } from "react";

function StateManagerRef() {
    const [counter, setCounter] = useState(0);
    const countRef = useRef(0);

    function handleRef() {
        countRef.current++;
    }

    return (
        <div>
            <button onClick={handleRef}>Ref: {countRef.current}</button>
            <br />
            <button onClick={() => setCounter(counter+1)}>Counter: {counter}</button>
        </div>
    )
}

export default StateManagerRef;