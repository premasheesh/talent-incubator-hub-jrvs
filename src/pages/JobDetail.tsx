// src/pages/JobDetail.tsx
import { PageHeader } from "@/components/PageHeader";

export default function JobDetail() {
    return (
        <div className="p-8">
            <PageHeader
                title="Job Detail"
                description="This is a placeholder for the Job Detail page."
            />
            <p className="text-muted-foreground mt-4">
                The actual job details (description, requirements, and apply button)
                will be migrated from the Lovable version soon.
            </p>
        </div>
    );
}
