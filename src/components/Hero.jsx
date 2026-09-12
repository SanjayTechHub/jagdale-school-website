export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-[100svh] items-center justify-center overflow-hidden">
      <img
        src="/images/hero-bg.jpg"
        alt="Jagdale School Indore campus"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-primary-dark/70" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-transparent to-primary-dark/20" />

      <div className="container-main relative z-10 px-4 py-28 text-center text-white sm:py-32">
        <p className="hero-anim hero-delay-1 section-label text-accent-light">
          Jagdale School, Indore
        </p>
        <h1 className="hero-anim hero-delay-1 text-h1 mx-auto max-w-4xl">
          Empowering Young Minds,
          <span className="block">Building Bright Futures</span>
        </h1>
        <p className="hero-anim hero-delay-2 mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg">
          Welcome to Jagdale School, Indore — a place where knowledge, discipline, creativity and character come together.
        </p>
        <div className="hero-anim hero-delay-3 mt-8 flex flex-wrap justify-center gap-3 sm:gap-4">
          <a href="#about" className="btn-secondary min-w-[160px]">
            Explore Our School
          </a>
          <a href="#enquiry" className="btn-gold min-w-[160px]">
            Admission Enquiry
          </a>
        </div>
        <div className="hero-anim hero-delay-4 mt-10 flex flex-wrap justify-center gap-2.5 text-xs font-medium sm:gap-3 sm:text-sm">
          {['Nursery – Class 12', 'English Medium', 'MP Board', 'Experienced Faculty'].map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/20 bg-white/10 px-3.5 py-2 backdrop-blur-sm"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
