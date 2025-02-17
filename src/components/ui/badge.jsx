import * as React from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-full border px-3 py-1 text-sm font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-blue-8 focus:ring-offset-2 shadow-md",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-blue-9 text-white  transition transition-duration-300 cursor-pointer",
        secondary: "border border-blue-7 bg-blue-3 text-blue-11 ",
        destructive:
          "border-transparent bg-red-500 text-white hover:bg-red-600",
        outline: "border border-blue-7 text-blue-11 hover:bg-blue-3",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

function Badge({ className, variant, ...props }) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
