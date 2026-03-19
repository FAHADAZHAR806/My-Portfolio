import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'

export default function ScrollTop() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const fn = () => setShow(window.scrollY > 300)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  if (!show) return null

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      className="fixed bottom-6 right-6 z-50 w-11 h-11 rounded-full
                 flex items-center justify-center
                 bg-accent text-dark-bg shadow-lg
                 hover:scale-110 hover:brightness-110
                 transition-all duration-200"
    >
      <ArrowUp size={18} strokeWidth={2.5} />
    </button>
  )
}
