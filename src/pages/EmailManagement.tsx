// src/pages/EmailManagement.tsx
import { PageHeader } from "@/components/PageHeader";

export default function EmailManagement() {
    return (
        <div className="p-8">
            <PageHeader
                title="Email Management"
                description="Manage system notifications, applicant emails, and templates."
            />
            <p className="text-muted-foreground mt-4">
                This page will later connect to email automation and template customization tools.
            </p>
        </div>
    );
}
