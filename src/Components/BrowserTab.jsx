import { useEffect, useState } from "react"

function BrowserTab() {
    const [count, setCount] = useState(0);
    
    useEffect(() => {
        if(count > 0) {
            document.title = count;
        }
    }, [count]);

    return (
        <>
        <button onClick={() => setCount(count+1)}>Count: {count}</button>
        </>
    )
}

export default BrowserTab;