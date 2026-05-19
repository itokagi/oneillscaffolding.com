import * as React from "react";
import { Slot, Slottable } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
const buttonVariants = cva("inline-flex items-center justify-center gap-3 rounded-button whitespace-nowrap transition-all duration-200 ease-in-out focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50", {
    variants: {
        variant: {
            default: "border-[1.5px] border-punch-dark bg-punch font-medium text-white shadow-[0_3px_0_0_var(--color-punch-dark)] hover:translate-y-[3px] hover:shadow-none btn-light:border-neutral-lighter btn-light:bg-white btn-light:text-neutral-darkest btn-light:shadow-[0_3px_0_0_var(--color-neutral-lighter)] btn-light:hover:shadow-none",
            alternate: "border-[1.5px] border-neutral-lighter bg-white font-medium text-neutral-darkest shadow-[0_3px_0_0_var(--color-neutral-lighter)] hover:shadow-none",
            secondary: "border-[1.5px] border-punch bg-transparent font-medium text-punch shadow-[0_3px_0_0_var(--color-punch-dark)] hover:translate-y-[3px] hover:shadow-none alternate:border-white-20 alternate:bg-transparent alternate:text-white alternate:shadow-[0_3px_0_0_var(--color-white-20)] alternate:hover:translate-y-[3px] alternate:hover:shadow-none",
            "secondary-alt": "border-[1.5px] border-white-20 bg-transparent font-medium text-white shadow-[0_3px_0_0_var(--color-white-20)] hover:translate-y-[3px] hover:shadow-none",
            link: "gap-2 text-scheme-text",
            "link-alt": "gap-2 text-white",
            ghost: "hover:bg-neutral-darkest hover:text-white",
            none: "",
        },
        size: {
            default: "mb-1 px-6 py-2.5",
            sm: "mb-1 px-5 py-1.5",
            link: "p-0",
            icon: "size-10",
            none: "",
        },
    },
    defaultVariants: {
        variant: "default",
        size: "default",
    },
});
function Button({ className, variant, size, asChild = false, iconLeft, iconRight, children, ...props }) {
    const Comp = asChild ? Slot : "button";
    return (<Comp data-slot="button" data-variant={variant || "default"} className={cn(buttonVariants({ variant, size, className }))} {...props}>
      {iconLeft && iconLeft}
      <Slottable>{children}</Slottable>
      {iconRight && iconRight}
    </Comp>);
}
export { Button, buttonVariants };
