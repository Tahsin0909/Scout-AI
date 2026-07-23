import { cn } from "@/lib/utils";
import Image from "next/image";

export const Logo = ({ className }: { className?: string }) => {
  return (
    <div className="">
      <Image
        src="/apexLogo.png"
        width={180}
        height={40}
        className={cn(
          "xl:w-[170px] xs:w-[140px] w-[130px] h-auto lg:h-[55px] object-contain dark:hidden",
          className
        )}
        alt={`${process.env.NEXT_PUBLIC_APP_NAME}`}
      />
      <Image
        src="/apexLogo.png"
        width={180}
        height={40}
        className={cn(
          "xl:w-[170px] xs:w-[140px] w-[130px] h-auto lg:h-[55px] object-contain not-dark:hidden",
          className
        )}
        alt={`${process.env.NEXT_PUBLIC_APP_NAME}`}
      />
    </div>
  );
};
