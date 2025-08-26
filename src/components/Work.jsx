import { projects } from '../data/projects'

export default function Work() {
  return (
    <section id="work" aria-labelledby="work-title" className="py-16 bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 id="work-title" className="text-3xl font-bold">Recent Work</h2>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article key={p.id} className="rounded-2xl border p-6">
              <div className="aspect-video w-full rounded-xl border bg-white grid place-items-center text-4xl select-none">
                🖼️
              </div>
              <h3 className="mt-3 font-semibold">{p.title}</h3>
              <ul className="mt-2 flex flex-wrap gap-2" aria-label="Project tags">
                {p.tags.map((t) => (
                  <li key={t} className="rounded-full border px-2 py-1 text-xs text-gray-700">{t}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
