// src/components/ui/sonner.tsx
import { useEffect } from "react";

// A simple placeholder for the Sonner toast system.
// You can later replace this with the real `sonner` package.
export function Toaster() {
    useEffect(() => {
        console.log("✅ Sonner toaster mounted");
    }, []);

    return null;
}
