# Rotterdam Shore Excursion — Workers readiness

| Field | Value |
|-------|-------|
| Worker name | `rotterdam-shore-excursion` |
| Platform | Cloudflare Workers Static Assets V1.0 |
| Output directory | `./out` |
| `workers_dev` | `true` (preview only until approval) |
| Custom domains | **Not attached** — awaiting deployment approval |
| Canonical | `https://rotterdamshoreexcursion.com` |
| www behaviour | `www.rotterdamshoreexcursion.com` → 301 → apex (Redirect Rule; not a second Worker origin) |

## Pre-deploy checklist

1. Complete build + QA report approved
2. Confirm Cloudflare zone for `rotterdamshoreexcursion.com` is Active
3. Confirm Worker name is unused
4. Attach apex Custom Domain only after explicit approval
5. Configure www → apex Redirect Rule
6. Do **not** use Cloudflare Pages for this site

## Commands (after approval)

```bash
npm run build
npx wrangler deploy
```

Do not run deploy until the completion report is approved.
