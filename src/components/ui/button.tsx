// src/components/ui/button.tsx
import * as React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "default" | "glass" | "soft" | "jarvisLight"; // <- added
    size?: "sm" | "md" | "lg";
}

export const Button: React.FC<ButtonProps> = ({
                                                  variant = "default",
                                                  size = "md",
                                                  className = "",
                                                  ...props
                                              }) => {
    // base: shared styles
    const base =
        "inline-flex items-center justify-center gap-2 rounded-md font-medium transition-all " +
        "focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed " +
        "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg]:size-4";

    // variants:
    // - default: solid primary
    // - glass: translucent hero-style
    // - soft: neutral bg, subtle border
    // - jarvisLight: off-white button with Jarvis red text (your request)
    const variants = {
        default: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-400",
        glass:
            "bg-white/15 text-white border border-white/30 backdrop-blur-2xl " +
            "hover:bg-white/25 hover:shadow-glow focus:ring-accent/50",
        soft:
            "bg-muted/40 text-foreground border border-border hover:bg-muted/60 focus:ring-ring",
        jarvisLight:
        // uses your Tailwind CSS variables from tailwind.config (jarvis.red etc.)
            "bg-white text-jarvis-red border border-jarvis-red/30 hover:bg-jarvis-light " +
            "focus:ring-jarvis-red/40",
    } as const;

    // sizes
    const sizes = {
        sm: "px-3 py-1.5 text-sm h-9",
        md: "px-5 py-2.5 text-base h-11",
        lg: "px-8 py-3 text-lg h-12",
    } as const;

    return (
        <button className={cn(base, variants[variant], sizes[size], className)} {...props} />
    );
};
