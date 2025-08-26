import { useEffect, useState } from 'react'

export default function useActiveSection(sectionIds = []) {
  const [activeId, setActiveId] = useState(sectionIds[0] || null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { threshold: 0.6 },
    )

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [sectionIds.join('|')])

  return activeId
}
