import { useState } from 'react'

const initial = { name: '', email: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(initial)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email'
    if (form.message.trim().length < 10) e.message = 'Message should be at least 10 characters'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const onSubmit = (ev) => {
    ev.preventDefault()
    if (!validate()) return
    // Mock submit
    setSent(true)
    setForm(initial)
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id="contact" aria-labelledby="contact-title" className="py-16">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <h2 id="contact-title" className="text-3xl font-bold">Contact</h2>
        <p className="mt-2 text-gray-600">Tell us a bit about your idea and we’ll get back to you.</p>

        <form onSubmit={onSubmit} noValidate className="mt-6 space-y-4" aria-describedby="form-desc">
          <div id="form-desc" className="sr-only">All fields are required.</div>

          <div>
            <label htmlFor="name" className="block text-sm font-medium">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? 'name-error' : undefined}
              className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2"
              required
            />
            {errors.name && <p id="name-error" className="mt-1 text-sm text-red-600">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? 'email-error' : undefined}
              className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2"
              required
            />
            {errors.email && <p id="email-error" className="mt-1 text-sm text-red-600">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? 'message-error' : undefined}
              className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2"
              required
            />
            {errors.message && <p id="message-error" className="mt-1 text-sm text-red-600">{errors.message}</p>}
          </div>

          <button type="submit" className="inline-flex items-center justify-center rounded-xl bg-gray-900 px-5 py-3 text-white font-medium">
            Send message
          </button>

          {sent && (
            <p role="status" className="text-green-700">Thanks! Your message was sent.</p>
          )}
        </form>
      </div>
    </section>
  )
}
