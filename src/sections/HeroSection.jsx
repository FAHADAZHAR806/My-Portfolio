import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useTyper } from "../hooks/useTyper";
import { SECTIONS } from "../data";

export default function HeroSection({ data }) {
  const navigate = useNavigate();
  const typed = useTyper(data.roles);

  const goTo = (path) => {
    navigate(path);
    const section = SECTIONS.find((s) => s.path === path);
    if (section) {
      setTimeout(() => {
        document
          .getElementById(section.id)
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 50);
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center
                 bg-light-bg dark:bg-dark-bg
                 px-6 sm:px-10 lg:px-14 py-20 md:py-0"
    >
      <div className="w-full max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <p className="animate-fade-up font-mono text-[11px] tracking-[3px] uppercase text-accent mb-4">
              Hello, I'm
            </p>
            <h1
              className="animate-fade-up [animation-delay:100ms]
                           font-display font-extrabold leading-[1.05]
                           text-4xl sm:text-5xl lg:text-6xl
                           text-light-text dark:text-dark-text mb-4"
            >
              {data.name}
            </h1>
            <div
              className="animate-fade-up [animation-delay:200ms]
                            flex flex-wrap items-center gap-2
                            justify-center lg:justify-start mb-5
                            text-lg sm:text-xl font-body
                            text-light-muted dark:text-dark-muted"
            >
              <span>I'm a</span>
              <span className="text-accent font-semibold min-w-[200px] text-left">
                {typed}
                <span className="animate-blink text-accent ml-0.5">|</span>
              </span>
            </div>
            <p
              className="animate-fade-up [animation-delay:280ms]
                          font-body text-base leading-relaxed max-w-md
                          mx-auto lg:mx-0 mb-8
                          text-light-subtle dark:text-dark-subtle"
            >
              {data.tagline}
            </p>
            <div
              className="animate-fade-up [animation-delay:360ms]
                            flex flex-wrap gap-3 justify-center lg:justify-start"
            >
              <button
                onClick={() => goTo("/contact")}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg
                           bg-accent text-dark-bg font-ui font-semibold text-sm
                           hover:brightness-110 hover:-translate-y-0.5
                           shadow-md hover:shadow-accent/30 transition-all duration-200"
              >
                Get In Touch <ArrowRight size={15} strokeWidth={2.5} />
              </button>
              <button
                onClick={() => goTo("/projects")}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg
                           border border-accent text-accent font-ui font-semibold text-sm
                           hover:bg-accent/10 hover:-translate-y-0.5 transition-all duration-200"
              >
                View Projects
              </button>
            </div>
          </div>

          {/* Photo */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="animate-float relative w-52 h-52 sm:w-64 sm:h-64 lg:w-72 lg:h-72">
              <div
                className="animate-spin-ring absolute inset-[-8px] rounded-full"
                style={{
                  background:
                    "conic-gradient(#c9a96e 0deg,transparent 100deg,#e0bf85 200deg,transparent 300deg,#c9a96e 360deg)",
                }}
              />
              <div
                className="absolute inset-[3px] rounded-full overflow-hidden
                              border-4 border-dark-bg dark:border-dark-bg"
              >
                <img
                  src={data.profileImage}
                  alt={data.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <span
                className="absolute -top-3 -right-3 bg-light-card dark:bg-dark-card
                               border border-light-border dark:border-dark-border
                               rounded-lg px-3 py-1.5 font-mono text-[11px] font-semibold
                               text-accent whitespace-nowrap shadow-md"
              >
                {data.about.stats[0].value} Years
              </span>
              <span
                className="absolute -bottom-2 -left-3 bg-light-card dark:bg-dark-card
                               border border-light-border dark:border-dark-border
                               rounded-lg px-3 py-1.5 font-mono text-[11px] font-semibold
                               text-accent whitespace-nowrap shadow-md"
              >
                {data.about.stats[1].value} Projects
              </span>
            </div>
          </div>
        </div>
      </div>{" "}
    </section>
  );
}
