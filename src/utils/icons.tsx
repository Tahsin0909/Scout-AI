export const ArticlesIcon = () => {
    return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="120" height="120">
        <rect x="20" y="10" width="70" height="85" rx="4" fill="#f0f0f0" stroke="#d0d0d0" strokeWidth="2" />

        <line x1="30" y1="28" x2="75" y2="28" stroke="#c0c0c0" strokeWidth="3" strokeLinecap="round" />
        <line x1="30" y1="40" x2="70" y2="40" stroke="#c0c0c0" strokeWidth="3" strokeLinecap="round" />
        <line x1="30" y1="52" x2="65" y2="52" stroke="#c0c0c0" strokeWidth="3" strokeLinecap="round" />
        <line x1="30" y1="64" x2="72" y2="64" stroke="#c0c0c0" strokeWidth="3" strokeLinecap="round" />
        <line x1="30" y1="76" x2="55" y2="76" stroke="#c0c0c0" strokeWidth="3" strokeLinecap="round" />

        <path d="M70 10 L70 25 L85 25" fill="#e8e8e8" stroke="#d0d0d0" strokeWidth="2" />

        <circle cx="82" cy="72" r="22" fill="none" stroke="#666" strokeWidth="4" />
        <line x1="97" y1="87" x2="110" y2="100" stroke="#666" strokeWidth="5" strokeLinecap="round" />

        <circle cx="82" cy="72" r="28" fill="none" stroke="#ff6b6b" strokeWidth="2" strokeDasharray="4 4" />
    </svg>
}

type SvgIconProps = {
    className?: string;
};

export function ApplicationFormIcon({
    className,
}: SvgIconProps) {
    return (
        <svg
            aria-hidden="true"
            viewBox="0 0 48 48"
            fill="none"
            className={className}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M15 5.5H29.5L38 14V39.5C38 41.433 36.433 43 34.5 43H15C13.067 43 11.5 41.433 11.5 39.5V9C11.5 7.067 13.067 5.5 15 5.5Z"
                stroke="currentColor"
                strokeWidth="2.3"
                strokeLinejoin="round"
            />

            <path
                d="M29 6V14.5H37.5"
                stroke="currentColor"
                strokeWidth="2.3"
                strokeLinejoin="round"
            />

            <path
                d="M18 21H31"
                stroke="currentColor"
                strokeWidth="2.3"
                strokeLinecap="round"
            />

            <path
                d="M18 27H31"
                stroke="currentColor"
                strokeWidth="2.3"
                strokeLinecap="round"
            />

            <path
                d="M18 33H25"
                stroke="currentColor"
                strokeWidth="2.3"
                strokeLinecap="round"
            />

            <circle
                cx="34"
                cy="35"
                r="8"
                fill="currentColor"
            />

            <path
                d="M30.5 35L33 37.5L37.5 32.5"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

export function ReviewClockIcon({
    className,
}: SvgIconProps) {
    return (
        <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            className={className}
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle
                cx="12"
                cy="12"
                r="8.5"
                stroke="currentColor"
                strokeWidth="1.8"
            />

            <path
                d="M12 7.5V12L15.25 14"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
            />

            <path
                d="M8.5 3.5H15.5"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
            />
        </svg>
    );
}