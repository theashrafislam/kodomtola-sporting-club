import { useEffect, useState } from "react";

const toBanglaNumber = (number) => {
    const banglaDigits = "০১২৩৪৫৬৭৮৯";

    return String(number)
        .padStart(2, "0")
        .replace(/\d/g, (digit) => banglaDigits[digit]);
};

const calculateTimeLeft = (targetTime) => {
    const difference =
        new Date(targetTime).getTime() - Date.now();

    if (difference <= 0) {
        return null;
    }

    return {
        days: Math.floor(
            difference / (1000 * 60 * 60 * 24)
        ),

        hours: Math.floor(
            (difference / (1000 * 60 * 60)) % 24
        ),

        minutes: Math.floor(
            (difference / (1000 * 60)) % 60
        ),

        seconds: Math.floor(
            (difference / 1000) % 60
        ),
    };
};

const CountdownBox = ({ value, label }) => {
    return (
        <div
            className="
                flex min-w-0 flex-1 flex-col items-center
                justify-center
                rounded-xl
                border border-white/10
                bg-white/[0.07]
                px-1.5 py-2
                backdrop-blur-md
                transition
                duration-300
                hover:bg-white/[0.1]
                sm:rounded-2xl
                sm:px-3 sm:py-3
                md:px-4 md:py-4
            "
        >
            <span
                className="
                    text-lg
                    font-black
                    leading-none
                    tracking-tight
                    text-white
                    sm:text-2xl
                    md:text-3xl
                    lg:text-4xl
                "
            >
                {toBanglaNumber(value)}
            </span>

            <span
                className="
                    mt-1
                    text-[8px]
                    font-semibold
                    tracking-wider
                    text-white/40
                    sm:text-[10px]
                    md:text-xs
                "
            >
                {label}
            </span>
        </div>
    );
};

const CountdownTimer = ({ targetTime }) => {
    const [timeLeft, setTimeLeft] = useState(() =>
        calculateTimeLeft(targetTime)
    );

    useEffect(() => {
        const interval = setInterval(() => {
            const remaining = calculateTimeLeft(targetTime);

            setTimeLeft(remaining);

            if (!remaining) {
                clearInterval(interval);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [targetTime]);

    if (!timeLeft) {
        return (
            <div
                className="
                    rounded-xl
                    border border-amber-400/20
                    bg-amber-400/10
                    px-4 py-3
                    text-center
                    backdrop-blur-md
                    sm:rounded-2xl
                    sm:px-6 sm:py-4
                "
            >
                <p
                    className="
                        text-lg
                        font-black
                        text-amber-300
                        sm:text-2xl
                    "
                >
                    খেলা শুরু হয়ে গেছে! 🏆
                </p>
            </div>
        );
    }

    return (
        <div
            className="
                grid
                grid-cols-4
                gap-1.5
                sm:gap-2
                md:gap-3
            "
        >
            <CountdownBox
                value={timeLeft.days}
                label="দিন"
            />

            <CountdownBox
                value={timeLeft.hours}
                label="ঘণ্টা"
            />

            <CountdownBox
                value={timeLeft.minutes}
                label="মিনিট"
            />

            <CountdownBox
                value={timeLeft.seconds}
                label="সেকেন্ড"
            />
        </div>
    );
};

export default CountdownTimer;