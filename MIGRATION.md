# Base44 removal — Tiffany's Closet

This site was migrated off the Base44 platform so it can deploy as a plain static Vite/React site on Cloudflare Pages.

## What changed

- Removed `@base44/sdk` and `@base44/vite-plugin` from `package.json` and `vite.config.js`. Added a plain `@` → `src` path alias in `vite.config.js` (the base44 plugin used to provide this).
- Deleted the Base44 auth wrapper and all five auth pages, since they only gated access via Base44's login system: `src/api/base44Client.js`, `src/lib/app-params.js`, `src/lib/AuthContext.jsx`, `src/lib/authReturnTo.js`, `src/components/AuthLayout.jsx`, `src/components/GoogleIcon.jsx`, `src/components/ProtectedRoute.jsx`, `src/components/UserNotRegisteredError.jsx`, `src/pages/Login.jsx`, `src/pages/Register.jsx`, `src/pages/ForgotPassword.jsx`, `src/pages/ResetPassword.jsx`, `src/pages/OAuthConsent.jsx`. Removed the `AuthProvider`/loading/error branching from `App.jsx` — it now renders routes directly.
- Rewrote `src/lib/PageNotFound.jsx` to drop the Base44 `auth.me()` admin-note lookup.
- **Product & Testimonial data**: these were fetched live from Base44's `Product` and `Testimonial` entities, and the export contained only the entity schemas — no actual product/testimonial records. I built `src/data/products.js` and `src/data/testimonials.js` as static replacements with the same `filter`/`list`/`get` call shape the Base44 SDK used, so `CurrentlyInStore.jsx`, `FeaturedLook.jsx`, `NewArrivals.jsx`, `Shop.jsx`, `ProductDetail.jsx`, and `Testimonials.jsx` only needed their import swapped — no other logic changed.
- Removed the `base44/` entity-schema folder and `.env.local` (`VITE_BASE44_APP_ID`) — no longer needed.
- `index.html`: removed the Base44 favicon link and the `/manifest.json` reference (no manifest file exists in this export).
- Regenerated `package-lock.json` from scratch against the trimmed `package.json`.

## ⚠️ Placeholder product data — read before launch

`src/data/products.js` has 6 placeholder products (one per category), and `src/data/testimonials.js` has 3 placeholder testimonials. Names, descriptions and testimonial quotes are invented; every product **price is set to 0 on purpose** so it can't be mistaken for a real number. Open those two files and replace the placeholders with your real catalogue and real customer quotes before launch.

## Still pointing at Base44's image CDN

Product/category/hero images in `src/lib/site.js` (`IMAGES`) still point at `media.base44.com` — this migration didn't touch image hosting. The site will keep working as long as that CDN stays up; if you want full independence from Base44, re-host these images yourself and update `src/lib/site.js`. The image-optimization helpers in `src/components/ui/image.jsx` / `image-helpers.js` still special-case `media.base44.com` and `static.wixstatic.com` URLs for resizing — that's harmless (no SDK dependency, just URL string matching) and falls back to a plain `<img>` for any other host.

## Verified

- `npm install` regenerates a clean lock file with no Base44 packages.
- `npm run build` succeeds with no errors.
- Whole-tree import scan from `src/main.jsx`: 39 reachable files, all resolve.

## Deploy to Cloudflare Pages

| Setting | Value |
|---|---|
| Framework preset | Vite |
| Build command | `npm run build` |
| Output directory | `dist` |
| Root directory | `/` |

No environment variables needed.
