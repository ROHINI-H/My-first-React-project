import { useEffect, useState } from "react"

export default function FetchComments() {
    let [comments, setComments] = useState([]);

    useEffect(() => {
        async function getComments() {
            let data = await fetch("https://dummyjson.com/comments");
            let response = await data.json();
            setComments(response.comments);
        }
        getComments();
    }, [])

    function handleClick() {
        setComments(comments.filter((comment) => comment.likes >= 5));
    }

    return (
        <div>
            <button onClick={handleClick}
                className="border cursor-pointer m-2 p-2">Popular Comments</button>
            {
                comments.map((comment) => {
                    return <div className="border m-2 p-2">
                        <h1>{comment.body}</h1>
                        <h2>{comment.user.fullName}</h2>
                        <h1>Likes: {comment.likes}</h1>
                    </div>
                })
            }
        </div>
    )
}