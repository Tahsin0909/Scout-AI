import Link from "next/link";
import { Brand } from "./Brand";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  // Define sections based on the image
  const footerSections = [
    {
      title: "APEX",
      links: [
        { label: "Home", href: "/" },
        { label: "Packages", href: "/packages" },
        { label: "About", href: "/about" },
        { label: "Articles", href: "/articles" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "Services", href: "/services" },
        { label: "Contact us", href: "/contact" },
        { label: "Memberships", href: "/memberships" },
      ],
    },
  ];

  const policy = {
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms & Conditions", href: "/terms" },
    ],
  };

  return (
    <footer className="lg:pt-[90px] pt-[90px] pb-10 bg-dark-primary dark:bg-charcoal-black">
      <div className="container">
        <div className="max-w-[1180px] relative z-[1]">
          {/* Main footer grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-[345px_1fr_1fr_1fr] gap-10 lg:gap-x-10 lg:gap-y-14">
            <Brand />
            {footerSections.map((section, id) => (
              <div key={id}>
                <h2 className="text-lg font-semibold font-work-sans text-white mb-5">
                  {section.title}
                </h2>
                <ul className="flex flex-col gap-4">
                  {section.links.map((link, id) => (
                    <li key={id}>
                      <Link
                        href={link.href}
                        className="text-silver-gray text-lg transition-colors duration-300 hover:text-white dark:hover:text-primary"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            {/* Newsletter section */}
            <div className="space-y-6 col-span-2 lg:col-span-1">
              <div>
                <h3 className="text-white text-xl font-semibold font-work-sans">
                  Sign up for our newsletter!
                </h3>
                <p className="text-silver-gray text-base mt-2">
                  Streamline your planning process so that you can focus on what really matters - spending more time outside.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row md:items-center gap-3">
                <input
                  type="email"
                  placeholder="Your best email address"
                  className="px-4 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-silver-gray/70 focus:outline-none focus:border-primary transition-colors w-full sm:w-[280px]"
                />
                <Button
                  className=" md:text-lg text-sm  font-work-sans font-medium transition-colors duration-300 md:gap-2 gap-1 outline-none border-2 border-primary bg-primary rounded-xl md:px-4 px-2 md:py-2 py-1.5 h-auto">
                  <span>Subscribe now</span>
                </Button>
              </div>
            </div>
          </div>



          {/* Bottom section with copyright and policies */}
          <div className="flex sm:flex-row flex-col items-center justify-between lg:mt-12 mt-14">
            <div>
              <p className="text-white text-sm">
                &copy; {new Date().getFullYear()} Apex Adventure Lab. All rights reserved.
              </p>
            </div>
            <div>
              <ul className="flex flex-wrap justify-center gap-4">
                {policy.links.map((link, id) => (
                  <li key={id}>
                    <Link
                      href={link.href}
                      className="text-white text-sm underline dark:hover:text-primary transition-colors duration-300 ease-in-out"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Big brand text - An American Company */}
      <div className="w-full overflow-hidden mt-16">
        <h1 className="text-center text-white font-extrabold text-[10vw] text-nowrap opacity-10 select-none leading-none tracking-widest">
          apexadvlab
        </h1>
      </div>
    </footer>
  );
};