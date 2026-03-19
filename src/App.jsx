import { useEffect, useRef } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { DATA, SECTIONS } from "./data";

import Sidebar from "./components/Sidebar";
import MobileNav from "./components/MobileNav";
import ScrollTop from "./components/ScrollTop";

import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import EducationSection from "./sections/EducationSection";
import SkillsSection from "./sections/SkillsSection";
import ExperienceSection from "./sections/ExperienceSection";
import ProjectsSection from "./sections/ProjectsSection";
import ContactSection from "./sections/ContactSection";

// ─────────────────────────────────────────────────
// Single-page layout — all sections rendered,
// React Router URL updates as user scrolls.
// Clicking a nav link scrolls to that section AND
// updates the URL via navigate().
// ─────────────────────────────────────────────────
function PortfolioPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const skipRef = useRef(false); // prevent scroll-spy fighting nav clicks

  // ── Scroll-spy: update URL as sections enter viewport ──
  useEffect(() => {
    const observers = [];

    SECTIONS.forEach(({ id, path }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !skipRef.current) {
            navigate(path, { replace: true });
          }
        },
        { threshold: 0.45 },
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [navigate]);

  // ── On first load / direct URL visit → scroll to section ──
  useEffect(() => {
    const section = SECTIONS.find((s) => s.path === location.pathname);
    if (section) {
      const el = document.getElementById(section.id);
      if (el) {
        skipRef.current = true;
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        // Release scroll-spy after animation
        setTimeout(() => {
          skipRef.current = false;
        }, 900);
      }
    }
  }, []); // only on mount

  return (
    <div className="bg-light-bg dark:bg-dark-bg min-h-screen">
      <HeroSection data={DATA} />
      <AboutSection data={DATA} />
      <EducationSection data={DATA} />
      <SkillsSection data={DATA} />
      <ExperienceSection data={DATA} />
      <ProjectsSection data={DATA} />
      <ContactSection data={DATA} />
    </div>
  );
}

// ─────────────────────────────────────────────────
// Root App — wraps with ThemeProvider + layout
// ─────────────────────────────────────────────────
function Layout() {
  return (
    <div className="flex min-h-screen bg-light-bg dark:bg-dark-bg overflow-hidden">
      {/* Sidebar — md and above */}
      <Sidebar
        resumePath={DATA.resumePath}
        resumeFileName={DATA.resumeFileName}
      />

      {/* Mobile top nav */}
      <MobileNav
        resumePath={DATA.resumePath}
        resumeFileName={DATA.resumeFileName}
      />

      {/* Main content — offset from sidebar on md+ */}
      <div className="flex-1 md:ml-16 pt-14 md:pt-0">
        {/*
          All routes render PortfolioPage (single scrollable page).
          The URL changes via scroll-spy, not page reloads.
        */}
        <Routes>
          <Route path="/*" element={<PortfolioPage />} />
        </Routes>
      </div>

      <ScrollTop />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <Layout />
    </ThemeProvider>
  );
}
