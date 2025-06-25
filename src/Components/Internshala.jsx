import Mentors from "./Mentors";
import Students from "./Students";

function Internshala() {
    let student = ['Chetan', 'Mohit', 'Ankur'];

    return (
        <div>
            <Students student = {student} />
            <Mentors student = {student} />
        </div>
    )
}

export default Internshala;