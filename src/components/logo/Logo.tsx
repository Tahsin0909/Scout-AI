import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export const Logo = ({ className, forceWhite = false }: { className?: string; forceWhite?: boolean }) => {
  if (forceWhite) {
    return (
      <Link href="/" className="inline-block cursor-pointer">
        <div className="">
          <Image
            src="/scoutAiLogoWhite.png"
            width={228}
            height={51}
            loading="eager"
            className={cn("xl:w-[215px] md:w-[177px] xs:w-[152px] w-[127px] h-auto lg:h-[69px] object-contain", className)}
            alt={`${process.env.NEXT_PUBLIC_APP_NAME}`}
          />
        </div>
      </Link>
    );
  }

  return (
    <Link href="/" className="inline-block cursor-pointer">
      <div className="">
        <Image
          src="/scoutAiLogo.png"
          width={228}
          height={51}
          loading="eager"
          className={cn("xl:w-[215px] md:w-[177px] xs:w-[152px] w-[127px] h-auto lg:h-[69px] object-contain dark:hidden", className)}
          alt={`${process.env.NEXT_PUBLIC_APP_NAME}`}
        />

        <Image
          src="/scoutAiLogoWhite.png"
          width={228}
          height={51}
          loading="eager"
          className={cn("xl:w-[215px] md:w-[177px] xs:w-[152px] w-[127px] h-auto lg:h-[69px] object-contain hidden dark:block", className)}
          alt={`${process.env.NEXT_PUBLIC_APP_NAME}`}
        />
      </div>
    </Link>
  );
};