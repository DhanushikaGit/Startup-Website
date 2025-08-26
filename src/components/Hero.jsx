export default function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="home-title"
      className="pt-24 pb-16 bg-gradient-to-r from-blue-50 to-white"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 items-center gap-10">
        {/* Hero Text */}
        <div>
          <h1
            id="home-title"
            className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
          >
            Build, launch, and grow your product—faster.
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            We help startups validate ideas, craft delightful experiences, and ship performant web apps.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3 text-white font-medium shadow-lg hover:bg-blue-700 transition-colors duration-300"
            >
              Start a project
            </a>
            <a
              href="#work"
              className="inline-flex items-center justify-center rounded-xl border border-gray-300 px-6 py-3 font-medium text-gray-700 hover:bg-gray-100 transition-colors duration-300"
            >
              See our work
            </a>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-3">
          {[
            { icon: '⚡', label: 'Fast' },
            { icon: '🔒', label: 'Secure' },
            { icon: '📱', label: 'Responsive' },
            { icon: '♿', label: 'Accessible' },
            { icon: '🧪', label: 'Tested' },
            { icon: '☁️', label: 'Cloud' },
          ].map((feature) => (
            <div
              key={feature.label}
              className="p-6 rounded-2xl border border-gray-200 bg-white shadow hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 text-center flex flex-col items-center justify-center"
            >
              <span className="text-3xl">{feature.icon}</span>
              <span className="mt-2 font-medium text-gray-800">{feature.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
