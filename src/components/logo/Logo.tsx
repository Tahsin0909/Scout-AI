import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export const Logo = ({ className, forceWhite = false }: { className?: string; forceWhite?: boolean }) => {
  if (forceWhite) {
    return (
      <Link href="/" className="inline-block cursor-pointer">
        <div>
          <Image
            src="/scoutAiLogoWhite.png"
            width={80}
            height={80}
            loading="eager"
            className={cn("w-[50px] h-[50px] xs:w-[55px] xs:h-[55px] sm:w-[60px] sm:h-[60px] md:w-[65px] md:h-[65px] lg:w-[75px] lg:h-[75px] xl:w-[80px] xl:h-[80px] object-contain", className)}
            alt={`${process.env.NEXT_PUBLIC_APP_NAME}`}
          />
        </div>
      </Link>
    );
  }

  return (
    <Link href="/" className="inline-block cursor-pointer">
      <div>
        <Image
          src="/scoutAiLogo.png"
          width={80}
          height={80}
          loading="eager"
          className={cn("w-[50px] h-[50px] xs:w-[55px] xs:h-[55px] sm:w-[60px] sm:h-[60px] md:w-[65px] md:h-[65px] lg:w-[75px] lg:h-[75px] xl:w-[80px] xl:h-[80px] object-contain dark:hidden", className)}
          alt={`${process.env.NEXT_PUBLIC_APP_NAME}`}
        />

        <Image
          src="/scoutAiLogoWhite.png"
          width={80}
          height={80}
          loading="eager"
          className={cn("w-[50px] h-[50px] xs:w-[55px] xs:h-[55px] sm:w-[60px] sm:h-[60px] md:w-[65px] md:h-[65px] lg:w-[75px] lg:h-[75px] xl:w-[80px] xl:h-[80px] object-contain hidden dark:block", className)}
          alt={`${process.env.NEXT_PUBLIC_APP_NAME}`}
        />
      </div>
    </Link>
  );
};