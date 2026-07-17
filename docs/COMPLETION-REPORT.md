# Rotterdam Shore Excursion — Completion Report

**Date:** 2026-07-17  
**Status:** Build complete — **not deployed**. Custom domains **not attached**. Awaiting approval.

---

## 1. Project

| Field | Value |
|-------|-------|
| Local folder | `/Users/graham.chuter/Desktop/rotterdam-shore-excursion` |
| Suggested GitHub repo | `rotterdam-shore-excursion` (not created / not pushed) |
| Branch | `main` (local git initialised; no remote push) |
| Commit status | Working tree has full site content — **no release commit requested** |
| Architecture | Next.js 16 static export → Cloudflare **Workers Static Assets** V1.0 |
| Reference | World 2.0 Gold editorial (Málaga patterns) + Workers deploy (Rhodes/Ravenna/Rijeka) |
| Worker name | `rotterdam-shore-excursion` |
| Canonical | `https://rotterdamshoreexcursion.com` |

---

## 2. Pages

| Category | Count / notes |
|----------|----------------|
| Static HTML pages (`out/**/index.html`) | **65** |
| Build routes (incl. sitemap/robots/not-found) | **~71** generated |
| Commercial | `/`, `/shore-excursions/`, 12 product pages |
| Cruise planning | Port, terminal, schedule, walking, city-centre, getting-around, embarkation |
| Destination guides | Kinderdijk, Delft, The Hague, Gouda, harbour cruise, food tour |
| Editorial / comparison | Best excursions, one-day, Rotterdam vs Kinderdijk, Kinderdijk vs Delft, Amsterdam advice, private tours, near-terminal |
| Schedule | Hub + `/ship-schedules/rotterdam/` + 2026 + 2027 + month segments |
| Supporting | About, FAQ, enquire, cruise planner, wow/signature (future), privacy/terms (noindex) |

Flat comparison routes own canonicals for the three “versus” topics; `/compare/[slug]` only generates the private-vs-group page to avoid duplicate titles.

---

## 3. Excursions

| Field | Value |
|-------|-------|
| Verified live SEG products | **12** (scraped 2026-07-17 from SEG Rotterdam collection) |
| City / harbour | Harbour sightseeing cruise; private at your pace; Delft + canal; Kinderdijk combinations |
| Food / culture | Bites & Sights (group + private); breweries + water taxi (group + private); Gouda |
| Active | Countryside e-bike |
| Regional / private full-day | Dutch Icons (Kinderdijk, Delft, The Hague); Kinderdijk variants; Gouda |
| Affiliate links | All 12 use clean SEG `/tour/{slug}/{productId}` URLs + `rel="sponsored"` CTAs |
| Prices / ratings | **Not invented** — no static prices or product ratings on site |
| Deferred / future | Signature Tour (Architecture, Harbour & Kinderdijk) — `comingSoon`, not bookable |
| Data uncertainties | Exact pier meeting points deferred to e-tickets; some tours require guest-paid taxi/water-taxi to start; Gouda experience entrance listed as **not included** (€16 per supplier) |

---

## 4. SEO

| Check | Result |
|-------|--------|
| Title audit | Pass (duplicate compare/flat titles resolved) |
| Description audit | Pass |
| Canonical audit | Apex `https://rotterdamshoreexcursion.com` via `SITE.url` |
| Sitemap | Generated; privacy/terms excluded |
| Robots | Allow `/` + sitemap |
| Schema | WebSite / Organization / Breadcrumb / FAQ / TravelGuide / Article where visible |
| Internal links | `check-links` **passed** (67 known routes) |
| Indexable pages | ~63 (excluding privacy/terms) |
| workers.dev / pages.dev in content | Not used as canonicals |

---

## 5. Performance

| Metric | Value |
|--------|-------|
| `out/` build size | **25 MB** |
| Primary JPG subjects | **20** |
| Optimised variants | **197** (AVIF / WebP / JPEG) |
| Largest out assets | JS chunk ~448 KB; hero/harbour JPG ~320 KB; hero AVIF/WebP ~192–256 KB |
| Lighthouse | **Not run in this session** — recommend local Lighthouse on `npx serve out` before go-live |
| Target | LCP ~1.5s, CLS ~0, Perf/A11y/BP 95+, SEO 100 |

---

## 6. Cruise schedule

| Field | Value |
|-------|-------|
| Source | [cruiseportrotterdam.nl/cruise-calls](https://www.cruiseportrotterdam.nl/cruise-calls/) |
| Entries | **67** |
| Range | 2026-07-22 → 2026-12-31 |
| 2027 | Not published on official site at scrape time (empty year route retained) |
| Disclaimer | Times subject to change; plan from all-aboard |

---

## 7. Workers readiness

| Field | Value |
|-------|-------|
| Worker name | `rotterdam-shore-excursion` |
| Output | `./out` |
| Wrangler | Validated with `wrangler deploy --dry-run` |
| `workers_dev` | `true` |
| Custom domains in wrangler | **Omitted** until approval |
| Planned domains | `rotterdamshoreexcursion.com` (apex Custom Domain); `www` → apex Redirect Rule |
| DNS | Domain registered; attach only after approval |
| Blockers | Explicit deployment approval required |

### Deploy commands (after approval only)

```bash
npm run build
npx wrangler deploy
# Then attach apex Custom Domain + www→apex Redirect Rule
```

Do **not** use Cloudflare Pages (`pages:deploy` exits 1).

---

## 8. Outstanding items

1. **Deployment approval** — do not deploy or attach domain until signed off  
2. **Affiliate tracking params** — clean SEG URLs live; partner share-link / tracking ID not confirmed (network standard disclosure in place)  
3. **2027 schedule** — refresh when Cruise Port Rotterdam publishes  
4. **Lighthouse Gold pass** — run on production-like static server before launch  
5. **GitHub remote** — create `rotterdam-shore-excursion` repo and initial commit when requested  
6. **Image review** — Commons CC images in place; some subjects (cycling, historic) are generic Dutch rather than Rotterdam-specific — replace with licensed destination photography if desired  
7. **Walking-time claims** — use cautious wording; re-verify against Cruise Port Rotterdam / RET before marketing pushes  
8. **Future pages deferred** — hotels, Schiphol/Centraal/airport transfers, luggage (no commercial products advertised)  
9. **Lint warnings** — 6 unused-var warnings in scripts/helpers (non-blocking)

---

## 9. Phase summary

| Phase | Status |
|-------|--------|
| 1 Research & architecture | Complete — 12 SEG products; Wilhelminakade facts; Málaga/Rhodes patterns |
| 2 Foundation | Complete — harbour/brick/sky/meadow identity; Workers wrangler |
| 3 Commercial pages | Complete — listing + 12 live product pages |
| 4 Cruise planning | Complete — guides + 67-call schedule |
| 5 SEO & trust | Complete — metadata, schema, disclosures, honest advice |
| 6 Images & performance | Complete — Commons pipeline + optimise |
| 7 QA | Complete — lint, tsc, build, links, seo-qa |
| 8 Deployment prep | Complete — report + wrangler dry-run; **no deploy** |

---

## 10. Approval gate

**Ready for review.**  
Please approve before:

1. Creating/pushing the GitHub repository  
2. `wrangler deploy` to workers.dev  
3. Attaching `rotterdamshoreexcursion.com` / www  
