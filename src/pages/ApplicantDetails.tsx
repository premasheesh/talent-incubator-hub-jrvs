// src/pages/ApplicantDetails.tsx
import { PageHeader } from "@/components/PageHeader";
import { useParams } from "react-router-dom";

export default function ApplicantDetails() {
    const { email } = useParams();

    return (
        <div className="p-8">
            <PageHeader
                title="Applicant Details"
                description={`Detailed profile for applicant: ${email}`}
            />
            <p className="text-muted-foreground mt-4">
                This page will show applicant-specific details, including resume, status, and communication logs.
            </p>
        </div>
    );
}
