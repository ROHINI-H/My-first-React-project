import OnlineOfflineStatus from "./OnlineOfflineStatus";

export default function Navbar() {
    let status = OnlineOfflineStatus();

    return (
        <div>
            <img src="" alt="" />
            <ul>
                <li>{(status == "Online") ? "🟢" : "🔴"}</li>
                <li>Home</li>
                <li>Services</li>
                <li>Contact</li>
                <li>Help</li>
            </ul>
        </div>
    )
}