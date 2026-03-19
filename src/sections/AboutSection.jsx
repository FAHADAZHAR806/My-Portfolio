import SectionHeader from "../components/SectionHeader";

export default function AboutSection({ data }) {
  const { about } = data;
  return (
    <section
      id="about"
      className="min-h-screen flex items-center
                 bg-light-surface dark:bg-dark-surface
                 px-6 sm:px-10 lg:px-14 py-20"
    >
      <div className="w-full max-w-5xl mx-auto">
        <SectionHeader title="About Me" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
          {/* Bio */}
          <div>
            <p
              className="font-body text-base leading-relaxed mb-6
                          text-light-muted dark:text-dark-muted"
            >
              {about.bio}
            </p>
            <ul className="space-y-3 mb-8">
              {about.highlights.map((h, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className="text-accent text-xs mt-1.5 flex-shrink-0">
                    ▹
                  </span>
                  <span
                    className="font-body text-sm leading-relaxed
                                   text-light-subtle dark:text-dark-subtle"
                  >
                    {h}
                  </span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3">
              {about.stats.map(({ value, label }) => (
                <div
                  key={label}
                  className="bg-light-card dark:bg-dark-card
                                border border-light-border dark:border-dark-border
                                rounded-xl px-5 py-4 text-center min-w-[80px]"
                >
                  <p className="font-display font-bold text-2xl text-accent">
                    {value}
                  </p>
                  <p className="font-ui text-[11px] mt-1 text-light-subtle dark:text-dark-subtle">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Info card */}
          <div
            className="bg-light-card dark:bg-dark-card
                          border border-light-border dark:border-dark-border
                          rounded-2xl p-6 h-fit"
          >
            <p className="font-display font-semibold text-sm text-accent mb-5 tracking-wide">
              {about.title}
            </p>
            {[
              ["🎓", "Education", about.details.education],
              ["📚", "Major", about.details.major],
              ["📍", "City", about.details.city],
              ["📧", "Email", about.details.email],
            ].map(([emoji, key, val]) => (
              <div
                key={key}
                className="flex items-center gap-3 py-3
                              border-b border-light-border dark:border-dark-border last:border-0"
              >
                <span className="text-base w-5 flex-shrink-0">{emoji}</span>
                <span
                  className="font-ui text-xs w-20 flex-shrink-0
                                 text-light-subtle dark:text-dark-subtle"
                >
                  {key}
                </span>
                <span
                  className="font-body text-sm
                                 text-light-muted dark:text-dark-muted"
                >
                  {val}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
