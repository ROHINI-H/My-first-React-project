import { useEffect, useState } from "react";
import axios from 'axios';

function APICall() {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function API() {
            const result = await axios.get('https://jsonplaceholder.typicode.com/posts');
            const output = await result.data;
            setData(output);
        }
        API();
    }, [])
    return(
        <>
            <h1>Products</h1>
            {
                data.map((item) => {
                    return (
                        <div key = {item.id}>
                            <p>{item.title}</p>
                        </div>
                    )
                })
            }
        </>
    )
}

export default APICall;