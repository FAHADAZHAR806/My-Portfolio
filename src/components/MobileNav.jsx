import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import {
  Home, User, GraduationCap, Code2, Briefcase,
  FolderOpen, Mail, Download, Sun, Moon, Menu, X,
} from 'lucide-react'
import { useTheme } from '../context/ThemeContext'
import { SECTIONS } from '../data'

const NAV = [
  { path: '/',           label: 'Home',       Icon: Home          },
  { path: '/about',      label: 'About',      Icon: User          },
  { path: '/education',  label: 'Education',  Icon: GraduationCap },
  { path: '/skills',     label: 'Skills',     Icon: Code2         },
  { path: '/experience', label: 'Experience', Icon: Briefcase     },
  { path: '/projects',   label: 'Projects',   Icon: FolderOpen    },
  { path: '/contact',    label: 'Contact',    Icon: Mail          },
]

export default function MobileNav({ resumePath, resumeFileName }) {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const { dark, toggle } = useTheme()

  const handleNav = (path) => {
    navigate(path)
    const section = SECTIONS.find(s => s.path === path)
    if (section) {
      setTimeout(() => {
        const el = document.getElementById(section.id)
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 50)
    }
    setOpen(false)
  }

  const handleDownload = () => {
    const a = document.createElement('a')
    a.href = resumePath
    a.download = resumeFileName
    a.click()
    setOpen(false)
  }

  return (
    <>
      {/* ── Top bar — mobile only ── */}
      <header className="md:hidden fixed top-0 left-0 right-0 z-50 h-14
                         flex items-center justify-between px-4
                         bg-light-surface dark:bg-dark-surface
                         border-b border-light-border dark:border-dark-border">
        {/* Hamburger — LEFT */}
        <button
          onClick={() => setOpen(v => !v)}
          aria-label="Menu"
          className="w-9 h-9 flex items-center justify-center rounded-lg
                     text-light-muted dark:text-dark-muted
                     hover:text-accent hover:bg-accent/10 transition-all"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Theme toggle — RIGHT */}
        <button
          onClick={toggle}
          aria-label="Toggle theme"
          className="w-9 h-9 flex items-center justify-center rounded-lg
                     text-light-muted dark:text-dark-muted
                     hover:text-accent hover:bg-accent/10 transition-all"
        >
          {dark ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </header>

      {/* ── Fullscreen overlay ── */}
      {open && (
        <div className="md:hidden fixed inset-0 z-40 pt-14
                        flex flex-col items-center justify-center gap-1
                        bg-light-surface dark:bg-dark-surface">
          {NAV.map(({ path, label, Icon }) => {
            const active = location.pathname === path
            return (
              <button
                key={path}
                onClick={() => handleNav(path)}
                className={`flex items-center gap-4 w-60 px-5 py-3 rounded-xl
                            font-display font-semibold text-xl transition-all border-none cursor-pointer
                            ${active
                              ? 'text-accent bg-accent/10'
                              : 'text-light-muted dark:text-dark-muted hover:text-accent hover:bg-accent/8'
                            }`}
              >
                <Icon size={20} strokeWidth={1.8} />
                {label}
              </button>
            )
          })}

          <button
            onClick={handleDownload}
            className="flex items-center gap-4 w-60 px-5 py-3 rounded-xl mt-4
                       font-ui font-semibold text-base text-accent
                       border border-accent hover:bg-accent/10 transition-all cursor-pointer"
          >
            <Download size={20} /> Download Resume
          </button>
        </div>
      )}
    </>
  )
}
