import Age from "./Age";
import FirstName from "./FirstName";
import Profession from "./Profession";

function Samarth() {
    let age = 21;
    let firstName = "sam";
    let profession = "SDE";

    return (
        <>
            <Age vayasu = {age} />
            <FirstName peru = {firstName} />
            <Profession velai = {profession} />
        </>
    )
}

export default Samarth;