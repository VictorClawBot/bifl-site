# BIFL Site Architecture

## Tech Stack
- **Framework:** Next.js 14 (App Router) with TypeScript
- **Styling:** TailwindCSS (v4) + custom components
- **Data:** Static TypeScript modules in `src/data/` for categories & products
- **Components:** `CategoryCard`, `ProductCard`, plus future newsletter form
- **Hosting Target:** Vercel (pending import)

## Data Model
- `Category` – slug, title, manifesto, icon, order
- `Product` – slug, name, brand, summary, category, durability, repairability, origin, ownership, founded, warranty, priceBand, affiliate URL, videoStatus, highlights

## Layout Overview
1. **Hero block** – mission statement + CTA + submission link
2. **Categories grid** – manifesto blurbs pulled from `src/data/categories.ts`
3. **Featured products** – first four items from `src/data/products.ts`, each card includes origin/ownership/durability tags and affiliate link placeholder
4. **Newsletter teaser** – Buttondown CTA placeholder (disabled until API endpoint is wired)

## Next Steps
1. Finish Zoho email setup → create `victor@buyitforlife.today`
2. Import repo into Vercel for live preview & iterate on styling
3. Hook newsletter form to Buttondown API via Next.js Route Handler
4. Swap placeholder affiliate URLs with SiteStripe links (using ID `buyitforlife-20`)
5. Add analytics + `/go/{slug}` redirect pattern for tracking clicks
