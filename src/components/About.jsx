import { useState, useEffect } from 'react'

export default function About() {
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
      { threshold: 0.3 }
    )

    observer.observe(ref)
    return () => observer.disconnect()
  }, [ref])

  const values = [
    {
      title: 'Customer‑first',
      description: 'We solve real problems and validate with users through continuous feedback.',
      icon: '👥',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Quality',
      description: 'Readable code, accessible UI, and reliable delivery every single time.',
      icon: '⭐',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Transparency',
      description: 'Clear communication and shared context throughout the entire process.',
      icon: '🔍',
      color: 'from-green-500 to-emerald-500'
    }
  ]

  return (
    <section id="about" aria-labelledby="about-title" className="py-20 bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8" ref={setRef}>
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 id="about-title" className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            About Our Mission
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            We're a passionate product studio partnering with visionary founders to design, build, and iterate on
            high‑quality web applications. We focus on craftsmanship, accessibility, and measurable outcomes—shipping thoughtfully,
            learning rapidly, and moving forward together.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={value.title}
              className={`group relative overflow-hidden rounded-3xl bg-white p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="relative z-10">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${value.color} text-white text-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {value.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {value.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
              
              <div className={`absolute inset-0 bg-gradient-to-r ${value.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
            </div>
          ))}
        </div>

        

        {/* Team highlight section */}
        <div className={`mt-16 bg-white rounded-3xl p-8 shadow-lg border border-gray-100 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Work With Us?</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-xl mx-auto mb-3 flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 mb-1">Fast Delivery</h4>
                <p className="text-sm text-gray-600">Quick turnaround without compromising quality</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-xl mx-auto mb-3 flex items-center justify-center">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 mb-1">Proven Process</h4>
                <p className="text-sm text-gray-600">Battle-tested methodology for success</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-xl mx-auto mb-3 flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 mb-1">Expert Team</h4>
                <p className="text-sm text-gray-600">Skilled professionals across all disciplines</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-xl mx-auto mb-3 flex items-center justify-center">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 110 19.5 9.75 9.75 0 010-19.5z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 mb-1">24/7 Support</h4>
                <p className="text-sm text-gray-600">Always here when you need assistance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}