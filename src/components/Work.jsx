import { useState, useEffect } from 'react'
import { projects } from '../data/projects'

export default function Work() {
  const [ref, setRef] = useState(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (!ref) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    observer.observe(ref)
    return () => observer.disconnect()
  }, [ref])

  return (
    <section id="work" aria-labelledby="work-title" className="py-20 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8" ref={setRef}>
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 id="work-title" className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Recent Work
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Explore our portfolio of thoughtfully crafted digital experiences. Each project represents our commitment 
            to quality, innovation, and meaningful user impact.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <article 
              key={project.id} 
              className={`group relative overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Gradient overlay that appears on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10 p-6">
                {/* Project Image/Icon Area */}
                <div className="aspect-video w-full rounded-2xl border-2 border-gray-100 bg-gradient-to-br from-gray-50 to-gray-100 group-hover:from-purple-50 group-hover:to-pink-50 transition-all duration-500 grid place-items-center text-6xl select-none mb-6 overflow-hidden">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 opacity-20 rounded-full blur-xl transform group-hover:scale-150 transition-transform duration-700"></div>
                    <span className="relative z-10 group-hover:scale-110 transition-transform duration-300">🖼️</span>
                  </div>
                </div>
                
                {/* Project Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-300">
                  {project.title}
                </h3>
                
                {/* Project Description (if available) */}
                {project.description && (
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                )}
                
                {/* Tags */}
                <ul className="flex flex-wrap gap-2" aria-label="Project tags">
                  {project.tags.map((tag, tagIndex) => (
                    <li 
                      key={tag} 
                      className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-gray-100 text-gray-700 group-hover:bg-gradient-to-r group-hover:from-purple-100 group-hover:to-pink-100 group-hover:text-purple-700 transition-all duration-300"
                      style={{ transitionDelay: `${tagIndex * 50}ms` }}
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
                
                {/* View Project Button */}
                <div className="mt-6 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <button className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-medium rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-200 shadow-lg hover:shadow-xl">
                    View Project
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

     

      </div>
    </section>
  )
}