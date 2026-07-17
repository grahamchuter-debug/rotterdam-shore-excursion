# Rotterdam Shore Excursion

World 2.0 editorial cruise planning site for rotterdamshoreexcursion.com.

## Positioning

Find the best version of your day in Rotterdam.

Experience pillars: Rotterdam city and harbour, Kinderdijk windmills, Delft / The Hague / Gouda day trips, food and local culture, private touring.

## Platform

- Next.js static export (`output: "export"`, `trailingSlash: true`)
- Cloudflare **Workers Static Assets** (not Pages)
- Worker name: `rotterdam-shore-excursion`
- Canonical: `https://rotterdamshoreexcursion.com`
- Do not attach custom domains without explicit approval

## Destination identity

- Config: `src/data/destination-identity.ts`
- Component: `src/components/DestinationLogo.tsx`
- Brand: Rotterdam Shore Excursion (singular formal brand; plural phrases OK in prose)

## Key paths

- Homepage: `src/app/page.tsx`
- Excursions: `/shore-excursions/`
- Cruise schedule: `/rotterdam-cruise-schedule/`
- Port guide: `/rotterdam-cruise-port-guide/`
- Data: `src/data/`
- Workers docs: `docs/CLOUDFLARE-WORKERS-DEPLOYMENT.md`

## Commercial rules

- Do not invent products, prices, ratings or return guarantees
- Affiliate CTAs use `rel="sponsored"` and partner disclosure
- Signature Tour architecture may exist as `comingSoon` only until live
- Do not deploy or attach the production domain until audited and approved

## Regenerate

```bash
npm run download:images
npm run build
```
