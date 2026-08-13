# Nexusinn production checklist

## Required runtime

- Node.js 20.9 or newer.
- Install dependencies from the pinned versions in `package.json`.
- Run `npm run check` before release. It executes ESLint, TypeScript type checking, and the production Next.js build.

## Required environment variables

Copy `.env.example` into the deployment environment and configure:

- `NEXT_PUBLIC_SITE_URL` — the final public HTTPS origin. This drives canonical URLs, sitemap generation, metadata, and same-origin contact validation.
- `CONTACT_WEBHOOK_URL` — server-only destination for enterprise enquiries.
- `CONTACT_WEBHOOK_SECRET` — optional bearer secret used to authenticate Nexusinn with the contact webhook.

Never expose webhook credentials through `NEXT_PUBLIC_*` variables.

## Cloudflare Workers

The repository includes `open-next.config.ts` and `wrangler.jsonc` for the OpenNext Cloudflare adapter.

Local production preview:

```bash
npm install
npm run preview:cloudflare
```

Production deployment:

```bash
npm run check
npm run deploy:cloudflare
```

Configure production environment variables/secrets in Cloudflare rather than committing them to GitHub.

## Before DNS cutover

1. Confirm `NEXT_PUBLIC_SITE_URL` is the final HTTPS domain.
2. Confirm `/robots.txt`, `/sitemap.xml`, and `/llms.txt` resolve correctly.
3. Submit a test enquiry and confirm the downstream webhook receives it.
4. Check desktop and mobile navigation using keyboard, touch, and screen-reader landmarks.
5. Verify every service and corporate route returns 200 and all CTA destinations are valid.
6. Confirm no placeholder phone numbers, locations, customer claims, certifications, or credentials have been introduced.
7. Review page titles/descriptions and social previews on the final domain.
8. Run `npm run check` from a clean install before merging the release branch.

## Security notes

- Global response headers disable framing, MIME sniffing, unnecessary browser capabilities, and the default Next.js powered-by header.
- The contact API accepts JSON only, limits request size, validates same-origin browser submissions when the production site URL is configured, applies a honeypot check, validates fields server-side, and supports authenticated webhook delivery.
- Production rate limiting/WAF rules should be enabled at the Cloudflare edge for `/api/contact` before significant public traffic.

## Remaining business inputs

The build intentionally does not invent Nexusinn contact details, office addresses, certifications, customer logos, case-study outcomes, years of experience, or client counts. Add only verified company information before launch.
