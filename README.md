R Sanjay — Portfolio (Vite + React + Tailwind starter)
-----------------------------------------------------

What's included:
- A minimal Vite + React project scaffold
- Tailwind CSS setup files (config and PostCSS)
- The updated `Portfolio` React component with your real details
- Resume.pdf included (from your uploaded resume)

How to run locally:
1. Install Node.js (v18+ recommended).
2. In the project folder run:
   npm install
   npm run dev
3. Open the shown local URL (usually http://localhost:5173)

How to deploy:
- Vercel: Push this repo to GitHub, then import the repo in Vercel and deploy (build command: `npm run build`, output directory: `dist`).
- Netlify: Connect Git repo and set build command `npm run build`, publish `dist`.
- GitHub Pages: Use a build-and-deploy workflow or use `gh-pages` package (not included).

Files of interest:
- src/components/Portfolio.jsx  -> main component (customize if needed)
- public/resume.pdf            -> your uploaded resume

