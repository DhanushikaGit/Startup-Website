export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Title */}
        <h2
          id="about-title"
          className="text-4xl sm:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-4"
        >
          About Us
        </h2>
        <p className="mt-4 text-gray-700 max-w-3xl mx-auto text-lg">
          We’re a product studio partnering with founders to design, build, and iterate on
          high‑quality web apps. We focus on craftsmanship, accessibility, and outcomes—shipping small,
          learning fast, and moving forward.
        </p>

        {/* Feature Cards */}
        <ul className="mt-12 grid sm:grid-cols-3 gap-6">
          {[
            {
              title: 'Customer‑first',
              desc: 'We solve real problems and validate with users.',
              icon: '⚡',
            },
            {
              title: 'Quality',
              desc: 'Readable code, accessible UI, reliable delivery.',
              icon: '🛠️',
            },
            {
              title: 'Transparency',
              desc: 'Clear communication and shared context.',
              icon: '👁️',
            },
          ].map((item) => (
            <li
              key={item.title}
              className="rounded-3xl border border-gray-200 p-6 bg-white shadow hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center"
            >
              <span className="text-4xl">{item.icon}</span>
              <h3 className="font-semibold text-gray-900 text-lg mt-2">{item.title}</h3>
              <p className="mt-2 text-gray-700">{item.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
