// src/components/ui/card.tsx
// -----------------------------------------------------------------------------
// A simple, modular Card component system (container + header + content + footer).
// -----------------------------------------------------------------------------

import React from "react";
import { cn } from "@/lib/utils";

export const Card = ({
                         className,
                         children,
                         ...props
                     }: React.HTMLAttributes<HTMLDivElement>) => (
    <div
        className={cn(
            "rounded-xl border border-gray-200 bg-white/70 backdrop-blur-md shadow-sm hover:shadow-md transition-all duration-300",
            className
        )}
        {...props}
    >
        {children}
    </div>
);

export const CardHeader = ({
                               className,
                               children,
                               ...props
                           }: React.HTMLAttributes<HTMLDivElement>) => (
    <div className={cn("p-6 border-b border-gray-100", className)} {...props}>
        {children}
    </div>
);

export const CardTitle = ({
                              className,
                              children,
                              ...props
                          }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className={cn("text-lg font-semibold text-gray-900", className)} {...props}>
        {children}
    </h3>
);

export const CardDescription = ({
                                    className,
                                    children,
                                    ...props
                                }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className={cn("text-sm text-gray-600", className)} {...props}>
        {children}
    </p>
);

export const CardContent = ({
                                className,
                                children,
                                ...props
                            }: React.HTMLAttributes<HTMLDivElement>) => (
    <div className={cn("p-6", className)} {...props}>
        {children}
    </div>
);

export const CardFooter = ({
                               className,
                               children,
                               ...props
                           }: React.HTMLAttributes<HTMLDivElement>) => (
    <div className={cn("p-6 border-t border-gray-100", className)} {...props}>
        {children}
    </div>
);
