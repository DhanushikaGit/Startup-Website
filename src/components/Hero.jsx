import { useState, useEffect } from 'react'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleScrollTo = (id) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 80
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = element.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  const features = [
    { icon: '⚡', label: 'Fast', description: 'Lightning speed' },
    { icon: '🔒', label: 'Secure', description: 'Bank-grade security' },
    { icon: '📱', label: 'Responsive', description: 'Works everywhere' },
    { icon: '♿', label: 'Accessible', description: 'For everyone' },
    { icon: '🧪', label: 'Tested', description: 'Rock solid' },
    { icon: '☁️', label: 'Cloud', description: 'Always available' }
  ]

  return (
    <>
      <section id="home" aria-labelledby="home-title" className="pt-24 pb-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 items-center gap-12">
            {/* Content */}
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
                Now accepting new projects
              </div>
              
              <h1 id="home-title" className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-gray-900">
                Build, launch, and{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  grow
                </span>{' '}
                your product—faster.
              </h1>
              
              <p className="mt-6 text-xl text-gray-600 leading-relaxed">
                We help startups validate ideas, craft delightful experiences, and ship performant web apps that users love.
              </p>
              
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => handleScrollTo('contact')}
                  className="group inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 text-white font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50"
                >
                  Start a project
                  <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
                
                <button
                  onClick={() => handleScrollTo('work')}
                  className="inline-flex items-center justify-center rounded-2xl border-2 border-gray-300 px-8 py-4 font-semibold text-lg text-gray-700 hover:border-gray-400 hover:bg-gray-50 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-gray-500 focus:ring-opacity-50"
                >
                  See our work
                </button>
              </div>

              
            </div>

            {/* Features Grid */}
            <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur-lg opacity-20"></div>
                <div className="relative rounded-3xl border border-gray-200 bg-white/80 backdrop-blur-sm p-8 shadow-xl">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">Why choose us?</h3>
                  <div className="grid grid-cols-3 gap-4">
                    {features.map((feature, index) => (
                      <div
                        key={feature.label}
                        className={`group p-4 rounded-2xl border border-gray-200 bg-white text-center hover:border-blue-300 hover:shadow-md transition-all duration-300 cursor-default ${
                          isVisible ? 'animate-fade-in-up' : ''
                        }`}
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-200">
                          {feature.icon}
                        </div>
                        <div className="text-sm font-semibold text-gray-900">{feature.label}</div>
                        <div className="text-xs text-gray-500 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                          {feature.description}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </>
  )
}