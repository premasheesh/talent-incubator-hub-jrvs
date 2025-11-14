// src/hooks/use-job-postings.ts
// -----------------------------------------------------------------------------
// Custom hook to fetch job postings. This simulates a backend API call.
// Replace this later with real API integration (e.g., Supabase, Firebase, etc.)
// -----------------------------------------------------------------------------

import { useEffect, useState } from "react";

interface JobPosting {
    id: string;
    title: string;
    category: string;
    description: string;
    requirements: string[];
    created_at: string;
}

// Simulated data (you can connect this to your backend later)
const MOCK_JOBS: JobPosting[] = [
    {
        id: "1",
        title: "Data Engineer",
        category: "data_engineer",
        description:
            "Work on scalable data pipelines and ETL solutions using Databricks and Spark.",
        requirements: ["Python", "Databricks", "SQL"],
        created_at: "2025-10-01",
    },
    {
        id: "2",
        title: "Frontend Developer",
        category: "frontend_developer",
        description:
            "Develop interactive dashboards using React, Tailwind, and modern frameworks.",
        requirements: ["React", "TypeScript", "Tailwind CSS"],
        created_at: "2025-09-20",
    },
    {
        id: "3",
        title: "Data Analyst",
        category: "data_analyst",
        description:
            "Analyze data trends, build visualizations, and generate business insights.",
        requirements: ["SQL", "Python", "Power BI"],
        created_at: "2025-09-10",
    },
];

interface UseJobPostingsOptions {
    includeArchived?: boolean;
    includeDrafts?: boolean;
}

// ✅ Named export used in Jobs.tsx
export function useJobPostings(options: UseJobPostingsOptions = {}) {
    const [data, setData] = useState<JobPosting[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate network delay
        const timer = setTimeout(() => {
            setData(MOCK_JOBS);
            setIsLoading(false);
        }, 800);

        return () => clearTimeout(timer);
    }, []);

    return { data, isLoading };
}
