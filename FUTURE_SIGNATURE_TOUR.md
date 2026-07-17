# Future Signature Tour — Rotterdam

## Concept (not available yet)

**Rotterdam Signature: Harbour, Kinderdijk and Dutch Icons**

Potential structure when launched:

1. Early collection near the cruise terminal
2. Compact Rotterdam harbour or architectural orientation
3. UNESCO Kinderdijk windmills with time to explore
4. Delft or The Hague highlight stop
5. Local food or tasting moment
6. Optional free time in Rotterdam centre
7. Cruise-aware timing with return buffer to Wilhelminakade

## Architecture readiness

The site data model already supports:

- `SupplierKind`: `exclusive` | `future` | `shore-excursions-group` | `affiliate`
- Signature Tour badge / `comingSoon` gate
- Direct product fields (without live checkout yet)
- Comparison against cruise-line style messaging (editorial only)

## Launch gate

Do **not** advertise this as available until:

- Product is bookable
- `comingSoon: false`
- Pricing / inclusions verified
- Direct checkout or partner URL live

Path: `/rotterdam-signature-experience/`
