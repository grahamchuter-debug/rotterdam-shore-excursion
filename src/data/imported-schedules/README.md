# Imported schedules

## Rotterdam (`rotterdam.json`)

- **Source:** [Cruise Port Rotterdam – Cruise Calls](https://www.cruiseportrotterdam.nl/cruise-calls/)
- **Scraped:** 2026-07-17
- **Coverage:** Upcoming published calls from the public listing (5 pages). No 2027 calls were listed at scrape time.
- **Disclaimer:** All arrival and departure times are subject to change and sailing-schedule adjustments (per cruiseportrotterdam.nl). Verify against the official source before relying on times for planning.
- **Terminal:** Cruise Terminal Rotterdam, Wilhelminakade 699, Rotterdam.
- **Notes:** Maiden-call markers were moved from ship names into `notes`. Cruise lines were inferred from known fleets where the source did not list them. Overnight stays (departure clock time earlier than or equal to arrival) are noted and reflected in `timeInPort`.
