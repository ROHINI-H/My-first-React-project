import { useEffect, useState } from "react"

export default function OTPGenerator() {
    let [OTP, setOTP] = useState("");
    let [timer, setTimer] = useState(20);

    function generateOTP() {
        let otp = Math.floor(1000 + Math.random() * 5000);
        console.log(otp);
        setOTP(otp);
    }

    useEffect(() => {
        generateOTP();
        let timerInterval = setInterval(() => {
            setTimer(timer => timer - 1);
        }, 1000);

        let OTPInterval = setInterval(() => {
            setTimer(20);
            generateOTP();
        }, 20000);

        return (() => {
            clearInterval(timerInterval);
            clearInterval(OTPInterval);
        });

    }, [])
    return (
        <div>
            <h1>OTP Generator</h1>
            <h1>OTP: {OTP}</h1>
            <p> New OTP in {timer} Seconds</p>
        </div>
    )
}