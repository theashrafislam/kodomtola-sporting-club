import {
    FiArrowDown,
    FiZap,
} from "react-icons/fi";

import ClubMatchup from "./ClubMatchup";
import CountdownTimer from "./CountdownTimer";
import TournamentInfo from "./TournamentInfo";
import FacebookButton from "./FacebookButton";

const ComingSoonHero = ({ config }) => {
    return (
        <main
            className="
                relative
                h-dvh
                w-full
                overflow-hidden
                bg-[#061118]
                text-white
            "
        >
            {/* Background */}
            <div
                aria-hidden="true"
                className="
                    pointer-events-none
                    absolute
                    inset-0
                    overflow-hidden
                "
            >
                <div
                    className="
                        absolute
                        -left-40
                        top-0
                        h-72
                        w-72
                        rounded-full
                        bg-teal-500/10
                        blur-3xl

                        sm:h-96
                        sm:w-96
                    "
                />

                <div
                    className="
                        absolute
                        -right-40
                        top-1/3
                        h-80
                        w-80
                        rounded-full
                        bg-amber-400/10
                        blur-3xl

                        sm:h-[500px]
                        sm:w-[500px]
                    "
                />

                {/* Grid pattern */}
                <div
                    className="
                        absolute
                        inset-0
                        opacity-[0.035]
                    "
                    style={{
                        backgroundImage:
                            "linear-gradient(rgba(255,255,255,.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.7) 1px, transparent 1px)",
                        backgroundSize: "44px 44px",
                    }}
                />
            </div>

            {/* Main Container */}
            <div
                className="
                    relative
                    mx-auto
                    flex
                    h-full
                    w-full
                    max-w-6xl
                    flex-col
                    px-3
                    py-3

                    sm:px-5
                    sm:py-4

                    md:px-7
                    md:py-5

                    lg:px-8
                    lg:py-5
                "
            >
                {/* HEADER */}
                <header
                    className="
                        flex
                        shrink-0
                        items-center
                        justify-between
                    "
                >
                    {/* Club Brand */}
                    <div
                        className="
                            flex
                            min-w-0
                            items-center
                            gap-2
                            sm:gap-3
                        "
                    >
                        <div
                            className="
                                flex
                                h-8
                                w-8
                                shrink-0
                                items-center
                                justify-center
                                rounded-lg
                                border border-white/10
                                bg-white/5
                                p-1.5
                                backdrop-blur-md

                                sm:h-10
                                sm:w-10
                                sm:rounded-xl
                                sm:p-2
                            "
                        >
                            <img
                                src={config.homeClub.logo}
                                alt={`${config.homeClub.name} logo`}
                                className="
                                    h-full
                                    w-full
                                    object-contain
                                "
                            />
                        </div>

                        <div className="min-w-0">
                            <p
                                className="
                                    truncate
                                    text-[10px]
                                    font-black
                                    tracking-tight
                                    text-white

                                    sm:text-sm
                                "
                            >
                                {config.homeClub.name}
                            </p>

                            <p
                                className="
                                    hidden
                                    text-[8px]
                                    uppercase
                                    tracking-[0.18em]
                                    text-white/30

                                    sm:block
                                    sm:text-[9px]
                                "
                            >
                                Official Club
                            </p>
                        </div>
                    </div>

                    {/* Coming Soon */}
                    <div
                        className="
                            flex
                            shrink-0
                            items-center
                            gap-1.5
                            rounded-full
                            border border-amber-400/20
                            bg-amber-400/10
                            px-2.5
                            py-1

                            sm:gap-2
                            sm:px-3
                            sm:py-1.5
                        "
                    >
                        <span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2">
                            <span
                                className="
                                    absolute
                                    inline-flex
                                    h-full
                                    w-full
                                    animate-ping
                                    rounded-full
                                    bg-amber-400
                                    opacity-60
                                "
                            />

                            <span
                                className="
                                    relative
                                    inline-flex
                                    h-1.5
                                    w-1.5
                                    rounded-full
                                    bg-amber-400

                                    sm:h-2
                                    sm:w-2
                                "
                            />
                        </span>

                        <span
                            className="
                                text-[8px]
                                font-bold
                                uppercase
                                tracking-[0.12em]
                                text-amber-300

                                sm:text-[10px]
                                sm:tracking-[0.16em]
                            "
                        >
                            Coming Soon
                        </span>
                    </div>
                </header>

                {/* CENTER CONTENT */}
                <section
                    className="
                        flex
                        min-h-0
                        flex-1
                        items-center
                        justify-center
                    "
                >
                    <div
                        className="
                            w-full
                            max-w-4xl
                        "
                    >
                        {/* Eyebrow */}
                        <div
                            className="
                                mb-1.5
                                flex
                                items-center
                                justify-center
                                gap-1.5

                                sm:mb-2
                            "
                        >
                            <FiZap
                                className="
                                    text-xs
                                    text-amber-400

                                    sm:text-sm
                                "
                            />

                            <p
                                className="
                                    text-[9px]
                                    font-bold
                                    uppercase
                                    tracking-[0.15em]
                                    text-teal-300

                                    sm:text-xs
                                    sm:tracking-[0.2em]
                                "
                            >
                                আসছে আগামীকাল
                            </p>
                        </div>

                        {/* Heading */}
                        <div className="mx-auto text-center">
                            <h1
                                className="
                                    text-2xl
                                    font-black
                                    leading-[1.08]
                                    tracking-tight

                                    sm:text-4xl

                                    md:text-5xl

                                    lg:text-6xl
                                "
                            >
                                আগামীকাল{" "}
                                <span
                                    className="
                                        bg-gradient-to-r
                                        from-teal-300
                                        via-cyan-200
                                        to-white
                                        bg-clip-text
                                        text-transparent
                                    "
                                >
                                    ডাবল বিল
                                </span>{" "}
                                টুর্নামেন্ট
                            </h1>

                            <p
                                className="
                                    mx-auto
                                    mt-1.5
                                    max-w-xl
                                    text-[10px]
                                    leading-4
                                    text-white/50

                                    sm:mt-2
                                    sm:text-sm
                                    sm:leading-6

                                    md:text-base
                                "
                            >
                                আমাদের সাথে{" "}
                                <span className="font-bold text-white/80">
                                    {config.opponentClub.name}
                                </span>
                                -এর জমজমাট ডাবল বিল
                                টুর্নামেন্ট।
                            </p>
                        </div>

                        {/* MATCHUP */}
                        <div
                            className="
                                mt-4

                                sm:mt-5

                                md:mt-6
                            "
                        >
                            <ClubMatchup
                                homeClub={config.homeClub}
                                opponentClub={
                                    config.opponentClub
                                }
                            />
                        </div>

                        {/* Tournament Name */}
                        <div
                            className="
                                mt-3
                                text-center

                                sm:mt-4
                            "
                        >
                            <p
                                className="
                                    text-[9px]
                                    font-medium
                                    text-white/30

                                    sm:text-xs
                                "
                            >
                                {config.tournamentName}
                            </p>
                        </div>

                        {/* COUNTDOWN */}
                        <div
                            className="
                                mx-auto
                                mt-2.5
                                max-w-lg

                                sm:mt-3
                            "
                        >
                            <div className="mb-1.5 text-center sm:mb-2">
                                <span
                                    className="
                                        text-[8px]
                                        font-semibold
                                        uppercase
                                        tracking-[0.14em]
                                        text-white/35

                                        sm:text-[10px]
                                        sm:tracking-[0.16em]
                                    "
                                >
                                    ম্যাচ শুরু হতে বাকি
                                </span>
                            </div>

                            <CountdownTimer
                                targetTime={
                                    config.startTime
                                }
                            />
                        </div>

                        {/* INFO */}
                        <div
                            className="
                                mx-auto
                                mt-2.5
                                max-w-3xl

                                sm:mt-3
                            "
                        >
                            <TournamentInfo
                                config={config}
                            />
                        </div>

                        {/* CTA */}
                        <div
                            className="
                                mt-3
                                flex
                                justify-center

                                sm:mt-4
                            "
                        >
                            <FacebookButton
                                url={config.facebookUrl}
                            />
                        </div>
                    </div>
                </section>

                {/* FOOTER */}
                <footer
                    className="
                        flex
                        shrink-0
                        items-center
                        justify-center
                        pt-1
                    "
                >
                    <div
                        className="
                            flex
                            items-center
                            gap-1.5
                            text-[8px]
                            font-medium
                            text-white/20

                            sm:text-[10px]
                        "
                    >
                        <span>
                            সবার জন্য শুভকামনা
                        </span>

                        <span>•</span>

                        <span>
                            মাঠে দেখা হবে
                        </span>
                    </div>
                </footer>
            </div>

            {/* Desktop decorative indicator */}
            <div
                className="
                    pointer-events-none
                    absolute
                    bottom-3
                    left-1/2
                    hidden
                    -translate-x-1/2
                    items-center
                    gap-1
                    text-white/15

                    xl:flex
                "
            >
                <FiArrowDown className="text-xs" />
            </div>
        </main>
    );
};

export default ComingSoonHero;