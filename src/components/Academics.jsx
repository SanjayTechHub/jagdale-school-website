import SectionHeader from './SectionHeader'

const stages = [
  { stage: 'Pre-Primary', classes: 'Nursery, LKG, UKG' },
  { stage: 'Primary', classes: 'Classes 1–5' },
  { stage: 'Middle School', classes: 'Classes 6–8' },
  { stage: 'Secondary', classes: 'Classes 9–10' },
  { stage: 'Senior Secondary', classes: 'Classes 11–12' },
]

export default function Academics() {
  return (
    <section id="academics" className="section bg-white">
      <div className="container-main">
        <SectionHeader
          label="Learning"
          title="Academics"
          subtitle="We offer a comprehensive curriculum designed for each stage of a student's journey."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5 sm:gap-5">
          {stages.map((item, idx) => (
            <article
              key={item.stage}
              className={`card card-hover reveal reveal-delay-${(idx % 6) + 1} bg-soft-gray text-center`}
            >
              <h3 className="text-lg font-semibold text-primary">{item.stage}</h3>
              <p className="mt-2 text-sm text-ink-muted">{item.classes}</p>
            </article>
          ))}
        </div>
        <div className="reveal mt-10 rounded-card border border-accent/20 bg-primary-soft p-6 text-center sm:p-8">
          <h3 className="text-h3 text-primary">Learning Beyond the Classroom</h3>
          <p className="mx-auto mt-3 max-w-3xl text-body text-ink-muted">
            Students are encouraged to learn through activities, projects, competitions, sports, and cultural events, ensuring a well-rounded education.
          </p>
        </div>
      </div>
    </section>
  )
}
