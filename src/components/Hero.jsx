export default function Hero() {
  return (
    <section id="home" aria-labelledby="home-title" className="pt-24 pb-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 items-center gap-10">
        <div>
          <h1 id="home-title" className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
            Build, launch, and grow your product—faster.
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            We help startups validate ideas, craft delightful experiences, and ship performant web apps.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-xl bg-gray-900 px-5 py-3 text-white font-medium"
            >
              Start a project
            </a>
            <a
              href="#work"
              className="inline-flex items-center justify-center rounded-xl border border-gray-300 px-5 py-3 font-medium"
            >
              See our work
            </a>
          </div>
        </div>
        <div className="rounded-3xl border border-gray-200 p-8">
          <div className="grid grid-cols-3 gap-4">
            <div className="p-4 rounded-2xl border text-center">⚡ Fast</div>
            <div className="p-4 rounded-2xl border text-center">🔒 Secure</div>
            <div className="p-4 rounded-2xl border text-center">📱 Responsive</div>
            <div className="p-4 rounded-2xl border text-center">♿ Accessible</div>
            <div className="p-4 rounded-2xl border text-center">🧪 Tested</div>
            <div className="p-4 rounded-2xl border text-center">☁️ Cloud</div>
          </div>
        </div>
      </div>
    </section>
  )
}
