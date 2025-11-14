// Single source of truth for job categories: labels, images, and helpers.
// Any page (Jobs, JobDetail, CreateJob, etc.) can import from here.
// ----------------------------------------------------------------------------

// 1) import the images once, reuse everywhere
import dataEngineerImg from "@/assets/job-data-engineer-real.jpg";
import businessAnalystImg from "@/assets/job-business-analyst.jpg";
import dataAnalystImg from "@/assets/job-data-analyst.jpg";
import frontendDevImg from "@/assets/job-frontend-developer.jpg";
import backendDevImg from "@/assets/job-backend-developer.jpg";
import fullstackDevImg from "@/assets/job-fullstack-developer.jpg";
import dataScientistImg from "@/assets/job-data-scientist.jpg";

// 2) define the canonical category keys (TypeScript union)
//    - prevents typos and gives autocomplete across the app
export type CategoryKey =
    | "data_engineer"
    | "business_analyst"
    | "data_analyst"
    | "frontend_developer"
    | "backend_developer"
    | "fullstack_developer"
    | "data_scientist";

// 3) human-readable labels for each category
export const categoryLabels: Record<CategoryKey, string> = {
    data_engineer: "Data Engineer",
    business_analyst: "Business System Analyst",
    data_analyst: "Data Analyst",
    frontend_developer: "Front-End Developer",
    backend_developer: "Back-End Developer",
    fullstack_developer: "Full-Stack Developer",
    data_scientist: "Data Scientist",
};

// 4) image mapping for each category
export const categoryImages: Record<CategoryKey, string> = {
    data_engineer: dataEngineerImg,
    business_analyst: businessAnalystImg,
    data_analyst: dataAnalystImg,
    frontend_developer: frontendDevImg,
    backend_developer: backendDevImg,
    fullstack_developer: fullstackDevImg,
    data_scientist: dataScientistImg,
};

// 5) helpers (nice ergonomics + safe fallbacks)
export const getCategoryLabel = (key: string): string =>
    (categoryLabels as Record<string, string>)[key] ?? key;

export const getCategoryImage = (key: string): string =>
    (categoryImages as Record<string, string>)[key] ?? dataEngineerImg;

// 6) export a list for dropdowns (label/value pairs)
export const categoryOptions = ([
    "data_engineer",
    "business_analyst",
    "data_analyst",
    "frontend_developer",
    "backend_developer",
    "fullstack_developer",
    "data_scientist",
] as CategoryKey[]).map((key) => ({ value: key, label: categoryLabels[key] }));
