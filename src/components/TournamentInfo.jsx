import {
    FiCalendar,
    FiClock,
    FiMapPin,
    FiAward,
} from "react-icons/fi";

const infoItems = [
    {
        icon: FiCalendar,
        label: "তারিখ",
        key: "date",
    },
    {
        icon: FiClock,
        label: "সময়",
        key: "time",
    },
    {
        icon: FiMapPin,
        label: "ভেন্যু",
        key: "venue",
    },
    {
        icon: FiAward,
        label: "ম্যাচ",
        key: "matchInfo",
    },
];

const TournamentInfo = ({ config }) => {
    return (
        <div
            className="
                grid
                w-full
                grid-cols-2
                gap-1.5

                sm:gap-2

                md:grid-cols-4
                md:gap-3
            "
        >
            {infoItems.map(
                ({ icon: Icon, label, key }) => (
                    <div
                        key={key}
                        className="
                            min-w-0
                            overflow-hidden
                            rounded-xl
                            border
                            border-white/10
                            bg-white/[0.045]
                            px-3
                            py-2.5

                            sm:rounded-2xl
                            sm:px-4
                            sm:py-3

                            md:px-5
                            md:py-3.5
                        "
                    >
                        {/* Label */}
                        <div
                            className="
                                flex
                                min-w-0
                                items-center
                                gap-1.5
                                text-[8px]
                                font-semibold
                                text-white/40

                                sm:text-[10px]

                                md:text-xs
                            "
                        >
                            <Icon
                                className="
                                    h-3
                                    w-3
                                    shrink-0
                                    text-amber-400

                                    sm:h-3.5
                                    sm:w-3.5

                                    md:h-4
                                    md:w-4
                                "
                            />

                            <span className="truncate">
                                {label}
                            </span>
                        </div>

                        {/* Value */}
                        <p
                            className="
                                mt-1
                                min-w-0
                                truncate
                                text-[10px]
                                font-bold
                                leading-tight
                                text-white

                                sm:text-xs

                                md:text-sm
                            "
                            title={config[key]}
                        >
                            {config[key]}
                        </p>
                    </div>
                )
            )}
        </div>
    );
};

export default TournamentInfo;