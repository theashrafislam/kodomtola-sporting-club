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
                            rounded-xl
                            border border-white/10
                            bg-white/[0.045]
                            px-2
                            py-2

                            sm:rounded-2xl
                            sm:px-3 sm:py-3

                            md:px-4 md:py-3
                        "
                    >
                        <div
                            className="
                                flex
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
                                    shrink-0
                                    text-amber-400
                                "
                            />

                            <span>
                                {label}
                            </span>
                        </div>

                        <p
                            className="
                                mt-1
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