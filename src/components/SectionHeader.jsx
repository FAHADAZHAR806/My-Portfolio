export default function SectionHeader({ eyebrow, title }) {
  return (
    <div className="mb-10">
      <p className="font-mono text-[11px] tracking-[3px] uppercase text-accent mb-2">
        {eyebrow}
      </p>
      <h2
        className="font-display font-bold text-3xl md:text-4xl leading-tight
                     text-light-text dark:text-dark-text"
      >
        {title}
      </h2>
      <div className="mt-3 h-0.5 w-12 rounded-full bg-accent" />
    </div>
  );
}
