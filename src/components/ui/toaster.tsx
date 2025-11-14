// src/components/ui/toaster.tsx
import { useEffect } from "react";

export function Toaster() {
    // This is a placeholder toaster for notifications.
    // In production, you can replace it with libraries like `sonner` or `react-hot-toast`.
    useEffect(() => {
        console.log("Toaster initialized");
    }, []);

    return null;
}
