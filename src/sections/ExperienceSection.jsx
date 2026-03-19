import { Briefcase } from "lucide-react";
import SectionHeader from "../components/SectionHeader";

export default function ExperienceSection({ data }) {
  return (
    <section
      id="experience"
      className="min-h-screen flex items-center
                 bg-light-bg dark:bg-dark-bg
                 px-6 sm:px-10 lg:px-14 py-20"
    >
      <div className="w-full max-w-5xl mx-auto">
        <SectionHeader title="Work Experience" />

        <div className="relative pl-10 sm:pl-14">
          {/* Vertical timeline line */}
          <div
            className="absolute left-3 sm:left-5 top-2 bottom-0 w-0.5
                          bg-gradient-to-b from-accent via-accent/30 to-transparent"
          />

          {data.experience.map((exp, i) => (
            <div key={i} className="relative mb-8 last:mb-0">
              {/* Dot */}
              <div
                className="absolute -left-7 sm:-left-9 top-5
                              w-9 h-9 rounded-full flex items-center justify-center
                              bg-accent/10 border-2 border-accent text-accent"
              >
                <Briefcase size={16} strokeWidth={1.8} />
              </div>

              {/* Card */}
              <div
                className="bg-light-card dark:bg-dark-card
                              border border-light-border dark:border-dark-border
                              rounded-2xl p-5 sm:p-6
                              hover:border-accent hover:-translate-y-1
                              hover:shadow-lg hover:shadow-black/20
                              transition-all duration-300"
              >
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                  <div>
                    <h3
                      className="font-display font-bold text-lg sm:text-xl mb-1
                                   text-light-text dark:text-dark-text"
                    >
                      {exp.company}
                    </h3>
                    <p className="font-ui font-semibold text-sm text-accent">
                      {exp.role}
                    </p>
                  </div>
                  <span
                    className="font-mono text-[11px] bg-accent/10 text-accent
                                   px-3 py-1 rounded-full whitespace-nowrap flex-shrink-0 self-start"
                  >
                    {exp.period}
                  </span>
                </div>
                <ul className="space-y-2.5">
                  {exp.points.map((pt, j) => (
                    <li key={j} className="flex gap-3 items-start">
                      <span className="text-accent text-xs mt-1.5 flex-shrink-0">
                        ▹
                      </span>
                      <span
                        className="font-body text-sm leading-relaxed
                                       text-light-subtle dark:text-dark-subtle"
                      >
                        {pt}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
