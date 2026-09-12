import { useState } from 'react'
import SectionHeader from './SectionHeader'

export default function EnquiryForm() {
  const [form, setForm] = useState({
    studentName: '',
    parentName: '',
    mobile: '',
    email: '',
    classApplying: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
      setForm({ studentName: '', parentName: '', mobile: '', email: '', classApplying: '', message: '' })
      setTimeout(() => setSubmitted(false), 5000)
    }, 1500)
  }

  return (
    <section id="enquiry" className="section bg-white">
      <div className="container-main max-w-3xl">
        <SectionHeader
          label="Connect"
          title="Admission Enquiry"
          subtitle="Fill in the details and we'll get back to you shortly."
        />
        {submitted && (
          <div className="mb-6 rounded-card border border-emerald-200 bg-emerald-50 p-4 text-emerald-800" role="status">
            Your enquiry has been submitted successfully. We will contact you soon.
          </div>
        )}
        <form onSubmit={handleSubmit} className="reveal card space-y-5">
          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label htmlFor="studentName" className="text-sm font-medium text-ink">Student Name *</label>
              <input id="studentName" type="text" name="studentName" value={form.studentName} onChange={handleChange} required className="input-field" />
            </div>
            <div>
              <label htmlFor="parentName" className="text-sm font-medium text-ink">Parent/Guardian Name *</label>
              <input id="parentName" type="text" name="parentName" value={form.parentName} onChange={handleChange} required className="input-field" />
            </div>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label htmlFor="mobile" className="text-sm font-medium text-ink">Mobile Number *</label>
              <input id="mobile" type="tel" name="mobile" value={form.mobile} onChange={handleChange} required className="input-field" />
            </div>
            <div>
              <label htmlFor="email" className="text-sm font-medium text-ink">Email</label>
              <input id="email" type="email" name="email" value={form.email} onChange={handleChange} className="input-field" />
            </div>
          </div>
          <div>
            <label htmlFor="classApplying" className="text-sm font-medium text-ink">Class Applying For *</label>
            <input id="classApplying" type="text" name="classApplying" value={form.classApplying} onChange={handleChange} required className="input-field" placeholder="e.g. Nursery, Class 1, etc." />
          </div>
          <div>
            <label htmlFor="message" className="text-sm font-medium text-ink">Message</label>
            <textarea id="message" name="message" value={form.message} onChange={handleChange} rows="3" className="input-field" />
          </div>
          <button type="submit" disabled={loading} className="btn-primary w-full disabled:opacity-70">
            {loading ? 'Submitting…' : 'Submit Enquiry'}
          </button>
        </form>
      </div>
    </section>
  )
}
