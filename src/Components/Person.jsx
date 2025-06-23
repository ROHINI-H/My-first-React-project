function Person(props) {
    return (
        <div>
            <h1>Hello from {props.name}!</h1>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Fav Color: {props.favColor}</p>
        </div>
    )
}

export default Person;