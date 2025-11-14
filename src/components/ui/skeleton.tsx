// src/components/ui/skeleton.tsx
import { cn } from "@/lib/utils";

export function Skeleton({
                             className,
                         }: {
    className?: string;
}) {
    return (
        <div
            className={cn(
                "animate-pulse rounded-md bg-gray-300/60 dark:bg-gray-700/60",
                className
            )}
        />
    );
}
