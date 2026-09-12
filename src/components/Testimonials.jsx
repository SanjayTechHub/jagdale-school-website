import SectionHeader from './SectionHeader'

const testimonials = [
  { name: 'Sample Parent', text: 'Replace with actual parent review. Jagdale School provides a nurturing environment for overall development.', role: 'Parent' },
  { name: 'Sample Parent 2', text: 'Replace with actual parent review. The teachers are dedicated and the facilities are excellent.', role: 'Parent' },
  { name: 'Sample Parent 3', text: 'Replace with actual parent review. My child loves coming to school every day. Thank you, Jagdale School!', role: 'Parent' },
]

export default function Testimonials() {
  return (
    <section className="section section-alt">
      <div className="container-main">
        <SectionHeader
          title="What Parents Say"
          subtitle="Real experiences from our school community. (Sample testimonials – replace with actual reviews)"
        />
        <div className="grid gap-5 md:grid-cols-3 md:gap-6">
          {testimonials.map((t, idx) => (
            <article key={t.name} className={`card card-hover reveal reveal-delay-${idx + 1}`}>
              <p className="text-2xl text-accent" aria-hidden="true">“</p>
              <p className="mt-2 text-body text-ink-muted">{t.text}</p>
              <div className="mt-4 font-semibold text-primary">{t.name}</div>
              <div className="text-sm text-ink-light">{t.role}</div>
            </article>
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-ink-light">
          * Sample testimonials – replace with actual parent reviews in data array.
        </p>
      </div>
    </section>
  )
}
