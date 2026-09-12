import { useEffect, useState } from 'react'
import { callLink, whatsappLink } from '../data/schoolInfo'

export default function FloatingActions() {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 480)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white/95 px-3 py-2 shadow-[0_-8px_24px_-12px_rgba(26,42,108,0.2)] backdrop-blur-md md:hidden">
        <div className="mx-auto grid max-w-container grid-cols-3 gap-2">
          <a href={callLink} className="btn-outline py-2.5 text-sm" aria-label="Call Jagdale School">
            Call
          </a>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn bg-[#25D366] py-2.5 text-sm text-white hover:bg-[#1ebe5d]"
            aria-label="WhatsApp Jagdale School"
          >
            WhatsApp
          </a>
          <a href="#enquiry" className="btn-gold py-2.5 text-sm">
            Enquire
          </a>
        </div>
      </div>

      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-5 z-40 hidden h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-cta transition duration-250 hover:-translate-y-0.5 hover:bg-[#1ebe5d] md:flex"
        aria-label="Chat on WhatsApp"
      >
        <span className="text-xl" aria-hidden="true">💬</span>
      </a>

      {showTop && (
        <a
          href="#home"
          className="fixed bottom-24 right-5 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-primary text-white shadow-cta transition duration-250 hover:-translate-y-0.5 hover:bg-primary-dark md:bottom-24"
          aria-label="Back to top"
        >
          ↑
        </a>
      )}
    </>
  )
}
