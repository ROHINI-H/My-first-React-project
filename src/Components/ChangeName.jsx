import { useState } from "react";

function ChangeName({name}) {
    let [user, setUser] = useState(name);

    function change() {
        setUser("Anonymous")
    }
    return (
        <>
            <h1>Name: {user} </h1>
            <button onClick={change}>Logout</button>
        </>
    )
}

export default ChangeName;