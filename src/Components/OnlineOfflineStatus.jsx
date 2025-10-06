import { useState } from "react";

const OnlineOfflineStatus = () => {
    let [status, setStatus] = useState("");

    window.addEventListener("online", () => {
        setStatus("Online");
    })

    window.addEventListener("offline", () => {
        setStatus("Offline");
    })
    return status;
}


export default OnlineOfflineStatus;