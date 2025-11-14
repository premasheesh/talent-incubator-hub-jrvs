// src/pages/EditJob.tsx
import { PageHeader } from "@/components/PageHeader";

export default function EditJob() {
    return (
        <div className="p-8">
            <PageHeader
                title="Edit Job"
                description="This page will allow admins to update existing job details."
            />
            <p className="text-muted-foreground mt-4">
                Here we’ll load the selected job’s data into a form for editing.
            </p>
        </div>
    );
}
