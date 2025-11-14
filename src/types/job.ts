// src/types/job.ts
export interface JobPosting {
    id: string;
    title: string;
    category: string; // if you want stricter typing: category: CategoryKey
    description: string;
    requirements: string[];
    created_at: string;
}
