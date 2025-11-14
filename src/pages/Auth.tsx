// src/pages/Auth.tsx
import { PageHeader } from "@/components/PageHeader";

export default function Auth() {
    return (
        <div className="p-8">
            <PageHeader
                title="Authentication Page"
                description="This is a temporary placeholder for the Auth page."
            />
            <p className="text-muted-foreground mt-4">
                We'll replace this with the real login and signup forms from the Lovable version soon.
            </p>
        </div>
    );
}
