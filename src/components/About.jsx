export default function About() {
  return (
    <section id="about" className="section bg-white">
      <div className="container-main grid items-center gap-10 md:grid-cols-2 md:gap-14 lg:gap-16">
        <div className="reveal">
          <p className="section-label">About us</p>
          <h2 className="text-h2 text-primary">About Jagdale School</h2>
          <p className="mt-5 text-body text-ink-muted">
            Jagdale School is an English-medium private school in Indore, serving students from Nursery to Class 12 under the MP State Board. We are committed to providing quality education, discipline, and holistic development.
          </p>
          <p className="mt-4 text-body text-ink-muted">
            Our focus is on character building, co-curricular activities, sports, creativity, and student confidence. We believe in nurturing each child&apos;s potential through a supportive and engaging environment.
          </p>
          <a href="#admissions" className="btn-primary mt-8">
            Know More About Us
          </a>
        </div>
        <div className="reveal-image overflow-hidden rounded-card shadow-card">
          <img
            src="/images/building.jpg"
            alt="Jagdale School building in Indore"
            className="h-full w-full min-h-[260px] object-cover sm:min-h-[360px]"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}
