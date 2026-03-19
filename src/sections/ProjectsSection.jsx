import { ExternalLink } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'

export default function ProjectsSection({ data }) {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center
                 bg-light-surface dark:bg-dark-surface
                 px-6 sm:px-10 lg:px-14 py-20"
    >
      <div className="w-full max-w-5xl mx-auto">
        <SectionHeader  title="Featured Projects" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {data.projects.map((p, i) => (
            <div
              key={i}
              className="bg-light-card dark:bg-dark-card
                         border border-light-border dark:border-dark-border
                         rounded-2xl p-5 sm:p-6 flex flex-col
                         hover:border-accent hover:-translate-y-1
                         hover:shadow-lg hover:shadow-black/20
                         transition-all duration-300"
            >
              {/* Top row */}
              <div className="flex items-start justify-between mb-3">
                <div className="w-11 h-11 rounded-xl bg-accent/10
                                flex items-center justify-center text-xl flex-shrink-0">
                  {p.emoji}
                </div>
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-lg flex items-center justify-center
                             border border-light-border dark:border-dark-border
                             text-light-subtle dark:text-dark-subtle
                             hover:text-accent hover:border-accent transition-all"
                >
                  <ExternalLink size={14} strokeWidth={2} />
                </a>
              </div>

              <h3 className="font-display font-bold text-base sm:text-lg mb-1
                             text-light-text dark:text-dark-text">
                {p.name}
              </h3>
              <p className="font-mono text-[10.5px] text-accent mb-4 leading-relaxed">
                {p.tech}
              </p>

              <ul className="space-y-1.5 flex-1">
                {p.points.map((pt, j) => (
                  <li key={j} className="flex gap-2 items-start">
                    <span className="text-accent text-[10px] mt-1.5 flex-shrink-0">▹</span>
                    <span className="font-body text-xs sm:text-sm leading-relaxed
                                     text-light-subtle dark:text-dark-subtle">
                      {pt}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-4 pt-3 border-t border-light-border dark:border-dark-border">
                <span className="font-mono text-[10px] text-light-subtle dark:text-dark-subtle opacity-60">
                  {p.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
