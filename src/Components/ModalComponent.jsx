import { useState } from "react"

export default function ModalComponent() {
    let [showModal, setShowModal] = useState(false);

    return (
        <div>
            <button className="border p-2 m-5" onClick={() => setShowModal(true)}>Show Modal</button>
            {
                (showModal == true)
                    ?
                    <div className="bg-red-200">
                        <p className="p-3">I am a Modal Component.</p>
                        <button className="border p-2 m-3" onClick={() => setShowModal(false)}>Stop Modal</button>
                    </div>
                    : null
            }
        </div>
    )
}