import Link from 'next/link';
import { Button } from '../ui/button';

const PartnerCTA = () => {
    return (
        <div
            className="
        relative isolate flex min-h-[324px] w-full overflow-hidden
        rounded-[28px] bg-[#1e1e1e] px-6 py-[82px]
        text-center text-white md:px-12 mb-14 container
    "
        >
            {/* Background glow */}
            <div
                aria-hidden="true"
                className=" 
            pointer-events-none absolute inset-0 -z-10
            bg-[radial-gradient(ellipse_55%_65%_at_5%_-10%,rgba(123,108,42,0.75),transparent_70%),radial-gradient(ellipse_48%_65%_at_96%_5%,rgba(194,161,45,0.75),transparent_68%)]
        "
            />
            <div className="mx-auto flex w-full max-w-[720px] flex-col items-center">
                <h3
                    className="
                mb-[8px] text-[30px] font-semibold leading-[1.2]
                tracking-[-0.02em] md:text-[40px]
            "
                >
                    Ready to Partner with Scout Ai?
                </h3>

                <p
                    className="
                mb-[20px] max-w-[520px] text-[14px] leading-[20px]
                text-[#a8a8a8]
            "
                >
                    Start inspiring adventures, grow your audience, and earn rewards with the Scout Ai Partner Program.
                </p>

                <div className="flex w-full flex-col justify-center gap-[13px] sm:flex-row">
                    <Button
                        asChild
                    >
                        <Link href="/partnerShip-apply">
                            Apply Now
                        </Link>
                    </Button>
                    <Button
                        asChild
                        variant="ghost"
                        className="h-[42px] sm:w-[151px]"
                    >
                        <Link href="/contact">
                            Contact Us
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default PartnerCTA;