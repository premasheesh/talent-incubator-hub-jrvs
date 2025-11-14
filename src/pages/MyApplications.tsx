// src/pages/MyApplications.tsx
import { PageHeader } from "@/components/PageHeader";

export default function MyApplications() {
    return (
        <div className="p-8">
            <PageHeader
                title="My Applications"
                description="This is a placeholder for the user's application history."
            />
            <p className="text-muted-foreground mt-4">
                This page will later show all jobs the user has applied to, pulled from
                the backend via React Query.
            </p>
        </div>
    );
}
