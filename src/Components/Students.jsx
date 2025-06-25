
function Students({student}) {
    // console.log(student);

    return (
        <div>
            <h1>Hi from Students!</h1>
            <p>Student 1: {student[0]} </p>
            <p>Student 2: {student[1]} </p>
            <p>Student 3: {student[2]} </p>
        </div>
    )
}

export default Students;