import { useState } from 'react'
import SectionHeader from './SectionHeader'

export default function PrincipalMessage() {
  const [imgError, setImgError] = useState(false)

  return (
    <section id="principal" className="section section-alt">
      <div className="container-main">
        <SectionHeader
          label="Leadership"
          title="Message from the Principal"
        />

        <div className="grid items-start gap-10 lg:grid-cols-[340px_1fr] lg:gap-16">
          <div className="mx-auto w-full max-w-[340px] lg:mx-0">
            <div className="overflow-hidden rounded-card bg-primary-soft shadow-card">
              {!imgError ? (
                <img
                  src="/images/principal.jpg"
                  alt="Principal of Jagdale School"
                  className="aspect-[3/4] w-full object-cover object-top"
                  loading="lazy"
                  onError={() => setImgError(true)}
                />
              ) : (
                <div className="flex aspect-[3/4] items-center justify-center p-8 text-center text-ink-muted">
                  <span className="text-sm">Principal photograph to be added</span>
                </div>
              )}
            </div>
            <div className="mt-5 text-center lg:text-left">
              <p className="text-sm text-ink-muted">Principal, Jagdale School Indore</p>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <blockquote className="border-l-4 border-accent pl-5 text-lg italic text-primary">
              [Principal&apos;s Message — Official Content Required]
            </blockquote>
            <p className="mt-6 leading-relaxed text-ink-muted">
              This section is reserved for the official message from the Principal. Replace this placeholder with the approved content when available.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
