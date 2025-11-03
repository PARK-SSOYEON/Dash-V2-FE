import * as React from "react";
import {cn} from "../../lib/cn";
import {cva, type VariantProps} from "class-variance-authority";
import {IconRegistry} from "../icons/IconRegistry";
import {Icon} from "./Icon";

const baseStyles = "flex items-center justify-center rounded-full py-5 text-base gap-4 font-semibold"

const buttonVariants = cva(baseStyles, {
    variants: {
        mode: {
            mono:
                "gradient-border bg-white text-gray-500 hover:bg-gray-50 " +
                "focus-visible:ring-offset-2 focus-visible:ring-offset-white",
            color_line:
                "border border-blue-500 bg-white text-blue-600 hover:bg-blue-50 " +
                "focus-visible:ring-offset-2 focus-visible:ring-offset-white",
            color_fill:
                "bg-blue-500 text-white hover:bg-blue-600 " +
                "focus-visible:ring-offset-2 focus-visible:ring-offset-white",
        },
        size: {
            sm: "px-0",
            md: "flex-1",
        },
        iconOnly: {
            true: "p-0 gap-0 aspect-square",
            false: "",
        },
    },
    compoundVariants: [
        {size: "sm", iconOnly: true, class: "h-14 w-14 rounded-full"},
    ],
    defaultVariants: {
        mode: "color_line",
        size: "md",
        iconOnly: false,
    },
});

type ButtonVariantProps = VariantProps<typeof buttonVariants>;

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
    ButtonVariantProps & {
    icon?: keyof typeof IconRegistry;
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>
(
    (
        {
            mode,
            size,
            icon,
            children,
            className,
            ...props
        },
        ref
    ) => {
        const isIconOnly = size === "sm";
        return (
            <button
                ref={ref}
                className={cn(buttonVariants({mode, size, iconOnly: isIconOnly}), className)}
                {...props}
            >
                {icon && <Icon name={icon} size={20} color="currentColor"/>}
                {!isIconOnly && children ? <span>{children}</span> : null}
            </button>
        );
    }
);
