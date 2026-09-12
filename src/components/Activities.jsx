import SectionHeader from './SectionHeader'
import { activities } from '../data/activitiesData'

export default function Activities() {
  return (
    <section id="activities" className="section bg-white">
      <div className="container-main">
        <SectionHeader
          label="Campus life"
          title="Life at Jagdale School"
          subtitle="A vibrant campus filled with activities that nurture talent and teamwork."
        />
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 sm:gap-5">
          {activities.map((act, idx) => (
            <article
              key={act.title}
              className={`card card-hover reveal reveal-delay-${(idx % 6) + 1} flex items-start gap-4`}
            >
              <span className="text-3xl" aria-hidden="true">{act.icon}</span>
              <div>
                <h3 className="font-semibold text-primary">{act.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-ink-muted">{act.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
