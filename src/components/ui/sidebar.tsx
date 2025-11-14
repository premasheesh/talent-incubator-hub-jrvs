// src/components/ui/sidebar.tsx
import { ReactNode, createContext, useContext, useState } from "react";

interface SidebarContextType {
    isOpen: boolean;
    toggle: () => void;
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export function SidebarProvider({ children }: { children: ReactNode }) {
    const [isOpen, setIsOpen] = useState(true);
    const toggle = () => setIsOpen((prev) => !prev);

    return (
        <SidebarContext.Provider value={{ isOpen, toggle }}>
            <div className="flex w-full">
                {children}
            </div>
        </SidebarContext.Provider>
    );
}

export function useSidebar() {
    const context = useContext(SidebarContext);
    if (!context) {
        throw new Error("useSidebar must be used within a SidebarProvider");
    }
    return context;
}
