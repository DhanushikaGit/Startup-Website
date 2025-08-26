# Startup Website (React + Tailwind)

Single‑page website built with React + Tailwind CSS for the technical task.

## ✨ Features
- Header with logo + smooth‑scroll navigation (active link via IntersectionObserver)
- Hero with headline, subtext and CTAs
- About with intro and three values
- Services rendered from a JSON array
- Portfolio grid rendered from a JSON array
- Contact form with client‑side validation
- Footer with copyright + socials
- Mobile‑first, semantic HTML, basic a11y (skip link, focus states, alt text), minimal state
- ESLint + Prettier configured
- Vite for dev/build

## 🧰 Tech
React 18, Vite 5, Tailwind 3, ESLint 9, Prettier 3

## 🚀 Getting started
```bash
# 1) Install dependencies
npm install

# 2) Run dev server
npm run dev

# 3) Build for production
npm run build
npm run preview
```

## 📁 Folder structure
```
startup-website/
├─ public/                 # (optional)
├─ src/
│  ├─ components/          # UI sections
│  ├─ data/                # services/projects arrays
│  ├─ hooks/               # useActiveSection for navbar highlighting
│  ├─ App.jsx
│  ├─ main.jsx
│  └─ index.css            # Tailwind directives + focus styles
├─ index.html
├─ tailwind.config.js
├─ postcss.config.js
├─ vite.config.js
├─ .eslintrc.cjs
├─ .prettierrc
└─ package.json
```

## 🧪 Accessibility notes
- Skip link to main content
- Descriptive section headings + aria‑labels
- Keyboard focus outline via `:focus-visible`
- Color contrast relies on Tailwind defaults

## 🌐 Deploy
### Vercel (recommended)
1. Push this project to a GitHub repo.
2. Go to **vercel.com → New Project → Import GitHub Repo**.
3. Framework preset: **Vite** (or “Other”), Build Command: `npm run build`, Output: `dist/`.
4. Deploy.

### Netlify
1. New site from Git → Connect repo.
2. Build: `npm run build`, Publish directory: `dist/`.

### GitHub Pages
1. Add `gh-pages`: `npm i -D gh-pages`
2. Add scripts to `package.json`:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
3. `npm run deploy` then enable Pages.

## 📝 Decisions
- Minimal dependencies (no heavy UI libs).
- Emojis used as lightweight icons to avoid extra packages.
- IntersectionObserver for active nav state (no router needed).

## ✅ Checklist vs. Requirements
- [x] Mobile‑first responsive layout
- [x] Clean, modular components
- [x] Basic accessibility
- [x] Smooth scrolling + active nav
- [x] Minimal React state
- [x] ESLint + Prettier configured
- [x] Sections: Header, Hero, About, Services, Work, Contact, Footer

---

**Note:** If you add external icon libs (e.g., `lucide-react`), run `npm i lucide-react` and import correctly.
