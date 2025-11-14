// src/components/Navigation.tsx
import { Link, useLocation } from "react-router-dom";

export function Navigation() {
    const location = useLocation();

    const navItems = [
        { label: "Home", path: "/" },
        { label: "Jobs", path: "/jobs" },
        { label: "My Applications", path: "/my-applications" },
        { label: "Contact", path: "/contact" },
    ];

    return (
        <nav className="flex items-center justify-between bg-white text-gray-800 border-b border-gray-200 shadow-sm px-6 py-4">
            {/* Left side - Logo + Nav Links */}
            <div className="flex items-center gap-8">
                <h1 className="font-bold text-2xl text-primary">
                    Talent Incubator Hub
                </h1>

                {navItems.map((item) => (
                    <Link
                        key={item.path}
                        to={item.path}
                        className={`transition-colors hover:text-primary ${
                            location.pathname === item.path
                                ? "text-primary font-semibold"
                                : "text-gray-700"
                        }`}
                    >
                        {item.label}
                    </Link>
                ))}
            </div>

            {/* Right side - Login Button */}
            <div>
                <Link
                    to="/auth"
                    className="bg-primary hover:bg-primary/90 text-white px-5 py-2 rounded-md text-sm font-medium transition-all shadow-sm"
                >
                    Login
                </Link>
            </div>
        </nav>
    );
}
