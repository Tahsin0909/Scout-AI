import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export const Logo = ({ className, forceWhite = false }: { className?: string; forceWhite?: boolean }) => {
  if (forceWhite) {
    return (
      <Link href="/" className="inline-block cursor-pointer">
        <div className="">
          <Image
            src="/apexLogo.png"
            width={180}
            height={40}
            loading="eager"
            className={cn(
              "xl:w-[170px] md:w-[140px] xs:w-[120px] w-[100px] h-auto lg:h-[55px] object-contain",
              className
            )}
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
          src="/apexLogo.png"
          width={180}
          height={40}
          loading="eager"
          className={cn(
            "xl:w-[170px] md:w-[140px] xs:w-[120px] w-[100px] h-auto lg:h-[55px] object-contain dark:hidden invert",
            className
          )}
          alt={`${process.env.NEXT_PUBLIC_APP_NAME}`}
        />
        <Image
          src="/apexLogo.png"
          width={180}
          height={40}
          loading="eager"
          className={cn(
            "xl:w-[170px] md:w-[140px] xs:w-[120px] w-[100px] h-auto lg:h-[55px] object-contain not-dark:hidden",
            className
          )}
          alt={`${process.env.NEXT_PUBLIC_APP_NAME}`}
        />
      </div>
    </Link>
  );
};
