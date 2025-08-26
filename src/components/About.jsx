export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="py-16 bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 id="about-title" className="text-3xl font-bold">About</h2>
        <p className="mt-4 text-gray-700 max-w-3xl">
          We’re a small product studio partnering with founders to design, build, and iterate on
          high‑quality web apps. We focus on craftsmanship, accessibility, and outcomes—shipping small,
          learning fast, and moving forward.
        </p>

        <ul className="mt-8 grid sm:grid-cols-3 gap-4">
          <li className="rounded-2xl border p-6">
            <h3 className="font-semibold">Customer‑first</h3>
            <p className="mt-2 text-gray-600">We solve real problems and validate with users.</p>
          </li>
          <li className="rounded-2xl border p-6">
            <h3 className="font-semibold">Quality</h3>
            <p className="mt-2 text-gray-600">Readable code, accessible UI, reliable delivery.</p>
          </li>
          <li className="rounded-2xl border p-6">
            <h3 className="font-semibold">Transparency</h3>
            <p className="mt-2 text-gray-600">Clear communication and shared context.</p>
          </li>
        </ul>
      </div>
    </section>
  )
}
