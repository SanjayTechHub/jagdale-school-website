import { useEffect, useState } from 'react'
import SectionHeader from './SectionHeader'
import { galleryImages } from '../data/galleryData'

const FALLBACK_IMAGE = '/images/building.jpg'

export default function Gallery() {
  const [filter, setFilter] = useState('All')
  const [lightbox, setLightbox] = useState(null)
  const categories = ['All', ...new Set(galleryImages.map((img) => img.category))]
  const filtered = filter === 'All' ? galleryImages : galleryImages.filter((img) => img.category === filter)
  const currentIndex = lightbox !== null ? filtered.findIndex((img) => img.id === lightbox.id) : -1

  const openLightbox = (img) => setLightbox(img)
  const closeLightbox = () => setLightbox(null)
  const prevImage = () => {
    if (!filtered.length) return
    const index = currentIndex > 0 ? currentIndex - 1 : filtered.length - 1
    setLightbox(filtered[index])
  }
  const nextImage = () => {
    if (!filtered.length) return
    const index = currentIndex < filtered.length - 1 ? currentIndex + 1 : 0
    setLightbox(filtered[index])
  }

  useEffect(() => {
    if (!lightbox) return undefined
    const onKey = (e) => {
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowLeft') prevImage()
      if (e.key === 'ArrowRight') nextImage()
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [lightbox, currentIndex, filtered])

  return (
    <section id="gallery" className="section section-alt">
      <div className="container-main">
        <SectionHeader
          label="Moments"
          title="Gallery"
          subtitle="A glimpse of campus life at Jagdale School."
        />
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setFilter(cat)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition duration-250 ${
                filter === cat
                  ? 'bg-primary text-white'
                  : 'bg-white text-ink-muted ring-1 ring-slate-200 hover:text-primary'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 md:gap-4">
          {filtered.map((img) => (
            <button
              key={img.id}
              type="button"
              className="gallery-item group relative aspect-[4/3] overflow-hidden rounded-card"
              onClick={() => openLightbox(img)}
              aria-label={`Open ${img.title}`}
            >
              <img
                src={img.src}
                alt={img.title}
                className="gallery-zoom h-full w-full object-cover"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.src = FALLBACK_IMAGE
                }}
              />
              <span className="absolute inset-0 flex items-end bg-gradient-to-t from-primary-dark/70 via-transparent to-transparent p-3 text-left text-sm font-medium text-white opacity-0 transition-opacity duration-250 group-hover:opacity-100 group-focus-visible:opacity-100">
                {img.title}
              </span>
            </button>
          ))}
        </div>
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-primary-dark/90 p-4 backdrop-blur-sm"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.title}
        >
          <div className="relative max-h-[90vh] w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="absolute -top-12 right-0 rounded-full px-3 py-1 text-white"
              onClick={closeLightbox}
              aria-label="Close gallery"
            >
              Close
            </button>
            <button
              type="button"
              className="absolute left-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-2xl text-primary shadow-card sm:left-4"
              onClick={prevImage}
              aria-label="Previous image"
            >
              ‹
            </button>
            <button
              type="button"
              className="absolute right-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-2xl text-primary shadow-card sm:right-4"
              onClick={nextImage}
              aria-label="Next image"
            >
              ›
            </button>
            <img
              src={lightbox.src}
              alt={lightbox.title}
              className="mx-auto max-h-[80vh] w-auto max-w-full rounded-card object-contain"
              onError={(e) => {
                e.currentTarget.src = FALLBACK_IMAGE
              }}
            />
            <p className="mt-3 text-center text-sm text-white/90">{lightbox.title}</p>
          </div>
        </div>
      )}
    </section>
  )
}
