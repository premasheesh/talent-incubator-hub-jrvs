// src/pages/NotFound.tsx
import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center h-screen text-center space-y-4 animate-fade-in">
            <h1 className="text-6xl font-bold text-foreground">404</h1>
            <p className="text-muted-foreground text-lg">
                Oops! The page you’re looking for doesn’t exist.
            </p>
            <Link
                to="/"
                className="text-primary hover:underline transition-colors"
            >
                Go back home
            </Link>
        </div>
    );
}
