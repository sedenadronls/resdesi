# Desi Dragon — Website (React + TypeScript + Three.js)

A premium, animated restaurant website for **Desi Dragon** (Desi Taste, Chinese Flame),
built with React, TypeScript, Vite, and a real WebGL 3D dragon (via Three.js / React Three Fiber).

## Theme: Imperial Jade & Crimson

Carved-jade green, lacquer red, and muted gold-leaf accents on a near-black backdrop —
chosen because jade is the literal material of temple dragons and palace carvings,
rather than a generic "luxury black & gold" template.

## Run it locally

```bash
npm install
npm run dev
```

Then open the printed local URL (usually `http://localhost:5173`).

To build a production bundle:

```bash
npm run build
npm run preview   # serve the built /dist folder locally
```

## Project structure

```
src/
├── App.tsx                  Assembles the whole page
├── index.css                Design tokens (colors, type) + global resets
├── assets/                  Your uploaded photos & logos
├── data/menu.ts              Typed menu data — EDIT HERE to change prices/items
├── three/
│   ├── JadeDragon.tsx        Real WebGL 3D coiled dragon (hero background)
│   └── EmberField.tsx        Ambient ember particles (rest of the site)
├── components/               One component + one CSS file per section
├── hooks/useScrollReveal.ts  Scroll-triggered fade-in animation hook
└── types/menu.types.ts       Shared TypeScript interfaces
```

## Things you must replace before going live

Search for these placeholders and swap in your real values:

| File | Placeholder | What to change |
|---|---|---|
| `src/components/ReserveOrder.tsx` | `SWIGGY_LINK`, `ZOMATO_LINK` (`"#"`) | Your real store URLs |
| `src/components/WhatsAppFloat.tsx` | `WHATSAPP_NUMBER` (`"910000000000"`) | Your real WhatsApp number |
| `src/components/Contact.tsx` | Address, phone, email, social `href="#"` | Real contact details & social links |
| `src/components/Contact.tsx` | Google Maps `src` URL | Your exact location query |

## Editing the menu

All menu items and prices live in `src/data/menu.ts` as a typed array — add, remove, or
reprice items there and the Menu section and tab filters update automatically.

## Notes on the 3D dragon

`src/three/JadeDragon.tsx` builds the dragon procedurally (a tapered tube along a coiled
spline, plus a separate head/horn/eye group) and lights it with real WebGL directional +
point lights — no external 3D model file required. If you later want a higher-fidelity
dragon, you can swap this component to load a `.glb` model via `@react-three/drei`'s
`useGLTF` hook (already installed as a dependency).
