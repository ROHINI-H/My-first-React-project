import { useEffect, useState } from "react";

function Clock() {
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    useEffect(()=>{
        let idd = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);
        return () => clearInterval(idd);
    }, [time]);

    return (
        <>
        <h1>Hello from Clock</h1>
            <h1>Time: {time}</h1>
        </>
    )
}

export default Clock;