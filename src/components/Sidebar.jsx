import { useLocation, useNavigate } from "react-router-dom";
import {
  Home,
  User,
  GraduationCap,
  Code2,
  Briefcase,
  FolderOpen,
  Mail,
  Download,
  Sun,
  Moon,
} from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { SECTIONS } from "../data";

const NAV = [
  { path: "/", label: "Home", Icon: Home },
  { path: "/about", label: "About", Icon: User },
  { path: "/education", label: "Education", Icon: GraduationCap },
  { path: "/skills", label: "Skills", Icon: Code2 },
  { path: "/experience", label: "Experience", Icon: Briefcase },
  { path: "/projects", label: "Projects", Icon: FolderOpen },
  { path: "/contact", label: "Contact", Icon: Mail },
];

export default function Sidebar({ onNavigate, resumePath, resumeFileName }) {
  const location = useNavigate ? useLocation() : { pathname: "/" };
  const navigate = useNavigate();
  const { dark, toggle } = useTheme();

  const handleDownload = () => {
    const a = document.createElement("a");
    a.href = resumePath;
    a.download = resumeFileName;
    a.click();
  };

  const handleNav = (path) => {
    navigate(path);
    // Scroll to the matching section id
    const section = SECTIONS.find((s) => s.path === path);
    if (section) {
      setTimeout(() => {
        const el = document.getElementById(section.id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 50);
    }
  };

  return (
    <aside
      className="sidebar fixed left-0 top-0 h-screen z-50
                      hidden md:flex flex-col
                      bg-light-surface dark:bg-dark-surface"
    >
      {/* Nav links — vertically centred */}
      <nav className="flex-1 flex flex-col justify-center gap-1 py-6">
        {NAV.map(({ path, label, Icon }) => {
          const active = location.pathname === path;
          return (
            <button
              key={path}
              onClick={() => handleNav(path)}
              title={label}
              className={`flex items-center h-12 w-full cursor-pointer border-none
                          transition-all duration-200 group
                          ${
                            active
                              ? "text-accent bg-accent/10 border-l-[3px] border-accent"
                              : "text-light-subtle dark:text-dark-subtle border-l-[3px] border-transparent hover:text-accent hover:bg-accent/8"
                          }`}
            >
              <span className="w-16 min-w-[64px] flex items-center justify-center flex-shrink-0">
                <Icon size={19} strokeWidth={1.8} />
              </span>
              <span className="nav-label text-sm font-ui font-medium">
                {label}
              </span>
            </button>
          );
        })}
      </nav>

      {/* Bottom — theme toggle + resume */}
      <div
        className="flex flex-col gap-1 py-3
                      border-t border-light-border dark:border-dark-border"
      >
        <button
          onClick={toggle}
          title={dark ? "Light mode" : "Dark mode"}
          className="flex items-center h-12 w-full cursor-pointer border-none
                     text-light-subtle dark:text-dark-subtle border-l-[3px] border-transparent
                     hover:text-accent hover:bg-accent/8 transition-all duration-200"
        >
          <span className="w-16 min-w-[64px] flex items-center justify-center flex-shrink-0">
            {dark ? (
              <Sun size={19} strokeWidth={1.8} />
            ) : (
              <Moon size={19} strokeWidth={1.8} />
            )}
          </span>
          <span className="nav-label text-xs font-ui font-semibold text-accent">
            {dark ? "Light Mode" : "Dark Mode"}
          </span>
        </button>

        <button
          onClick={handleDownload}
          title="Download Resume"
          className="flex items-center h-12 w-full cursor-pointer border-none
                     text-light-subtle dark:text-dark-subtle border-l-[3px] border-transparent
                     hover:text-accent hover:bg-accent/8 transition-all duration-200"
        >
          <span className="w-16 min-w-[64px] flex items-center justify-center flex-shrink-0">
            <Download size={19} strokeWidth={1.8} />
          </span>
          <span className="nav-label text-xs font-ui font-semibold text-accent">
            Resume
          </span>
        </button>
      </div>
    </aside>
  );
}
