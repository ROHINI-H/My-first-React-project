import { Link, useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();

    function handleDash() {
        navigate('/dashboard');
    }

    function handleAdmin() {
        console.log("can perform more tasks");
        navigate('/admin');
    }

    return (
        <div>
            <h1>Home page</h1>
            <Link to="/dashboard">Visit Dashboard</Link>
            <button onClick={handleDash}>Dashboard</button>
            <button onClick={handleAdmin}>Admin</button>
            <Link to="/admin">Visit Admin</Link>
        </div>
    )
}

export default Home;