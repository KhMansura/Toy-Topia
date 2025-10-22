# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.



```md
# ToyTopia
A playful online marketplace for local toy sellers built with React, Firebase, and Tailwind.


## How to run
1. `npm install`
2. Add your Firebase keys to `.env`
3. `npm run dev`


## Features
- Email/Password + Google authentication
- Protected routes
- Responsive UI with Tailwind + DaisyUI
- Swiper slider on homepage
```


---


## 14) Step-by-step development checklist (what to do now)
1. `git init` and make at least 10 meaningful commits while you implement each feature (e.g., "init project", "add tailwind", "implement auth provider", "create navbar/footer", "home slider and popular cards", "toy details + private route", "login/register pages", "profile edit", "deploy to Netlify").
2. Upload images to imgbb/postimages and replace `pictureURL` values in `public/toys.json`.
3. Create Firebase project and enable Email/Password and Google sign-in; add your domain to authorized domains.
4. Add `.env` with VITE_... keys and run `npm run dev`.
5. Ensure reload on routes doesn't give 404 for deployed site — configure redirect rules on Netlify or Firebase Hosting.


---


## 15) Grading tips & common gotchas
- Make sure Navbar + Footer are in `App` (outside `<Routes>`) so they appear on all pages.
- Use `onAuthStateChanged` in provider to persist user on reload.
- Protect `/toy/:id` route with `PrivateRoute` and redirect to `/login` while preserving `state.from`.
- Use HTTPS images; mixed content causes broken thumbnails.
- Add dynamic page `document.title` changes if desired by using `useEffect` in each page.


---


## Need me to do one of these for you?
- Replace the `pictureURL` placeholders with real imgbb links if you paste your imgbb URLs here.
- Create the GitHub repo structure and provide a zipped project (I can't upload but I can generate every file content here).


---


Good luck — open the files above, paste them into your project, and run `npm install` then `npm run dev`. If you want, tell me which file you'd like me to expand or if you want a ready-made `git commit` plan with exact commit messages and timestamps.
