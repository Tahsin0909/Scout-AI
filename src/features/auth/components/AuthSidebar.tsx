import { Logo } from "@/components/logo/Logo";

export default function AuthSidebar() {
    const backgroundImage = '/authSidebar.png'
    return (
        <aside
            className="
        relative isolate hidden min-h-screen
        overflow-hidden bg-[#112631]
        text-white lg:flex lg:flex-col
      "
        >
            {/* Background image */}
            <div
                aria-hidden="true"
                className="
          absolute inset-0 -z-30
          bg-cover bg-center bg-no-repeat
        "
                style={{
                    backgroundImage: `url("${backgroundImage}")`,
                }}
            />

            {/* Main dark overlay */}
            <div
                aria-hidden="true"
                className="
          pointer-events-none absolute inset-0 -z-20
          bg-[linear-gradient(to_bottom,rgba(13,38,52,0.78)_0%,rgba(8,24,32,0.22)_42%,rgba(5,15,20,0.72)_100%)]
        "
            />

            {/* Bottom readability overlay */}
            <div
                aria-hidden="true"
                className="
          pointer-events-none absolute inset-0 -z-10
          bg-[linear-gradient(to_top,rgba(4,12,16,0.95)_0%,rgba(4,12,16,0.42)_30%,transparent_62%)]
        "
            />

            <div
                className="
          flex h-full min-h-screen flex-col
          px-10 pb-10 pt-10
          xl:px-14 xl:pb-14 xl:pt-12
        "
            >
                {/* Brand */}
                <div className="">
                    <Logo />

                    <h1
                        className="
              mt-6 text-[36px] font-semibold
              leading-none tracking-[-0.035em]
              xl:text-[42px]
            "
                    >
                        Plan. Track. Go.
                    </h1>

                    <p
                        className="
              mt-5 max-w-[520px]
              text-sm leading-[1.6] text-white/70
              xl:text-base
            "
                    >
                        Every plan is powered by advanced AI research and
                        reviewed by a human adventure specialist, ensuring
                        every detail is expedition-ready.
                    </p>
                </div>

                {/* Quote */}
                <blockquote
                    className="
            mt-auto max-w-[560px]
            border-l-2 border-primary
            pl-5
          "
                >
                    <p
                        className="
              text-lg italic leading-[1.45]
              text-white/90
              xl:text-xl
            "
                    >
                        “The Most Comprehensive AI-Powered Adventure
                        Planning Platform We&apos;ve Tested.”
                    </p>

                    <footer className="mt-3 text-sm text-white/55">
                        — Outside Magazine
                    </footer>
                </blockquote>
            </div>
        </aside>
    );
}