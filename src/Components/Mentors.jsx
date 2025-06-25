import Batch1 from "./Batch1";
import Batch2 from "./Batch2";

function Mentors({student}) {
    let mentor = ['Anshika', 'Samarth'];

    return (
        <div> 
            <h1>Hi from Mentors!</h1>
            <Batch1 name = {mentor[0]} student = {student} />
            <Batch2 name = {mentor[1]} student = {student} />
        </div>
    )
}

export default Mentors;