import { services } from '../data/services';

export default function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
        <h2
          id="services-title"
          className="text-4xl sm:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-6"
        >
          Our Services
        </h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.id}
              className="rounded-3xl border border-gray-200 p-8 bg-white shadow hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className="text-5xl mb-4">{s.icon}</div>
              <h3 className="font-semibold text-lg text-gray-900">{s.title}</h3>
              <p className="mt-2 text-gray-700">{s.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
