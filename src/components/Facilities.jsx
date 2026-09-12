import SectionHeader from './SectionHeader'
import { facilities } from '../data/facilitiesData'

export default function Facilities() {
  return (
    <section id="facilities" className="section section-alt">
      <div className="container-main">
        <SectionHeader
          label="Campus"
          title="Our Facilities"
          subtitle="Infrastructure to support every aspect of student development."
        />
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-5">
          {facilities.map((fac, idx) => (
            <article
              key={fac.title}
              className={`card card-hover reveal reveal-delay-${(idx % 6) + 1} text-center`}
            >
              <div className="mb-3 text-3xl" aria-hidden="true">{fac.icon}</div>
              <h3 className="text-lg font-semibold text-primary">{fac.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">{fac.desc}</p>
            </article>
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-ink-light">
          * Some facilities are placeholders and can be updated.
        </p>
      </div>
    </section>
  )
}
