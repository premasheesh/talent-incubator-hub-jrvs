// src/pages/Jobs.tsx
// -----------------------------------------------------------------------------
// Jobs Page: Displays all available job postings in the Talent Incubation Program
// Features: search, filter by category, dynamic job cards, and loading states.
// -----------------------------------------------------------------------------
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

// ✅ Custom hook to fetch job postings (from mock or API)
import { useJobPostings } from "@/hooks/use-job-postings";

// ✅ UI Components (from your /components/ui directory)
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";

// ✅ Icons
import { Briefcase, Calendar, ArrowRight, Search } from "lucide-react";

// ✅ Contexts & other utilities
import { useAuth } from "@/lib/auth-context";
import { EmptyState } from "@/components/EmptyState";

// ✅ Job images (replace with your real images later)
import dataEngineerImg from "@/assets/job-data-engineer-real.jpg";
import businessAnalystImg from "@/assets/job-business-analyst.jpg";
import dataAnalystImg from "@/assets/job-data-analyst.jpg";
import frontendDevImg from "@/assets/job-frontend-developer.jpg";
import backendDevImg from "@/assets/job-backend-developer.jpg";
import fullstackDevImg from "@/assets/job-fullstack-developer.jpg";
import dataScientistImg from "@/assets/job-data-scientist.jpg";

// ✅ Type for each job posting
interface JobPosting {
    id: string;
    title: string;
    category: string;
    description: string;
    requirements: string[];
    created_at: string;
}

// ✅ Label mapping for job categories
const categoryLabels: Record<string, string> = {
    data_engineer: "Data Engineer",
    business_analyst: "Business System Analyst",
    data_analyst: "Data Analyst",
    frontend_developer: "Front-End Developer",
    backend_developer: "Back-End Developer",
    fullstack_developer: "Full-Stack Developer",
    data_scientist: "Data Scientist",
};

// ✅ Image mapping for job categories
const categoryImages: Record<string, string> = {
    data_engineer: dataEngineerImg,
    business_analyst: businessAnalystImg,
    data_analyst: dataAnalystImg,
    frontend_developer: frontendDevImg,
    backend_developer: backendDevImg,
    fullstack_developer: fullstackDevImg,
    data_scientist: dataScientistImg,
};

export default function Jobs() {
    // 🔹 Local state for search and filters
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState<string>("all");

    // 🔹 Auth context (to show "My Applications" for logged-in users)
    const { user } = useAuth();

    // 🔹 Navigation hook (for redirects)
    const navigate = useNavigate();

    // 🔹 Fetch job data using our custom hook
    const { data: jobs = [], isLoading: loading } = useJobPostings({
        includeArchived: false,
        includeDrafts: false,
    });

    // ---------------------------------------------------------------------------
    // LOADING STATE: Skeleton shimmer while fetching jobs
    // ---------------------------------------------------------------------------
    if (loading) {
        return (
            <div className="min-h-screen bg-gradient-to-b from-background via-muted/20 to-background py-12">
                <div className="container mx-auto px-4">
                    <div className="mb-12 text-center">
                        <Skeleton className="h-12 w-64 mx-auto mb-4" />
                        <Skeleton className="h-6 w-96 mx-auto" />
                    </div>

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {Array.from({ length: 6 }).map((_, i) => (
                            <Card key={i} className="overflow-hidden animate-pulse">
                                <Skeleton className="aspect-video w-full" />
                                <CardHeader className="space-y-3">
                                    <div className="flex items-center justify-between">
                                        <Skeleton className="h-6 w-32" />
                                        <Skeleton className="h-4 w-20" />
                                    </div>
                                    <Skeleton className="h-7 w-3/4" />
                                    <Skeleton className="h-4 w-full" />
                                    <Skeleton className="h-4 w-5/6" />
                                </CardHeader>
                                <CardContent>
                                    <Skeleton className="h-10 w-full" />
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    // ---------------------------------------------------------------------------
    // FILTERING: Apply search query and category filter
    // ---------------------------------------------------------------------------
    const filteredJobs = jobs.filter((job) => {
        const matchesSearch =
            !searchQuery ||
            job.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
            job.description?.toLowerCase().includes(searchQuery.toLowerCase());

        const matchesCategory =
            selectedCategory === "all" || job.category === selectedCategory;

        return matchesSearch && matchesCategory;
    });

    // ---------------------------------------------------------------------------
    // MAIN RENDER: Page layout and job listing
    // ---------------------------------------------------------------------------
    return (
        <div className="min-h-screen bg-gradient-to-b from-background via-muted/20 to-background py-12">
            <div className="container mx-auto px-4">
                {/* 🌟 Header Section */}
                <div className="mb-12 text-center">
                    <h1 className="text-5xl font-bold mb-4 gradient-text">Join Jarvis</h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Explore cutting-edge tech roles in our Talent Incubation Program
                    </p>
                </div>

                {/* 👤 User Section (Only visible if logged in) */}
                {user && (
                    <div className="mb-8 flex justify-end">
                        <Link to="/my-applications">
                            <Button variant="outline" className="shadow-sm">
                                My Applications
                            </Button>
                        </Link>
                    </div>
                )}

                {/* 🔍 Search and Filter Section */}
                <div className="mb-8 flex items-center gap-4 flex-wrap max-w-4xl mx-auto">
                    {/* Search bar */}
                    <div className="flex items-center gap-2 flex-1 min-w-[250px]">
                        <Search className="h-5 w-5 text-muted-foreground" />
                        <Input
                            placeholder="Search jobs by title or description..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>

                    {/* Dropdown for category filter */}
                    <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                        <SelectTrigger className="w-[250px]">
                            <SelectValue placeholder="Filter by category" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">All Categories</SelectItem>
                            {Object.entries(categoryLabels).map(([key, label]) => (
                                <SelectItem key={key} value={key}>
                                    {label}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>

                {/* 📭 Empty State (when no jobs match the filters) */}
                {filteredJobs.length === 0 ? (
                    <EmptyState
                        icon={Briefcase}
                        title={
                            searchQuery || selectedCategory !== "all"
                                ? "No matching jobs found"
                                : "No open positions"
                        }
                        description={
                            searchQuery || selectedCategory !== "all"
                                ? "Try adjusting your search or filters to find more opportunities"
                                : "Check back soon for new opportunities in our Talent Incubation Program"
                        }
                        action={
                            searchQuery || selectedCategory !== "all"
                                ? {
                                    label: "Clear Filters",
                                    onClick: () => {
                                        setSearchQuery("");
                                        setSelectedCategory("all");
                                    },
                                }
                                : undefined
                        }
                    />
                ) : (
                    // 🧱 Job Cards Grid
                    <div
                        className={`grid gap-8 ${
                            filteredJobs.length === 1
                                ? "md:grid-cols-1 max-w-5xl mx-auto"
                                : "md:grid-cols-2 lg:grid-cols-3"
                        }`}
                    >
                        {filteredJobs.map((job, index) => (
                            <Card
                                key={job.id}
                                className="overflow-hidden bg-white/80 backdrop-blur-xl backdrop-saturate-150 hover:bg-white/90 shadow-elegant hover:shadow-glow liquid-morph hover:-translate-y-2 border-primary/20 group animate-fade-in"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                {/* Thumbnail */}
                                <div className="aspect-video w-full overflow-hidden relative">
                                    <img
                                        src={categoryImages[job.category] || categoryImages.data_engineer}
                                        alt={job.title}
                                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>

                                {/* Job Content */}
                                <CardHeader className="relative">
                                    <div className="mb-3 flex items-center justify-between gap-2">
                                        <Badge className="gradient-hero text-white border-0 shadow-md">
                                            {categoryLabels[job.category] || job.category}
                                        </Badge>
                                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                                            {new Date(job.created_at).toLocaleDateString()}
                    </span>
                                    </div>
                                    <CardTitle className="line-clamp-2 text-2xl mb-3 group-hover:text-primary transition-colors">
                                        {job.title}
                                    </CardTitle>
                                    <CardDescription className="line-clamp-3 text-base">
                                        {job.description}
                                    </CardDescription>
                                </CardHeader>

                                <CardContent className="pt-4">
                                    <Link to={`/jobs/${job.id}`}>
                                        <Button variant="glass-primary" className="w-full hover-scale">
                                            View Details
                                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                        </Button>
                                    </Link>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
