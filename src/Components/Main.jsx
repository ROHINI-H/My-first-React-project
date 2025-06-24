import P1 from "./P1";
import P2 from "./P2";

function Main({product1, product2}) {
    // console.log(product1, product2)
    return (
        <div>
            <h2>Hi from Main!</h2>
            <P1 p1 = {product1} />
            <P2 p2 = {product2} />
        </div>
    )
}

export default Main;