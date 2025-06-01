
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import PreIncubadoras from "./pages/PreIncubadoras";
import NITs from "./pages/NITs";
import ParqueLabs from "./pages/ParqueLabs";
import CentroInovacao from "./pages/CentroInovacao";
import ParqueTecnologico from "./pages/ParqueTecnologico";
import VentureBuilder from "./pages/VentureBuilder";
import Embrapii from "./pages/Embrapii";
import Empresas from "./pages/Empresas";
import Academia from "./pages/Academia";
import SociedadeOrganizada from "./pages/SociedadeOrganizada";
import Governo from "./pages/Governo";
import MecanismosInovacao from "./pages/MecanismosInovacao";
import Inovacao from "./pages/Inovacao";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/pre-incubadoras" element={<PreIncubadoras />} />
          <Route path="/nits" element={<NITs />} />
          <Route path="/parque-labs" element={<ParqueLabs />} />
          <Route path="/centro-inovacao" element={<CentroInovacao />} />
          <Route path="/parque-tecnologico" element={<ParqueTecnologico />} />
          <Route path="/venture-builder" element={<VentureBuilder />} />
          <Route path="/embrapii" element={<Embrapii />} />
          <Route path="/empresas" element={<Empresas />} />
          <Route path="/academia" element={<Academia />} />
          <Route path="/sociedade-organizada" element={<SociedadeOrganizada />} />
          <Route path="/governo" element={<Governo />} />
          <Route path="/mecanismos-inovacao" element={<MecanismosInovacao />} />
          <Route path="/inovacao" element={<Inovacao />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
