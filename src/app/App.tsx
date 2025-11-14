import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AuthProvider } from "@/lib/auth-context";
import { Navigation } from "@/components/Navigation";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { lazy, Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AdminSidebar } from "@/components/AdminSidebar";
import { Footer } from "@/components/Footer";
import { useUserRole } from "@/hooks/use-user-role";

// Eagerly load public pages
import Home from "../pages/Home";
import Auth from "../pages/Auth";
import Jobs from "../pages/Jobs";
import JobDetail from "../pages/JobDetail";
import Apply from "../pages/Apply";
import MyApplications from "../pages/MyApplications";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";


// Lazy load admin pages for better performance
const AdminDashboard = lazy(() => import("../pages/AdminDashboard"));
const CreateJob = lazy(() => import("../pages/CreateJob"));
const EditJob = lazy(() => import("../pages/EditJob"));
const EmailManagement = lazy(() => import("../pages/EmailManagement"));
const ApplicantRepository = lazy(() => import("../pages/ApplicantRepository"));
const ApplicantDetails = lazy(() => import("../pages/ApplicantDetails"));
const ApplicationResults = lazy(() => import("../pages/ApplicationResults"));
const UserSettings = lazy(() => import("../pages/UserSettings"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 30 * 1000, // 30 seconds default
      retry: 1,
    },
  },
});

const LoadingFallback = () => (
  <div className="container mx-auto px-4 py-12 animate-fade-in">
    <Skeleton className="h-12 w-48 mb-6" />
    <div className="space-y-4">
      <Skeleton className="h-32 w-full" />
      <Skeleton className="h-48 w-full" />
      <Skeleton className="h-64 w-full" />
    </div>
  </div>
);

function AppContent() {
  const location = useLocation();
  const { isRecruiterOrAdmin, loading: roleLoading } = useUserRole();
  
  const isAdminRoute = location.pathname.startsWith('/admin');
  const showSidebar = !roleLoading && isRecruiterOrAdmin && isAdminRoute;

  return (
    <div className="min-h-screen flex flex-col w-full">
      <Navigation />
      <SidebarProvider>
        <div className="flex flex-1 w-full">
          {showSidebar && <AdminSidebar />}
          <main className="flex-1 w-full">
            <ErrorBoundary>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/auth" element={<Auth />} />
                <Route path="/jobs" element={<Jobs />} />
                <Route path="/jobs/:id" element={<JobDetail />} />
                <Route path="/apply/:id" element={<Apply />} />
                <Route path="/my-applications" element={<MyApplications />} />
                <Route path="/contact" element={<Contact />} />
                
                {/* Lazy loaded admin routes with suspense boundaries */}
                <Route path="/admin" element={
                  <Suspense fallback={<LoadingFallback />}>
                    <AdminDashboard />
                  </Suspense>
                } />
                <Route path="/admin/create-job" element={
                  <Suspense fallback={<LoadingFallback />}>
                    <CreateJob />
                  </Suspense>
                } />
                <Route path="/admin/edit-job/:id" element={
                  <Suspense fallback={<LoadingFallback />}>
                    <EditJob />
                  </Suspense>
                } />
                <Route path="/admin/email-management" element={
                  <Suspense fallback={<LoadingFallback />}>
                    <EmailManagement />
                  </Suspense>
                } />
                <Route path="/admin/applicants" element={
                  <Suspense fallback={<LoadingFallback />}>
                    <ApplicantRepository />
                  </Suspense>
                } />
                <Route path="/admin/applicant/:email" element={
                  <Suspense fallback={<LoadingFallback />}>
                    <ApplicantDetails />
                  </Suspense>
                } />
                <Route path="/admin/application-results" element={
                  <Suspense fallback={<LoadingFallback />}>
                    <ApplicationResults />
                  </Suspense>
                } />
                <Route path="/settings" element={
                  <Suspense fallback={<LoadingFallback />}>
                    <UserSettings />
                  </Suspense>
                } />
                
                <Route path="*" element={<NotFound />} />
              </Routes>
            </ErrorBoundary>
          </main>
        </div>
      </SidebarProvider>
      <Footer />
    </div>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
