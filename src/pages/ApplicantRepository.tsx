// src/pages/ApplicantRepository.tsx
import { PageHeader } from "@/components/PageHeader";

export default function ApplicantRepository() {
    return (
        <div className="p-8">
            <PageHeader
                title="Applicant Repository"
                description="Browse and manage all applicants in the system."
            />
            <p className="text-muted-foreground mt-4">
                This page will display a searchable table of applicants with filters, pagination, and profile links.
            </p>
        </div>
    );
}
