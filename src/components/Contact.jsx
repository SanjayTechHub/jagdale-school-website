import SectionHeader from './SectionHeader'
import { callLink, schoolInfo, whatsappLink } from '../data/schoolInfo'

const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(schoolInfo.address)}&z=16&output=embed`

export default function Contact() {
  return (
    <section id="contact" className="section section-alt">
      <div className="container-main">
        <SectionHeader title="Contact Us" subtitle="We are here to help with admissions and campus visits." />
        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
          <div className="reveal">
            <div className="space-y-5 text-ink-muted">
              <div>
                <p className="text-sm font-semibold text-primary">Address</p>
                <p className="mt-1 leading-relaxed">{schoolInfo.address}</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-primary">Phone</p>
                <p className="mt-1">
                  {schoolInfo.phones.map((phone, i) => (
                    <span key={phone}>
                      {i > 0 ? ', ' : ''}
                      <a href={`tel:${phone}`} className="text-primary underline-offset-2 hover:underline">{phone}</a>
                    </span>
                  ))}
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a href={callLink} className="btn-primary">Call Now</a>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn min-w-[140px] bg-[#25D366] text-white hover:bg-[#1ebe5d]">
                  WhatsApp
                </a>
              </div>
            </div>
            <div className="mt-8 h-64 overflow-hidden rounded-card border border-slate-200 bg-white shadow-card sm:h-72">
              <iframe
                title="Jagdale School location on Google Maps"
                src={mapSrc}
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
          <div className="reveal">
            <h3 className="text-h3 text-primary">Send a Message</h3>
            <form
              className="mt-4 space-y-4"
              onSubmit={(e) => {
                e.preventDefault()
                alert('Message sent (demo).')
              }}
            >
              <div>
                <label htmlFor="contactName" className="text-sm font-medium text-ink">Your Name</label>
                <input id="contactName" type="text" name="name" required className="input-field" />
              </div>
              <div>
                <label htmlFor="contactEmail" className="text-sm font-medium text-ink">Your Email</label>
                <input id="contactEmail" type="email" name="email" required className="input-field" />
              </div>
              <div>
                <label htmlFor="contactPhone" className="text-sm font-medium text-ink">Phone</label>
                <input id="contactPhone" type="tel" name="phone" className="input-field" />
              </div>
              <div>
                <label htmlFor="contactMessage" className="text-sm font-medium text-ink">Message</label>
                <textarea id="contactMessage" name="message" rows="3" required className="input-field" />
              </div>
              <button type="submit" className="btn-primary w-full">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
