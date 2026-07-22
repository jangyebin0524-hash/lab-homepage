# Lab Homepage Skeleton

This project is a lab homepage skeleton built with Vite, React, TypeScript, Tailwind CSS, shadcn/ui, and lucide-react.

## Current Status

This project is currently in the pre-data-entry stage and uses a tab-based section layout.
The horizontal section tabs show one section at a time and keep the current URL hash in sync.
All lab information, member profiles, publications, projects, news, contact details, and resources are empty.

## Run Locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Preview Build

```bash
npm run preview
```

## GitHub Pages Deployment

This project is configured to deploy the Vite build output from the dist folder to GitHub Pages using GitHub Actions.

If the repository name changes, update the base path in vite.config.ts.

## Implementation Specification

See [IMPLEMENTATION_SPEC.md](./IMPLEMENTATION_SPEC.md) for the complete
reproduction specification covering layout, section structure, visual design,
animation behavior, empty-data rules, responsiveness, and deployment.
