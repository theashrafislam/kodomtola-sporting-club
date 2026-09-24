const FacebookIcon = () => (
    <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-4 w-4 sm:h-5 sm:w-5"
        aria-hidden="true"
    >
        <path d="M13.5 22v-8h2.75l.5-3h-3.25V9.05c0-.87.24-1.46 1.5-1.46h1.6V4.9c-.28-.04-1.23-.12-2.34-.12-2.31 0-3.89 1.41-3.89 4v2.22H8.25v3h2.62v8h2.63Z" />
    </svg>
);

const FacebookButton = ({ url }) => {
    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="আমাদের Facebook Page-এ যান"
            className="
                inline-flex
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-[#1877F2]
                px-4
                py-2.5
                text-xs
                font-bold
                text-white
                shadow-lg
                shadow-blue-950/20
                transition
                duration-300
                hover:-translate-y-0.5
                hover:bg-[#166FE5]
                focus:outline-none
                focus:ring-2
                focus:ring-blue-400
                focus:ring-offset-2
                focus:ring-offset-[#061118]

                sm:px-5
                sm:py-3
                sm:text-sm
            "
        >
            <FacebookIcon />

            <span>
                আমাদের Facebook Page-এ যান
            </span>
        </a>
    );
};

export default FacebookButton;