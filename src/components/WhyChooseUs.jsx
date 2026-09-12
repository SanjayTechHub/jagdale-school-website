import SectionHeader from './SectionHeader'

const features = [
  { icon: '🎓', title: 'Quality Education', desc: 'Strong academic foundations and conceptual understanding.' },
  { icon: '👩‍🏫', title: 'Experienced Faculty', desc: 'Supportive teachers focused on academic and personal development.' },
  { icon: '🌱', title: 'Holistic Development', desc: 'Academic, physical, creative, and social growth.' },
  { icon: '🏗️', title: 'Modern Infrastructure', desc: 'Safe and engaging environment for learning.' },
  { icon: '🎭', title: 'Co-Curricular Activities', desc: 'Cultural programs, competitions, and celebrations.' },
  { icon: '⚽', title: 'Sports & Fitness', desc: 'Encouraging students to participate in sports and physical activities.' },
]

export default function WhyChooseUs() {
  return (
    <section className="section section-alt">
      <div className="container-main">
        <SectionHeader
          label="Why Jagdale"
          title="Why Choose Jagdale School"
          subtitle="We provide a strong academic foundation, experienced teachers, and a vibrant environment for overall growth."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6">
          {features.map((item, idx) => (
            <article
              key={item.title}
              className={`card card-hover reveal reveal-delay-${(idx % 6) + 1} text-center`}
            >
              <div className="mb-4 text-4xl" aria-hidden="true">{item.icon}</div>
              <h3 className="text-h3 text-primary">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{item.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
