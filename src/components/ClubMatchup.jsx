import { FiShield } from "react-icons/fi";

const ClubLogo = ({ club }) => {
    return (
        <div
            className="
                flex
                min-w-0
                flex-1
                flex-col
                items-center
            "
        >
            <div
                className="
                    flex
                    h-16 w-16
                    items-center
                    justify-center
                    rounded-2xl
                    border border-white/10
                    bg-white
                    p-2
                    shadow-xl
                    shadow-black/20

                    sm:h-24 sm:w-24
                    sm:rounded-3xl
                    sm:p-3

                    md:h-28 md:w-28

                    lg:h-32 lg:w-32
                    lg:p-4
                "
            >
                <img
                    src={club.logo}
                    alt={`${club.name} logo`}
                    className="
                        h-full
                        w-full
                        object-contain
                    "
                    loading="eager"
                />
            </div>

            <h2
                className="
                    mt-2
                    max-w-[100px]
                    text-center
                    text-[11px]
                    font-bold
                    leading-tight
                    text-white

                    sm:mt-3
                    sm:max-w-[150px]
                    sm:text-sm

                    md:max-w-[180px]
                    md:text-base

                    lg:text-lg
                "
            >
                {club.name}
            </h2>
        </div>
    );
};

const ClubMatchup = ({
    homeClub,
    opponentClub,
}) => {
    return (
        <div
            className="
                mx-auto
                flex
                w-full
                max-w-xl
                items-center
                justify-center
                gap-2

                sm:gap-6
                md:gap-8
                lg:gap-10
            "
        >
            <ClubLogo club={homeClub} />

            <div
                className="
                    flex
                    shrink-0
                    flex-col
                    items-center
                "
            >
                <div
                    className="
                        flex
                        h-8 w-8
                        items-center
                        justify-center
                        rounded-full
                        border border-white/10
                        bg-white/[0.06]
                        text-white/50
                        backdrop-blur-md

                        sm:h-11 sm:w-11
                        md:h-12 md:w-12
                    "
                >
                    <FiShield
                        className="
                            text-sm
                            sm:text-base
                            md:text-lg
                        "
                    />
                </div>

                <span
                    className="
                        mt-1
                        text-[9px]
                        font-black
                        tracking-[0.2em]
                        text-amber-400

                        sm:mt-2
                        sm:text-xs
                        md:text-sm
                    "
                >
                    VS
                </span>
            </div>

            <ClubLogo club={opponentClub} />
        </div>
    );
};

export default ClubMatchup;