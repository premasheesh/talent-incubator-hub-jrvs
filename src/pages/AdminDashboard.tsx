// src/pages/AdminDashboard.tsx
import { PageHeader } from "@/components/PageHeader";

export default function AdminDashboard() {
    return (
        <div className="p-8">
            <PageHeader
                title="Admin Dashboard"
                description="This is a placeholder for the main admin dashboard."
            />
            <p className="text-muted-foreground mt-4">
                Once we integrate the real dashboard UI, this section will show analytics and job management tools.
            </p>
        </div>
    );
}
