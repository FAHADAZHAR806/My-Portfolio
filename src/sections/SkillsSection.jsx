import SectionHeader from "../components/SectionHeader";

export default function SkillsSection({ data }) {
  return (
    <section
      id="skills"
      className="min-h-screen flex items-center
                 bg-light-surface dark:bg-dark-surface
                 px-6 sm:px-10 lg:px-14 py-20"
    >
      <div className="w-full max-w-5xl mx-auto">
        <SectionHeader title="Tech Stack" />

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3 sm:gap-4">
          {data.skills.map(({ name, url }) => (
            <div
              key={name}
              className="bg-light-card dark:bg-dark-card
                            border border-light-border dark:border-dark-border
                            rounded-xl p-3 sm:p-4
                            flex flex-col items-center gap-2
                            hover:border-accent hover:-translate-y-1 hover:scale-[1.03]
                            hover:shadow-md hover:shadow-black/20
                            transition-all duration-200 cursor-default"
            >
              <img
                src={url}
                alt={name}
                className="w-9 h-9 sm:w-10 sm:h-10 object-contain"
              />
              <span
                className="font-ui text-[11px] font-medium text-center leading-tight
                               text-light-subtle dark:text-dark-subtle"
              >
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
