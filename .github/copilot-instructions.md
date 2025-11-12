This repository is a React + Vite site (Vite overridden to `rolldown-vite`) using Tailwind CSS, Framer Motion, and a component-driven Pages structure.

Quick facts

- Dev server: `npm run dev` (Vite, port 3000, host: true in `vite.config.js`).
- Build: `npm run build`; Preview: `npm run preview`.
- Lint: `npm run lint` (ESLint config in root).
- Key dependencies: `react@19`, `react-router-dom`, `framer-motion`, `three`, `lucide-react`, `tailwindcss`.

Big-picture architecture (what to know)

- Entry: `src/main.jsx` mounts `App` -> `src/App.jsx` contains the router and global modal hooks.
- Routes: All routes are declared in `App.jsx` inside `AnimatedRoutes`. To add a page:
  1. Create `src/Pages/MyNewPage.jsx`.
  2. Import it at the top of `App.jsx`.
  3. Add a `<Route path="/my-new" element={wrapWithMotion(<MyNewPage/>)} />` to `AnimatedRoutes`.
- Navigation & menus: `src/Components/Navigation.jsx` builds the mega-menu and mobile menu from three helper functions (`getProductsContent`, `getServicesContent`, `getCompanyContent`). Update those functions to add/remove menu entries (they include `title`, `subtitle`, `href`, `icon`, `group`).
- Theme: `src/hooks/useTheme.js` syncs a `data-theme` attribute on the root and uses localStorage. Default is `'cupcake'` (light) and toggles to `'night'`. Many styles rely on CSS variables and these theme names.
- Global modals: `App.jsx` exposes `window.openLoginModal()` and `window.openDemoModal()`   other components rely on calling these globals to open modals.
- Assets: static assets referenced with absolute paths (e.g. `/rudratic new logo.png`, `/products-video.mp4`) live under `public/`.

Project-specific patterns and conventions

- Pages folder: `src/Pages/` holds route pages and `src/Pages/Services/` contains service-specific pages.
- Animated route wrapper: Routes are wrapped with Framer Motion `motion.div` via `wrapWithMotion` in `App.jsx`   follow this when creating pages for consistent transitions.
- Menu data-driven approach: Navigation uses JS arrays to build menus and grouping. Prefer updating the arrays over hardcoded JSX when adding items.
- Single source for route additions: Routes are not auto-discovered   add imports and routes manually in `App.jsx` (there are commented markers `// ✅ ADD IMPORTS FOR NEW PAGES` and `// ✅ ADD NEW ROUTES HERE`).
- Styling: Tailwind config in `tailwind.config.js` defines custom animations. The project uses DaisyUI-like theme names (`cupcake`, `night`) though `daisyui` plugin is not added in `tailwind.config.js`; styles may come from `britive-theme.css` and `index.css`   check these when changing theme tokens.
- Vite config: `vite.config.js` applies `babel-plugin-react-compiler` for React compiler transforms; keep the plugin configuration when adding Babel transforms.

Integration points and gotchas

- Vite override: package.json uses an override to `rolldown-vite`. If troubleshooting dev-server behavior, check `package.json` `overrides` and `vite.config.js`.
- React Compiler: the project enables `babel-plugin-react-compiler` in Vite. Be careful adding other Babel plugins that conflict.
- Global functions: `window.openLoginModal` and `window.openDemoModal` are set in `App.jsx`. If tests or components assume modal state via context, update these globals accordingly.
- Icon library: `lucide-react` icons are imported and used directly inside menu data structures   prefer using the same pattern.

Examples (copy-paste friendly)

- Add a route (in `src/App.jsx`):

  - import MyPage: `import MyPage from './Pages/MyPage.jsx'`
  - add to `AnimatedRoutes`:
    `<Route path="/my-page" element={wrapWithMotion(<MyPage />)} />`

- Add a product entry (in `src/Components/Navigation.jsx`'s `getProductsContent`):
  - { title: "MyProduct", subtitle: "One-liner", color: "hsl(var(--p))", href: "/products/myproduct", icon: LayoutGrid, group: "Platforms & Analytics" }

What to run locally (Windows cmd)

- npm run dev
- npm run build
- npm run preview
- npm run lint

When updating UI or theme tokens

- Inspect `src/hooks/useTheme.js` and `index.css` / `britive-theme.css` for CSS variable names and theme mapping before changing theme names.

If you change routes or public asset paths

- Update both `App.jsx` (route) and `src/Components/Navigation.jsx` (menu arrays) to keep navigation and routing in sync.

Files to check first when debugging

- `src/App.jsx` (routing, global modals)
- `src/Components/Navigation.jsx` (menu structure and icons)
- `src/hooks/useTheme.js` (theme behavior)
- `vite.config.js` (dev server, plugins)
- `package.json` (scripts & overrides)

If anything in this file is unclear or you want more examples (e.g., tests, storybook, or adding new build plugins), tell me what area to expand and I'll iterate.
