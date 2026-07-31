import Image from "next/image";
import Link from "next/link";
import { social } from "../footer.constants";
import { Logo } from "@/components/logo/Logo";

export const Brand = () => {
  return (
    <div className="sm:col-span-1 col-span-2">
      <Link href="/">
        <Logo />
      </Link>
      <p className="mt-6 mb-12 text-white text-sm max-w-[308px]">
        {/* Stay informed with trusted news and expert insight, delivered daily, for
        free. */}
        Streamline your planning process so that you can focus on what really matters — spending more time outside.
      </p>
      <div className="flex items-center gap-5">
        {social.map((item, id) => (
          <Link
            key={id}
            href={item.link}
            className="transition-opacity duration-300 hover:opacity-50 ease-in-out"
          >
            <Image
              src={item.image}
              alt={item.name}
              height={24}
              width={24}
              className="h-6 w-6 object-contain"
            />
          </Link>
        ))}
      </div>
    </div>
  );
};
