
// import Link from "next/link";
// import { Brand } from "./Brand";
// import { Button } from "@/components/ui/button";

// export const Footer = () => {
//   // Define sections based on the image
//   const footerSections = [
//     {
//       // title: "APEX",
//       title: "Company",
//       links: [
//         { label: "Home", href: "/" },
//         // { label: "Packages", href: "/packages" },
//         { label: "About", href: "/about" },
//         { label: "Articles", href: "/articles" },
//       ],
//     },
//     {
//       // title: "Company",
//       title: "Services",
//       links: [
//         { label: "Services", href: "/" },
//         // { label: "Contact us", href: "/contact" },
//         { label: "Memberships", href: "/memberships" },
//       ],
//     },
//   ];

//   const policy = {
//     links: [
//       { label: "Privacy Policy", href: "/privacy" },
//       { label: "Terms & Conditions", href: "/terms" },
//       { label: "Refund Policy", href: "/refund" },
//     ],
//   };

//   return (
//     <footer className="lg:pt-[90px] pt-[90px] pb-10 bg-dark-primary dark:bg-charcoal-black">
//       <div className="container">
//         <div className="max-w-[1180px] relative z-[1]">
//           {/* Main footer grid */}
//           <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-[345px_1fr_1fr_1fr] gap-10 lg:gap-x-10 lg:gap-y-14">
//             <Brand />
//             {footerSections.map((section, id) => (
//               <div key={id}>
//                 <h2 className="text-lg font-semibold font-work-sans text-white mb-5">
//                   {section.title}
//                 </h2>
//                 <ul className="flex flex-col gap-4">
//                   {section.links.map((link, id) => (
//                     <li key={id}>
//                       <Link
//                         href={link.href}
//                         className="text-silver-gray text-lg transition-colors duration-300 hover:text-white dark:hover:text-primary"
//                       >
//                         {link.label}
//                       </Link>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//             {/* Newsletter section */}
//             <div className="space-y-6 col-span-2 lg:col-span-1">
//               <div>
//                 <h3 className="text-white text-xl font-semibold font-work-sans">
//                   Sign up for our newsletter!
//                 </h3>
//                 <p className="text-silver-gray text-base mt-2">
//                   Streamline your planning process so that you can focus on what really matters - spending more time outside.
//                 </p>
//               </div>
//               <div className="flex flex-col sm:flex-row md:items-center gap-3">
//                 <input
//                   type="email"
//                   placeholder="Your best email address"
//                   className="px-4 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-silver-gray/70 focus:outline-none focus:border-primary transition-colors w-full sm:w-[280px]"
//                 />
//                 <Button
//                   className=" md:text-lg text-sm  font-work-sans font-medium transition-colors duration-300 md:gap-2 gap-1 outline-none border-2 border-primary bg-primary rounded-xl md:px-4 px-2 md:py-2 py-1.5 h-auto">
//                   <span>Subscribe now</span>
//                 </Button>
//               </div>
//             </div>
//           </div>



//           {/* Bottom section with copyright and policies */}
//           <div className="flex sm:flex-row flex-col items-center justify-between lg:mt-12 mt-14">
//             <div>
//               <p className="text-white text-sm">
//                 &copy; {new Date().getFullYear()} Apex Adventure Lab. All rights reserved.
//               </p>
//             </div>
//             <div>
//               <ul className="flex flex-wrap justify-center gap-4">
//                 {policy.links.map((link, id) => (
//                   <li key={id}>
//                     <Link
//                       href={link.href}
//                       className="text-white text-sm underline dark:hover:text-primary transition-colors duration-300 ease-in-out"
//                     >
//                       {link.label}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Big brand text - An American Company */}
//       <div className="w-full overflow-hidden mt-16">
//         <h1 className="text-center text-white font-extrabold text-[10vw] text-nowrap opacity-10 select-none leading-none tracking-widest">
//           apexadvlab
//         </h1>
//       </div>
//     </footer>
//   );
// };




"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Logo } from "@/components/logo/Logo";
import {
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
  FaXTwitter,
} from "react-icons/fa6";

export const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Handle newsletter subscription action
      setEmail("");
    }
  };

  const companyLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Articles", href: "/articles" },
  ];

  const servicesLinks = [
    { label: "How It Works", href: "/how-it-works" },
    { label: "Memberships", href: "/memberships" },
    { label: "Partnerships", href: "/partnership" },
  ];

  const socialLinks = [
    { name: "LinkedIn", icon: FaLinkedinIn, href: "https://linkedin.com" },
    { name: "Instagram", icon: FaInstagram, href: "https://instagram.com" },
    { name: "Facebook", icon: FaFacebookF, href: "https://facebook.com" },
    { name: "Twitter/X", icon: FaXTwitter, href: "https://x.com" },
  ];

  const policyLinks = [
    { label: "Refunds", href: "/refund" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms & Conditions", href: "/terms" },
  ];

  return (
    <footer className="bg-[#181818] text-white pt-14 pb-6 font-sans">
      <div className="container mx-auto px-4 max-w-[1200px]">
        {/* Main Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-12">

          {/* Brand & Info Column (Left) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="inline-block">
              <Logo forceWhite />
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-[320px]">
              Streamline your planning process so that you can focus on what really matters — spending more time outside.
            </p>
            <div className="flex items-center gap-2 pt-1 text-zinc-300 text-sm">
              <Image
                src="/footerImg/us.jpg"
                alt="US Flag"
                width={26}
                height={18}
                className="w-6 h-auto object-cover"
              />
              <span className="font-normal text-zinc-400">An American Company</span>
            </div>
          </div>

          {/* Company Column */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-white text-base font-semibold tracking-wide mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="text-zinc-400 text-sm hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-white text-base font-semibold tracking-wide mb-4">
              Services
            </h3>
            <ul className="space-y-3">
              {servicesLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="text-zinc-400 text-sm hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Social Column (Right) */}
          <div className="lg:col-span-4 space-y-4">
            <p className="text-zinc-400 text-sm font-normal">
              Sign up for our newsletter.
            </p>

            {/* Newsletter Input Box */}
            <form onSubmit={handleSubscribe} className="w-full">
              <div className="flex items-center bg-[#282828] border border-zinc-700/50 rounded-xl p-1 focus-within:border-zinc-500 transition-all w-full max-w-[420px]">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your best email address"
                  className="bg-transparent flex-1 px-3 py-1.5 text-sm text-white placeholder:text-zinc-500 focus:outline-none min-w-0"
                  required
                />
                <button
                  type="submit"
                  className="bg-[#FACC15] hover:bg-[#eab308] text-zinc-950 font-semibold text-sm px-4 py-2 rounded-lg transition-colors duration-200 whitespace-nowrap shrink-0"
                >
                  Subscribe now
                </button>
              </div>
            </form>

            {/* Social Media Boxes */}
            <div className="flex items-center gap-2.5 pt-2">
              {socialLinks.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <a
                    key={idx}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.name}
                    className="w-9 h-9 rounded-lg bg-[#282828] border border-zinc-700/50 flex items-center justify-center text-white hover:bg-zinc-700 hover:border-zinc-500 transition-all duration-200"
                  >
                    <IconComponent className="w-4 h-4 text-zinc-200" />
                  </a>
                );
              })}
            </div>
          </div>

        </div>

        {/* Bottom Bar Divider & Copyright */}
        <div className="border-t border-zinc-800/90 pt-6 pb-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-zinc-400">
            <p>© {new Date().getFullYear()} TripTrax LLC. All rights reserved</p>
            <div className="flex items-center gap-6">
              {policyLinks.map((link, idx) => (
                <Link
                  key={idx}
                  href={link.href}
                  className="hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Large Brand Background Watermark */}
      <div className="w-full overflow-hidden select-none pointer-events-none mt-2">
        <h1 className="text-center text-zinc-600/25 font-extrabold text-[12vw] leading-none tracking-widest lowercase">
          Trip Trax
        </h1>
      </div>
    </footer>
  );
};