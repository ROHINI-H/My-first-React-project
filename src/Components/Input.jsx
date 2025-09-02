import { useState } from "react";

function Input() {
    const [inp, setInp] = useState("");

    function handleInp(event) {
        setInp(event.target.value);
        console.log(event.target.value);
    }

    return (
        <>
            <input onChange={handleInp} type="text" value={inp} />
        </>
    )
}

export default Input;