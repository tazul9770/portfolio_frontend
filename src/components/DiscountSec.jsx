import { useEffect, useState } from "react";

const DiscountSec = () => {
    const targetDate = new Date().getTime() + 1000 * 60 * 60 * 24 * 25;
    const getTimeRemaining = () => {
        const now  = new Date().getTime();
        const difference = targetDate - now;
        return {
            days: Math.floor(difference / (1000*60*60*24)),
            hours: Math.floor((difference / (1000*60*60)) % 24),
            minutes: Math.floor((difference / (1000*60)) % 60),
            seconds: Math.floor((difference / 1000) % 60)
        }
    }
    const [timeLeft, setTimeLeft] = useState(getTimeRemaining());
    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(getTimeRemaining())
        }, 1000)
        return () => clearInterval(timer)
    }, [])

    return (
        <div className="max-w-md mx-auto bg-gray-200 px-10 py-10 shadow-2xl m-5 rounded-2xl">
            <div className="flex items-center justify-between space-x-1 text-xl font-semibold">
                <div>
                    <p className="text-pink-600">{timeLeft.days}</p>
                    <p className="text-gray-800">Days</p>
                </div>
                <div>
                    <p className="text-pink-600">{timeLeft.hours}</p>
                    <p className="text-gray-800">Hrs</p>
                </div>
                <div>
                    <p className="text-pink-600">{timeLeft.minutes}</p>
                    <p className="text-gray-800">Min</p>
                </div>
                <div>
                    <p className="text-pink-600">{timeLeft.seconds}</p>
                    <p className="text-gray-800">Sec</p>
                </div>
            </div>
        </div>
    );
};

export default DiscountSec;