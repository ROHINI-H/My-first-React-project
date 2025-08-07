function Child({handleFn}) {
    return (
        <>
            <h1 onClick={() => handleFn("Rohini")}>Hi, I am Child</h1>
        </>
    )
}

export default Child;