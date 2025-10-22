
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import GraphicsPage from "./pages/GraphicsPage";
import ITPage from "./pages/ITPage";
import VideoEditingPage from "./pages/VideoEditingPage";
import SocialCommitmentPage from "./pages/SocialCommitmentPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";
import WorkWithUsPage from "./pages/WorkWithUsPage";
import AboutPage from "./pages/AboutPage";

const ScrollToTop = () => {
  const { pathname, state } = useLocation();
  
  useEffect(() => {
    // Sempre scroll to top quando cambi pagina, a meno che non sia specificato diversamente
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
};

const queryClient = new QueryClient();

const AppRoutes = () => (
  <>
    <ScrollToTop />
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/graphics" element={<GraphicsPage />} />
      <Route path="/it" element={<ITPage />} />
      <Route path="/video-editing" element={<VideoEditingPage />} />
      <Route path="/social-commitment" element={<SocialCommitmentPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/work-with-us" element={<WorkWithUsPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
  </>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <ThemeProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </ThemeProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
