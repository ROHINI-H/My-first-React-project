import { memo, useCallback, useState } from "react";

function Usecallback() {
    const [count, setCount] = useState(0);
    let data = useCallback(function() {return "Rohini"}, [])

    return (
        <div>
            <button onClick={() => setCount(count+1)}>Counter - {count} </button>
            <Msg d={data} />
        </div>
    )
}

const Msg = memo(function({d}) {
    return (
        <h1>Hello from - {d()} </h1>
    )
})

export default Usecallback;