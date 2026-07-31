import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const primaryStyles = [
  "border border-primary",
  "bg-primary text-primary-foreground",
  "hover:bg-primary/85 hover:border-primary/85",
].join(" ");

const secondaryStyles = [
  "border border-white/10",
  "bg-button-secondary text-button-secondary-foreground",
  "hover:bg-button-secondary-hover",
  "hover:border-white/20",
  "hover:text-button-secondary-foreground",
].join(" ");

const buttonVariants = cva(
  [
    "inline-flex shrink-0 cursor-pointer",
    "items-center justify-center gap-2 whitespace-nowrap",
    "font-medium",

    // Simple and smooth transition
    "transition-[color,background-color,border-color,opacity]",
    "duration-200 ease-out",

    "outline-none",
    "focus-visible:ring-2 focus-visible:ring-ring/50",
    "focus-visible:ring-offset-2",
    "focus-visible:ring-offset-background",

    // Simple click feedback
    "active:opacity-80",

    "disabled:pointer-events-none",
    "disabled:cursor-not-allowed",
    "disabled:opacity-50",

    "aria-disabled:pointer-events-none",
    "aria-disabled:cursor-not-allowed",
    "aria-disabled:opacity-50",

    "[&_svg]:pointer-events-none",
    "[&_svg]:shrink-0",
    "[&_svg:not([class*='size-'])]:size-4",
  ].join(" "),
  {
    variants: {
      variant: {
        default: primaryStyles,

        primary: primaryStyles,

        secondary: secondaryStyles,

        ghost: [
          "border border-transparent",
          "bg-[#222222] hover:bg-[#2c2c2c]",
          "font-medium text-white hover:text-white",
        ].join(" "),

        white: [
          "border border-white",
          "bg-white text-black",
          "hover:bg-primary",
          "hover:border-white/85",
          "hover:text-black",
        ].join(" "),

        destructive: [
          "border border-destructive",
          "bg-destructive text-destructive-foreground",
          "hover:bg-destructive/85",
          "hover:border-destructive/85",
          "focus-visible:ring-destructive/30",
        ].join(" "),

        outline: [
          "border",
          "bg-[#222222] hover:bg-[#2c2c2c]",
          "border-primary/50",
          "font-medium text-white hover:text-white",
          ""
        ].join(" "),

        link: [
          "h-auto border-0 bg-transparent p-0",
          "text-primary",
          "underline-offset-4",
          "hover:underline",
          "active:opacity-70",
        ].join(" "),
      },

      size: {
        sm: "h-9 rounded-lg px-4 text-sm has-[>svg]:px-3",

        default:
          "h-10 rounded-lg px-5 text-sm has-[>svg]:px-4",

        lg:
          "h-11 rounded-xl px-6 text-sm sm:text-base has-[>svg]:px-5",

        xl:
          "h-[52px] rounded-xl px-8 text-base sm:text-lg has-[>svg]:px-6",

        icon:
          "size-10 rounded-lg p-0",

        "icon-sm":
          "size-9 rounded-lg p-0",

        "icon-lg":
          "size-11 rounded-xl p-0",
      },

      fullWidth: {
        true: "w-full",
        false: "w-auto",
      },
    },

    defaultVariants: {
      variant: "primary",
      size: "default",
      fullWidth: false,
    },
  },
);

type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

function Button({
  className,
  variant,
  size,
  fullWidth,
  asChild = false,
  type,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      type={asChild ? undefined : type ?? "button"}
      className={cn(
        buttonVariants({
          variant,
          size,
          fullWidth,
        }),
        className,
      )}
      {...props}
    />
  );
}

export { Button, buttonVariants };
export type { ButtonProps };