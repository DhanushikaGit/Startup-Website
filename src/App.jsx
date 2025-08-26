import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Services from './components/Services.jsx'
import Work from './components/Work.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import useActiveSection from './hooks/useActiveSection.js'

export default function App() {
  const sectionIds = ['home', 'about', 'services', 'work', 'contact']
  const activeId = useActiveSection(sectionIds)

  return (
    <div>
      <Navbar activeId={activeId} />
      <main id="main">
        <Hero />
        <About />
        <Services />
        <Work />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
