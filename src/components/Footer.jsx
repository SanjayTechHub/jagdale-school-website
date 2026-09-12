import { schoolInfo, whatsappLink } from '../data/schoolInfo'

export default function Footer() {
  return (
    <footer className="bg-primary-dark pb-24 pt-14 text-white md:pb-14">
      <div className="container-main grid gap-10 md:grid-cols-3">
        <div>
          <h3 className="text-xl font-bold tracking-tight">JAGDALE SCHOOL INDORE</h3>
          <p className="mt-3 text-sm leading-relaxed text-white/75">{schoolInfo.address}</p>
          <p className="mt-2 text-sm text-white/75">
            {schoolInfo.phones.join(', ')}
          </p>
          <p className="mt-1 text-sm text-white/75">Instagram: {schoolInfo.instagramHandle}</p>
        </div>
        <div>
          <h4 className="mb-3 text-lg font-semibold">Quick Links</h4>
          <ul className="space-y-2 text-sm text-white/75">
            <li><a href="#home" className="transition hover:text-accent">Home</a></li>
            <li><a href="#about" className="transition hover:text-accent">About</a></li>
            <li><a href="#academics" className="transition hover:text-accent">Academics</a></li>
            <li><a href="#facilities" className="transition hover:text-accent">Facilities</a></li>
            <li><a href="#gallery" className="transition hover:text-accent">Gallery</a></li>
            <li><a href="#admissions" className="transition hover:text-accent">Admissions</a></li>
            <li><a href="#contact" className="transition hover:text-accent">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 text-lg font-semibold">Follow Us</h4>
          <a
            href={schoolInfo.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/75 transition hover:text-accent"
          >
            Instagram
          </a>
          <p className="mt-2 text-sm text-white/75">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
              WhatsApp enquiry
            </a>
          </p>
          <p className="mt-6 text-sm text-white/60">© 2026 Jagdale School Indore. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}
