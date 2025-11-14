// src/lib/auth-context.tsx
import { createContext, useContext, useState, useEffect, ReactNode } from "react";

// A simple placeholder auth context for now
interface AuthContextType {
    user: any;
    login: (data: any) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<any>(null);

    const login = (data: any) => setUser(data);
    const logout = () => setUser(null);

    // Simulate checking for a saved user on mount
    useEffect(() => {
        console.log("🔐 Auth context initialized");
    }, []);

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}
