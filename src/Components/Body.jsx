import Career from "./Career";
import Main from "./Main";
import Nav from "./Nav";

function Body() {
    let p1 = {
        Name: "Iphone",
        Price: 21000
    };
    let p2 = {
        Name: "MacBook",
        Price: 51000
    };

    return (
        <div>
            <h1>Hi from Body!</h1>
            <Nav />
            <Main product1 = {p1} product2= {p2}/>
            <Career />
        </div>
    )
}

export default Body;