// src/pages/ApplicationResults.tsx
import { PageHeader } from "@/components/PageHeader";

export default function ApplicationResults() {
    return (
        <div className="p-8">
            <PageHeader
                title="Application Results"
                description="View and manage the outcome of submitted job applications."
            />
            <p className="text-muted-foreground mt-4">
                This page will later display shortlisted candidates, test scores, and interview results.
            </p>
        </div>
    );
}
