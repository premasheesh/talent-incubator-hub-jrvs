// src/pages/UserSettings.tsx
import { PageHeader } from "@/components/PageHeader";

export default function UserSettings() {
    return (
        <div className="p-8">
            <PageHeader
                title="User Settings"
                description="Manage your personal information, preferences, and account security."
            />
            <p className="text-muted-foreground mt-4">
                This section will allow users to update profile details, change passwords, and configure notifications.
            </p>
        </div>
    );
}
