import { useEffect, useState } from 'react'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#academics', label: 'Academics' },
  { href: '#facilities', label: 'Facilities' },
  { href: '#activities', label: 'Activities' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#admissions', label: 'Admissions' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('#home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const ids = links.map((l) => l.href.slice(1))
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible?.target?.id) setActive(`#${visible.target.id}`)
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: [0.1, 0.35, 0.6] },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || isOpen ? 'bg-white/95 shadow-nav backdrop-blur-md' : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <nav className="container-main flex items-center justify-between gap-4 py-3" aria-label="Main">
        <a href="#home" className="flex min-w-0 items-center gap-2.5">
          <img src="/images/logo.png" alt="Jagdale School logo" className="h-10 w-auto shrink-0 sm:h-11" />
          <span className="truncate text-sm font-extrabold tracking-tight text-primary sm:text-base md:text-lg">
            JAGDALE SCHOOL
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`rounded-full px-3 py-2 text-[13px] font-medium transition-colors duration-250 ${
                active === link.href
                  ? 'bg-primary-soft text-primary'
                  : 'text-ink-muted hover:text-primary'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a href="#enquiry" className="btn-gold ml-2 px-5 py-2.5">
            Enquire Now
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 text-primary lg:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? (
            <span aria-hidden="true" className="text-xl leading-none">✕</span>
          ) : (
            <span className="flex flex-col gap-1.5" aria-hidden="true">
              <span className="block h-0.5 w-5 bg-primary" />
              <span className="block h-0.5 w-5 bg-primary" />
              <span className="block h-0.5 w-4 bg-primary" />
            </span>
          )}
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={`lg:hidden overflow-hidden border-t border-slate-100 bg-white transition-[max-height,opacity] duration-300 ${
          isOpen ? 'max-h-[min(80vh,640px)] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container-main flex flex-col gap-1 py-4 pb-6">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`rounded-xl px-4 py-3 text-sm font-medium ${
                active === link.href ? 'bg-primary-soft text-primary' : 'text-ink'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a href="#enquiry" className="btn-gold mt-2 w-full" onClick={() => setIsOpen(false)}>
            Enquire Now
          </a>
        </div>
      </div>
    </header>
  )
}
