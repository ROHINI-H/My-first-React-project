
function Batch1(mentor) {
    console.log(mentor);
    return (
        <div>
            <h2>Hi from {mentor.name}!</h2>
            <p>Students: {mentor.student[1]}</p>
        </div>
    )
}

export default Batch1;