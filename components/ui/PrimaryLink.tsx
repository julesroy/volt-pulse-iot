import React from "react";
import Link, { LinkProps } from "next/link";

interface PrimaryLinkProps extends LinkProps {
    children: React.ReactNode;
    size?: "sm" | "md" | "lg";
    className?: string;
    target?: string;
    rel?: string;
}

export default function PrimaryLink({
    children,
    size = "md",
    className = "",
    ...props
}: PrimaryLinkProps) {
    const sizeStyles = {
        sm: "px-3 py-2 text-xs sm:text-sm",
        md: "px-6 py-3.5 text-sm",
        lg: "px-8 py-4 text-base",
    }[size];

    const baseStyles =
        "inline-flex items-center justify-center rounded-lg bg-primary hover:bg-primary/90 text-zinc-950 font-semibold transition-all shadow-[0_0_24px_rgba(0,207,111,0.25)] hover:shadow-[0_0_32px_rgba(0,207,111,0.4)] cursor-pointer text-center select-none";

    return (
        <Link
            className={`${baseStyles} ${sizeStyles} ${className}`.trim()}
            {...props}
        >
            {children}
        </Link>
    );
}