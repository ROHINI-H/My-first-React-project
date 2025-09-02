import { memo, useState } from "react";

function Memoo({dog}) {
    const [name, setName] = useState(dog);

    function handleDog() {
        setName(Math.floor(Math.random() * 10))
    }
    return (
        <div>
            <h1>Hello from {name}</h1>
            <button onClick={handleDog}>Change the dog</button>
            <Msg food="fruits" />
            <Msg food="pasta" />
            <Msg food="cake" />
        </div>
    )
}

const Msg = memo(function({food}) {
    return (
        <h1>Hello from {food}</h1>
    )
});

export default Memoo;