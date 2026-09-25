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
                flex
                min-w-0
                flex-1
                flex-col
                items-center
                justify-center
                rounded-xl
                border
                border-white/10
                bg-white/[0.07]
                px-1.5
                py-2
                backdrop-blur-md
                transition
                duration-300
                hover:bg-white/[0.1]

                sm:rounded-2xl
                sm:px-3
                sm:py-3

                md:px-4
                md:py-4
            "
        >
            <span
                className="
                    whitespace-nowrap
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
                    whitespace-nowrap
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

const ScoreBoard = () => {
    return (
        <div
            className="
                mb-4
                w-full
                rounded-2xl
                border
                border-white/10
                bg-white/[0.06]
                p-3
                backdrop-blur-md

                sm:mb-5
                sm:p-4
            "
        >
            <div className="flex items-center justify-center gap-3 sm:gap-5">
                
                {/* Our Team */}
                <div className="flex min-w-0 flex-1 flex-col items-center">
                    <span
                        className="
                            max-w-full
                            truncate
                            text-center
                            text-xs
                            font-bold
                            text-white/70

                            sm:text-sm
                            md:text-base
                        "
                    >
                        কদমতলা
                    </span>

                    <span
                        className="
                            mt-1
                            text-3xl
                            font-black
                            leading-none
                            text-white

                            sm:text-4xl
                            md:text-5xl
                        "
                    >
                        {toBanglaNumber(6)}
                    </span>
                </div>

                {/* VS */}
                <div
                    className="
                        flex
                        h-9
                        w-9
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-white/10
                        bg-white/[0.08]
                        text-[10px]
                        font-black
                        text-white/40

                        sm:h-11
                        sm:w-11
                        sm:text-xs
                    "
                >
                    VS
                </div>

                {/* Opponent */}
                <div className="flex min-w-0 flex-1 flex-col items-center">
                    <span
                        className="
                            max-w-full
                            truncate
                            text-center
                            text-xs
                            font-bold
                            text-white/70

                            sm:text-sm
                            md:text-base
                        "
                    >
                        রামচন্দ্রপুর
                    </span>

                    <span
                        className="
                            mt-1
                            text-3xl
                            font-black
                            leading-none
                            text-white

                            sm:text-4xl
                            md:text-5xl
                        "
                    >
                        {toBanglaNumber(2)}
                    </span>
                </div>
            </div>
        </div>
    );
};

const CountdownTimer = ({ targetTime }) => {
    const [timeLeft, setTimeLeft] = useState(() =>
        calculateTimeLeft(targetTime)
    );

    useEffect(() => {
        const interval = setInterval(() => {
            const remaining =
                calculateTimeLeft(targetTime);

            setTimeLeft(remaining);

            if (!remaining) {
                clearInterval(interval);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [targetTime]);

    /* Match Started */
    if (!timeLeft) {
        return (
            <div className="w-full">
                <ScoreBoard />

                
            </div>
        );
    }

    return (
        <div className="w-full">
            {/* Score */}
            <ScoreBoard />

            {/* Countdown */}
            <div
                className="
                    grid
                    w-full
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
        </div>
    );
};

export default CountdownTimer;