# Portfolio — React + Tailwind + React Router + Lucide

## ⚡ Quick Start
```bash
npm install
npm run dev
```

## 📁 Structure
```
src/
├── context/
│   └── ThemeContext.jsx     ← Dark / light theme state
├── components/
│   ├── Sidebar.jsx          ← Desktop/tablet collapsible nav (lucide icons)
│   ├── MobileNav.jsx        ← Mobile: hamburger left, theme right
│   ├── SectionHeader.jsx    ← Reusable eyebrow + heading
│   └── ScrollTop.jsx        ← Back-to-top button
├── hooks/
│   └── useTyper.js          ← Typing animation
├── sections/
│   ├── HeroSection.jsx
│   ├── AboutSection.jsx
│   ├── EducationSection.jsx
│   ├── SkillsSection.jsx
│   ├── ExperienceSection.jsx
│   ├── ProjectsSection.jsx
│   └── ContactSection.jsx
├── App.jsx                  ← Single page + scroll-spy URL sync
├── data.js                  ← ✏️  All content here
└── index.css
```

## ✏️ Customise
Edit `src/data.js` only.
Place resume at `public/resume.pdf`.

## 🔀 How Routing Works
All sections live on one scrollable page. React Router URL stays in sync:
- **Scrolling** → IntersectionObserver detects active section → `navigate(path, { replace: true })`
- **Clicking nav** → `navigate(path)` + `scrollIntoView({ behavior: 'smooth' })`
- **Direct URL visit** → App scrolls to matching section on mount
