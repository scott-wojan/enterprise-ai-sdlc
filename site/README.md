# Guide site

This is the human-facing Next.js site for the Enterprise AI SDLC Pilot Playbook. It reads the canonical guidance from `docs/guide` at build time and exports a static site for GitHub Pages.

## Local development

```sh
cd site
npm ci
npm run dev
```

## Production build

```sh
PAGES_BASE_PATH=/enterprise-ai-sdlc npm run build
```

The static export is written to `site/out`. The GitHub Actions workflow builds and deploys it; generated output is not committed.

## Deployment

The production site is published from `main` to:

https://scott-wojan.github.io/enterprise-ai-sdlc/
