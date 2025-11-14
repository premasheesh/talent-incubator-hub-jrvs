// src/pages/Contact.tsx
import { PageHeader } from "@/components/PageHeader";

export default function Contact() {
    return (
        <div className="p-8">
            <PageHeader
                title="Contact Us"
                description="This is a temporary placeholder for the Contact page."
            />
            <p className="text-muted-foreground mt-4">
                The real contact form and company details from the Lovable version will
                be added here later.
            </p>
        </div>
    );
}
