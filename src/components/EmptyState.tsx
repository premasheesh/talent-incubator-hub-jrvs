// src/components/EmptyState.tsx
// -----------------------------------------------------------------------------
// A small empty-state display component to show when no data or jobs are found.
// -----------------------------------------------------------------------------

import React from "react";
import { cn } from "@/lib/utils"; // helper for merging classes

interface EmptyStateProps {
    icon?: React.ElementType;
    title: string;
    description?: string;
    action?: {
        label: string;
        onClick: () => void;
    };
    className?: string;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
                                                          icon: Icon,
                                                          title,
                                                          description,
                                                          action,
                                                          className = "",
                                                      }) => {
    return (
        <div
            className={cn(
                "flex flex-col items-center justify-center text-center py-20 px-4 rounded-xl border border-gray-200 bg-white/60 backdrop-blur-md shadow-sm",
                className
            )}
        >
            {Icon && <Icon className="h-12 w-12 text-gray-400 mb-4" />}
            <h2 className="text-2xl font-semibold mb-2">{title}</h2>
            {description && (
                <p className="text-gray-600 max-w-md mb-6">{description}</p>
            )}
            {action && (
                <button
                    onClick={action.onClick}
                    className="px-5 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition"
                >
                    {action.label}
                </button>
            )}
        </div>
    );
};
