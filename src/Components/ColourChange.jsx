import { useState } from "react";

function ColourChange() {
    const [color, setColor] = useState("black");

    function handleClick(color) {
        setColor(color);
    }

    return (
        <div style={{backgroundColor: `${color}`, height: "100vh", width: "100vw"}}>
            <button onClick={() => handleClick("red")}>Red</button>
            <button onClick={() => handleClick("green")}>Green</button>
            <button onClick={() => handleClick("blue")}>Blue</button>
        </div>
    )
}

export default ColourChange;