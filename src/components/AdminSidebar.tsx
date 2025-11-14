// src/components/AdminSidebar.tsx
import { Link, useLocation } from "react-router-dom";
import { useSidebar } from "@/components/ui/sidebar";

export function AdminSidebar() {
    const { isOpen, toggle } = useSidebar();
    const location = useLocation();

    const adminLinks = [
        { label: "Dashboard", path: "/admin" },
        { label: "Create Job", path: "/admin/create-job" },
        { label: "Email Management", path: "/admin/email-management" },
        { label: "Applicants", path: "/admin/applicants" },
        { label: "Application Results", path: "/admin/application-results" },
    ];

    return (
        <aside
            className={`${
                isOpen ? "w-64" : "w-16"
            } bg-gray-800 text-white h-screen p-4 flex flex-col transition-all duration-300`}
        >
            <button
                onClick={toggle}
                className="mb-6 text-sm text-gray-300 hover:text-white"
            >
                {isOpen ? "Collapse ◀" : "Expand ▶"}
            </button>

            <nav className="flex flex-col gap-2">
                {adminLinks.map((link) => (
                    <Link
                        key={link.path}
                        to={link.path}
                        className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                            location.pathname === link.path
                                ? "bg-gray-700 text-blue-400"
                                : "hover:bg-gray-700"
                        }`}
                    >
                        {link.label}
                    </Link>
                ))}
            </nav>
        </aside>
    );
}
