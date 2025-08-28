# Startup Website (React + Tailwind)



## 🧰 Tech
React 18, Vite 5, Tailwind 3, ESLint 9, Prettier 3

## 🚀 Getting started
```bash
# 1) Install dependencies
npm install --legacy-peer-deps

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







## 📝 Decisions
- Used modular components for clarity & reusability.
- Services & portfolio content stored in JSON for easy updates.
- Minimal React state; only hooks where needed.
- Tailwind chosen for mobile-first responsive design.
- Accessibility: semantic tags, alt text, focus states included.





