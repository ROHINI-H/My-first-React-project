import { useEffect, useRef, useState } from "react";

function UseRef() {
    const [salary, setSalary] = useState(200000)
    let spanEl = useRef();

    useEffect(function(){
        setTimeout(function(){
            spanEl.current.innerHTML = "400";
        }, 3000)
    }, [])

    return (
        <div>
            <h1>Salary is <span ref={spanEl}>{salary}</span></h1>
        </div>
    )
}

export default UseRef;