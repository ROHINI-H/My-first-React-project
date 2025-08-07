import Child from "./Child";

function Parent() {

    function handledata(data) {
        console.log(data);
    }

    return (
        <>
            <h1>Hi, I am Parent!</h1>
            <Child handleFn={handledata} />
        </>
    )
}

export default Parent;