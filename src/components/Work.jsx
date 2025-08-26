import { projects } from '../data/projects';

export default function Work() {
  return (
    <section id="work" aria-labelledby="work-title" className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
        <h2
          id="work-title"
          className="text-4xl sm:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-8"
        >
          Recent Work
        </h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article
              key={p.id}
              className="rounded-3xl border border-gray-200 bg-white shadow hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
            >
              {/* Project image placeholder */}
              <div className="aspect-video w-full rounded-2xl border bg-gray-100 grid place-items-center text-4xl select-none">
                🖼️
              </div>

              <div className="p-6 text-center">
                <h3 className="mt-3 font-semibold text-lg text-gray-900">{p.title}</h3>
                <ul className="mt-3 flex flex-wrap justify-center gap-2" aria-label="Project tags">
                  {p.tags.map((t) => (
                    <li
                      key={t}
                      className="rounded-full border px-2 py-1 text-xs text-gray-700 bg-gray-100"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
