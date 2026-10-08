# Academy Press — React rebuild

A personal frontend practice project by Joel Soyemi, rebuilding an Academy Press printing-services design with React. This is a portfolio demonstration, not a claim of employment or an official company website.

**Preview:** https://acad-press-pratice.vercel.app

## Stack
React, Vite, Tailwind CSS, React Router, Framer Motion and Lucide icons.

## Features
- Eight pages: Home, About, Services, FAQs, Contact, Quote, Clients and Newsletter; plus a not-found route.
- Shared layout and reusable components with responsive mobile navigation.
- Animated page transitions, interactive FAQs and scroll effects.
- Formspree integration for contact enquiries, quote requests and newsletter signups, with sending/success/error states.

## Run locally
```sh
npm ci
npm run dev
```

## Checks
```sh
npm run lint
npm run build
npm run preview
```

## Preview access
The current preview code is `acadpress` (lowercase). The browser-side gate is only a demo barrier, not secure authentication; do not place confidential information behind it.

## Form setup
Contact, Quote and Newsletter currently share the existing Formspree endpoint. Confirm inbox ownership and delivery before real use. Newsletter submissions collect enquiries; this does not implement a mailing-list or unsubscribe service.

## Deployment
Vercel is configured to rewrite application routes to index.html for React Router. The GitHub-connected deployment can rebuild when main is updated.
