# FesCode Limited — Company Website

Official website of **FesCode Limited**, a CAC-registered technology company based in FCT, Abuja, Nigeria.
We build software, AI and data products, run hands-on tech training, and host SIWES students.

**Live site:** https://fescode.vercel.app <!-- update after deploy / custom domain -->

## Pages
| Page | File |
|------|------|
| Home | `index.html` |
| About | `about.html` |
| Services (incl. training & SIWES) | `services.html` |
| Projects | `projects.html` |
| Contact (form + FAQ) | `contact.html` |

## Tech
- HTML5, CSS3 (custom properties, Grid, Flexbox), vanilla JavaScript
- No frameworks, no build step
- Fonts: Space Grotesk, Inter, JetBrains Mono (Google Fonts)
- Fully responsive (desktop, tablet, mobile)

## Structure
```
├── index.html, about.html, services.html, projects.html, contact.html
├── css/styles.css     # all styles, design tokens at the top
├── js/main.js         # mobile menu, scroll reveal, counters, filters, form validation
├── assets/favicon.svg
└── vercel.json        # clean URLs (/about instead of /about.html)
```

## Run locally
Open `index.html` in a browser, or serve the folder:
```bash
npx serve .
```

## Deploy
Hosted on Vercel. Every push to `main` deploys automatically.

---
© FesCode Limited. All rights reserved.
