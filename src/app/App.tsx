import { PageHeader } from "@/components/PageHeader";

function App() {
    return (
        <div className="p-8">
            <PageHeader
                title="Dashboard"
                description="Welcome to the new system!"
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Dashboard" },
                ]}
            />
        </div>
    );
}

export default App;
