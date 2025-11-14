// src/pages/CreateJob.tsx
import { PageHeader } from "@/components/PageHeader";

export default function CreateJob() {
    return (
        <div className="p-8">
            <PageHeader
                title="Create Job"
                description="This page allows admins to create new job postings."
            />
            <p className="text-muted-foreground mt-4">
                The real job creation form will be added here during migration.
            </p>
        </div>
    );
}
