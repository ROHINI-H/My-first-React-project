import { useEffect, useState } from "react";

function Timer() {
    const [count, setCount] = useState(0);

    // first approach
    useEffect(() => {
        let idd = setInterval(() => {
            setCount(count + 1);
        }, 1000)
        // cleanup fn
        return () => clearInterval(idd); // it executes between 2 renders
    }, [count]);

    // Second Approach = You can also use setTimeout in useEffect for same output.
    useEffect(() => {
        setTimeout(() => {
            setCount(count+1);
        }, 1000);
    }, [count])

    return (
        <>
            <h1>Timer: {count}</h1>
        </>
    )
}

export default Timer;