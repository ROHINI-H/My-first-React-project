import { useEffect, useState } from "react";

function RealTime() {
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        let id = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);
        return () => clearInterval(id);
    }, [time]);

    return (
        <>
            <h1>Time - {time}</h1>
        </>
    )
}

export default RealTime;