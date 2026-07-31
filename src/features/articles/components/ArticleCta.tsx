import { Button } from '@/components/ui/button';

const ArticleCta = () => {
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
                    Adventure Tips In Your Inbox
                </h3>

                <p
                    className="
                mb-[20px] max-w-[720px] text-[14px] leading-[20px]
                text-[#a8a8a8]
            "
                >
                    Since I clearly won&apos;t have 20,000+ subscribers to start, can we make this more generic for the time being?
                    Join the explorers who receive our monthly gear reviews, destination deep-dive, and planning tips.
                </p>
                {/* Newsletter section */}
                <div className="space-y-6 col-span-2 lg:col-span-1">
                    <div className="flex flex-col sm:flex-row md:items-center gap-3">
                        <input
                            type="email"
                            placeholder="Your best email address"
                            className="px-4 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-silver-gray/70 focus:outline-none focus:border-primary transition-colors w-full sm:w-[280px]"
                        />
                        <Button
                            className=" md:text-lg text-sm  font-work-sans font-medium transition-colors duration-300 md:gap-2 gap-1 outline-none border-2 border-primary bg-primary rounded-xl md:px-4 px-2 md:py-2 py-1.5 h-auto">
                            <span>Join now</span>
                        </Button>
                    </div>
                </div>
                <span
                    className="
                mb-[20px] max-w-[720px] text-[14px] mt-3 leading-[20px]
                text-[#a8a8a8]
            "
                >We respect your privacy. Unsubscribe anytime. See our Privacy Policy for more details.</span>
            </div>
        </div>
    );
};

export default ArticleCta;