# Rotterdam Shore Excursion

Premium cruise-destination site for [rotterdamshoreexcursion.com](https://rotterdamshoreexcursion.com).

**Proposition:** Find the best version of your day in Rotterdam.

## Stack

- Next.js 16 (static export) + TypeScript + Tailwind 4
- Cloudflare Workers Static Assets (`wrangler deploy`)
- World 2.0 editorial patterns (Málaga cruise-positioning prototype)

## Commands

```bash
npm install
npm run download:images   # Wikimedia sources + optimize
npm run dev
npm run build
npm run check-links
npm run seo-qa
npm run deploy            # build + wrangler deploy (workers.dev first)
```

Do **not** use `pages:deploy`. Do **not** attach custom domains without approval.

## Worker

- Name: `rotterdam-shore-excursion`
- Assets: `./out`
- Canonical: `https://rotterdamshoreexcursion.com`
- www → apex via Cloudflare Redirect Rules after approval
