import { callLink, whatsappLink } from '../data/schoolInfo'

export default function Admissions() {
  return (
    <section id="admissions" className="section bg-primary text-white">
      <div className="container-main max-w-4xl text-center">
        <p className="reveal section-label text-accent-light">Admissions</p>
        <h2 className="reveal text-h2">Admissions Open</h2>
        <p className="reveal mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
          Admissions are open from Nursery to Class 12. Give your child an environment where learning, discipline, creativity and confidence grow together.
        </p>
        <div className="reveal mt-8 flex flex-wrap justify-center gap-3 sm:gap-4">
          <a href="#enquiry" className="btn-gold min-w-[148px]">Enquire Now</a>
          <a href={callLink} className="btn-secondary min-w-[148px]">Call Now</a>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn min-w-[148px] bg-[#25D366] text-white hover:bg-[#1ebe5d]"
          >
            WhatsApp
          </a>
        </div>
        <div className="reveal mt-10 grid grid-cols-2 gap-3 text-sm text-white/75 md:grid-cols-4 md:gap-4">
          <div className="rounded-card border border-white/15 bg-white/5 px-3 py-4">
            <span className="block font-semibold text-white">Session</span>
            Details on enquiry
          </div>
          <div className="rounded-card border border-white/15 bg-white/5 px-3 py-4">
            <span className="block font-semibold text-white">Guidelines</span>
            Available on request
          </div>
          <div className="rounded-card border border-white/15 bg-white/5 px-3 py-4">
            <span className="block font-semibold text-white">Documents</span>
            Shared during admission
          </div>
          <div className="rounded-card border border-white/15 bg-white/5 px-3 py-4">
            <span className="block font-semibold text-white">Fees</span>
            Please contact the school
          </div>
        </div>
      </div>
    </section>
  )
}
