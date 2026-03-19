import SectionHeader from "../components/SectionHeader";

export default function EducationSection({ data }) {
  return (
    <section
      id="education"
      className="min-h-screen flex items-center
                 bg-light-bg dark:bg-dark-bg
                 px-6 sm:px-10 lg:px-14 py-20"
    >
      <div className="w-full max-w-5xl mx-auto">
        <SectionHeader title="My Education" />

        <div className="flex flex-col gap-5">
          {data.education.map((edu, i) => (
            <div
              key={i}
              className="bg-light-card dark:bg-dark-card
                            border border-light-border dark:border-dark-border
                            rounded-2xl p-6
                            hover:border-accent hover:-translate-y-1
                            hover:shadow-lg hover:shadow-black/20
                            transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row gap-5 items-start">
                <div
                  className="w-14 h-14 rounded-xl bg-accent/10 border border-accent/20
                                flex items-center justify-center text-2xl flex-shrink-0"
                >
                  🎓
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                    <h3
                      className="font-display font-bold text-xl
                                   text-light-text dark:text-dark-text"
                    >
                      {edu.uni}
                    </h3>
                    <span
                      className="font-mono text-[11px] bg-accent/10 text-accent
                                     px-3 py-1 rounded-full whitespace-nowrap flex-shrink-0"
                    >
                      {edu.period}
                    </span>
                  </div>
                  <p
                    className="font-body font-medium text-sm mb-3
                                text-light-muted dark:text-dark-muted"
                  >
                    {edu.degree} —{" "}
                    <span className="text-accent">{edu.major}</span>
                  </p>
                  <p
                    className="font-body text-sm leading-relaxed
                                text-light-subtle dark:text-dark-subtle"
                  >
                    <span
                      className="font-ui font-semibold text-xs
                                     text-light-muted dark:text-dark-muted"
                    >
                      Coursework:{" "}
                    </span>
                    {edu.courses}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
