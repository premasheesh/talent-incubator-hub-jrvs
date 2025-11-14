// src/components/ui/tooltip.tsx
import { ReactNode } from "react";

// Simple wrapper component to mimic a tooltip provider.
// In production, you can integrate Radix UI, shadcn, or HeadlessUI tooltip systems.
export function TooltipProvider({ children }: { children: ReactNode }) {
    return <>{children}</>;
}
