"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '../ui/button';

const PlanCta = () => {
    const pathname = usePathname();

    if (pathname === "/memberships") {
        return null;
    }

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
                    {/* Your next expedition starts here. */}
                    Choose Your Adventure
                    {/* Your next expedition starts here. */}
                    Choose Your Adventure
                </h3>

                <p
                    className="
                mb-[20px] max-w-[520px] text-[14px] leading-[20px]
                text-[#a8a8a8]
            "
                >
                    {/* Scout AI is ready. Give us the details and we&apos;ll build your
                    dossier — adventure, down to a science. */}
                    Join today — Scout AI is ready. Tell us the plan and we build you the trip.
                </p>

                <div className="flex w-full flex-col justify-center gap-[13px] sm:flex-row">
                    <Button
                        asChild
                    >
                        <Link href="/plan">
                            {/* Plan Your Trip */}
                            Explore
                            {/* Plan Your Trip */}
                            Explore
                        </Link>
                    </Button>
                    <Button
                        asChild
                        variant="ghost"
                        className="h-[42px] sm:w-[151px]"
                    >
                        <Link href="/memberships">
                            {/* Services Plan */}
                            Memberships
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default PlanCta;