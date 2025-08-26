import { services } from '../data/services'

export default function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 id="services-title" className="text-3xl font-bold">Services</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <article key={s.id} className="rounded-2xl border p-6">
              <div className="text-3xl" aria-hidden="true">{s.icon}</div>
              <h3 className="mt-3 font-semibold">{s.title}</h3>
              <p className="mt-2 text-gray-600">{s.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
