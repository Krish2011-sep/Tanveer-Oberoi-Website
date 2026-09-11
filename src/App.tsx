import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

// Layout Components
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingQuickBar } from './components/FloatingQuickBar';

// Page Components
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { BeforeAfterPage } from './pages/BeforeAfterPage';
import { AboutPage } from './pages/AboutPage';
import { VideosPage } from './pages/VideosPage';
import { ReviewsPage } from './pages/ReviewsPage';
import { WorkshopContactPage } from './pages/WorkshopContactPage';
import { QuotePage } from './pages/QuotePage';
import { FaqPage } from './pages/FaqPage';

// Scroll to top helper
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
  }, [pathname]);

  return null;
};

export function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#07090D] text-slate-100 flex flex-col font-sans selection:bg-amber-500 selection:text-black">
        <ScrollToTop />
        <Navbar />
        
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/:serviceId" element={<ServiceDetailPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/before-after" element={<BeforeAfterPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/videos" element={<VideosPage />} />
            <Route path="/reviews" element={<ReviewsPage />} />
            <Route path="/contact" element={<WorkshopContactPage />} />
            <Route path="/workshop" element={<WorkshopContactPage />} />
            <Route path="/calculator" element={<QuotePage />} />
            <Route path="/quote" element={<QuotePage />} />
            <Route path="/faq" element={<FaqPage />} />
            {/* Fallback */}
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>

        <Footer />
        <FloatingQuickBar />
      </div>
    </BrowserRouter>
  );
}

export default App;
