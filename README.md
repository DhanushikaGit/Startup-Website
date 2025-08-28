# 🚀 Startup Website (React + Tailwind)

A single-page responsive startup website built with **React** and **Tailwind CSS**.  
This project was created as part of a technical assignment.

---

## 📌 Features
- **Header with logo + navigation** (smooth scroll + active state)
- **Hero section** with headline, subtext, and call-to-action
- **About section** with brief company intro & 3 key values
- **Services section** (cards populated from JSON array)
- **Portfolio/Work grid** (4–6 projects with title/tags/images)
- **Contact form** with basic client-side validation
- **Footer** with copyright & social placeholders
- Mobile-first responsive layout
- Semantic HTML + accessibility basics (alt text, focus states)

---

## 🛠️ Tech Stack
- **React 18**
- **Tailwind CSS**
- **ESLint + Prettier** for clean code

---

## 📂 Folder Structure
startup-website/
├── public/ # Static assets
├── src/
│ ├── components/ # Reusable UI components (Header, Hero, About, etc.)
│ ├── data/ # JSON arrays (services, portfolio items)
│ ├── App.jsx # Root component with routing/scroll
│ ├── index.css # Tailwind base styles
│ └── main.jsx # Entry point
├── .eslintrc.cjs # ESLint config
├── tailwind.config.js # Tailwind config
├── package.json
└── README.md

yaml
Copy code

---

## ⚡ Getting Started

### 1️⃣ Clone the repo
```bash
git clone https://github.com/YOUR-USERNAME/startup-website.git
cd startup-website
2️⃣ Install dependencies
bash
Copy code
npm install --legacy-peer-deps
3️⃣ Start development server
bash
Copy code
npm run dev
The site will be available at http://localhost:5173

4️⃣ Build for production
bash
Copy code
npm run build
🌍 Deployment
Deploy easily on Vercel, Netlify, or GitHub Pages.

Example (Vercel):

bash
Copy code
npm install -g vercel
vercel
📖 Decisions Made
Used modular components for clarity & reusability.

Services & portfolio content stored in JSON for easy updates.

Minimal React state; only hooks where needed.

Tailwind chosen for mobile-first responsive design.

Accessibility: semantic tags, alt text, focus states included.