// src/components/ui/badge.tsx
// -----------------------------------------------------------------------------
// Simple reusable <Badge> component.
// -----------------------------------------------------------------------------

import * as React from "react";
import { cn } from "@/lib/utils"; // helper for joining class names

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: "default" | "outline";
}

export function Badge({
                          className,
                          variant = "default",
                          ...props
                      }: BadgeProps) {
    return (
        <div
            className={cn(
                "inline-flex items-center rounded-full px-3 py-1 text-sm font-medium transition-colors",
                variant === "default"
                    ? "bg-primary text-primary-foreground"
                    : "border border-input text-muted-foreground",
                className
            )}
            {...props}
        />
    );
}
