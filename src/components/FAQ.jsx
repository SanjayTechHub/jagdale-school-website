import { useState } from 'react'
import SectionHeader from './SectionHeader'
import { faqs } from '../data/faqsData'

export default function FAQ() {
  const [open, setOpen] = useState(null)

  return (
    <section className="section bg-white">
      <div className="container-main max-w-3xl">
        <SectionHeader title="Frequently Asked Questions" />
        <div className="space-y-3">
          {faqs.map((item, idx) => {
            const isOpen = open === idx
            return (
              <div key={item.q} className="reveal overflow-hidden rounded-card border border-slate-200 bg-white">
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-medium text-primary transition-colors duration-250 hover:bg-soft-gray"
                  onClick={() => setOpen(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                >
                  <span>{item.q}</span>
                  <span className="text-xl leading-none text-accent" aria-hidden="true">{isOpen ? '−' : '+'}</span>
                </button>
                <div className={`faq-panel ${isOpen ? 'open' : ''}`}>
                  <div className="overflow-hidden">
                    <p className="border-t border-slate-100 px-5 pb-4 pt-3 text-ink-muted">{item.a}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
