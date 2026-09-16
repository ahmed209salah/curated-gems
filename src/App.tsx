import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AuthPage from "./pages/AuthPage";
import ToolPage from "./pages/ToolPage";
import ToolsIndex from "./pages/ToolsIndex";
import ToolsCategory from "./pages/ToolsCategory";
import CategoryPage from "./pages/CategoryPage";
import PrivacyPolicy from "./pages/legal/PrivacyPolicy";
import TermsPage from "./pages/legal/TermsPage";
import CookiePolicy from "./pages/legal/CookiePolicy";
import RefundPolicy from "./pages/legal/RefundPolicy";
import NotFound from "./pages/NotFound";
import { CookieNotice } from "./components/CookieNotice";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/tool" element={<ToolsIndex />} />
          <Route path="/tools" element={<ToolsIndex />} />
          <Route path="/tools/:category" element={<ToolsCategory />} />
          <Route path="/category/:id" element={<CategoryPage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/tool/:id" element={<ToolPage />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/cookies" element={<CookiePolicy />} />
          <Route path="/refunds" element={<RefundPolicy />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <CookieNotice />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
