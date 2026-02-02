import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ExternalContainerPage from "./pages/ExternalContainerPage";
import ProjectDetailsPage from "./pages/ProjectDetailsPage";
import ProjectDetailsPage1 from "./pages/ProjectDetailsPage1";
import ProjectDetailsPage2 from "./pages/ProjectDetailsPage2";
import ProjectDetailsPage3 from "./pages/ProjectDetailsPage3";
import ProjectDetailsPage4 from "./pages/ProjectDetailsPage4";
import ProjectDetailsPage5 from "./pages/ProjectDetailsPage5";
import ProjectDetailsPage6 from "./pages/ProjectDetailsPage6";
import ProjectDetailsPage7 from "./pages/ProjectDetailsPage7";
import ProjectDetailsPage8 from "./pages/ProjectDetailsPage8";
import ProjectDetailsPage9 from "./pages/ProjectDetailsPage9";
import ProjectDetailsPage10 from "./pages/ProjectDetailsPage10";
import ProjectDetailsPage11 from "./pages/ProjectDetailsPage11";
import ProjectDetailsPage12 from "./pages/ProjectDetailsPage12";
import ProjectDetailsPage13 from "./pages/ProjectDetailsPage13";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/external-container" element={<ExternalContainerPage />} />
          <Route path="/project-details" element={<ProjectDetailsPage />} />
          <Route path="/project-details-iot" element={<ProjectDetailsPage1 />} />
          <Route path="/project-details-biometric" element={<ProjectDetailsPage2 />} />
          <Route path="/project-details-water" element={<ProjectDetailsPage3 />} />
          <Route path="/project-details-water-level" element={<ProjectDetailsPage4 />} />
          <Route path="/project-details-bus" element={<ProjectDetailsPage5 />} />
          <Route path="/project-details-outpass" element={<ProjectDetailsPage6 />} />
          <Route path="/project-details-travels" element={<ProjectDetailsPage7 />} />
          <Route path="/project-details-construction" element={<ProjectDetailsPage8 />} />
          <Route path="/project-details-erp" element={<ProjectDetailsPage9 />} />
          <Route path="/project-details-mail" element={<ProjectDetailsPage10 />} />
          <Route path="/project-details-billing" element={<ProjectDetailsPage11 />} />
          <Route path="/project-details-vivaha-milan" element={<ProjectDetailsPage12 />} />
          <Route path="/project-details-hostel" element={<ProjectDetailsPage13 />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
