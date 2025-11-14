// src/hooks/use-user-role.ts
import { useEffect, useState } from "react";

// A simple placeholder hook for role-based logic.
// Later, this can be tied to your AuthProvider or backend API.
export function useUserRole() {
    const [loading, setLoading] = useState(true);
    const [role, setRole] = useState<string | null>(null);

    useEffect(() => {
        // Simulate async fetch
        const timer = setTimeout(() => {
            // You can change this to "admin" to test admin routes
            setRole("user");
            setLoading(false);
        }, 500);

        return () => clearTimeout(timer);
    }, []);

    const isAdmin = role === "admin";
    const isRecruiterOrAdmin = role === "recruiter" || role === "admin";

    return { role, isAdmin, isRecruiterOrAdmin, loading };
}
