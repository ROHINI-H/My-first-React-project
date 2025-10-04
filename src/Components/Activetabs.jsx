import { useState } from "react";

export default function Activetabs() {
    let tabs = ["Home", "Help", "SignIn", "Login"];
    let [activeTab, setActiveTab] = useState("");

    return (
        <div>
            {
                tabs.map((tab) => {
                    return <>
                        <button
                            className={(tab == activeTab) ? "border p-1 m-2 cursor-pointer font-bold" : "border p-1 m-2 cursor-pointer"}
                            onClick={() => setActiveTab(tab)}>
                            {tab}
                        </button>
                    </>
                })
            }
        </div>
    )
}