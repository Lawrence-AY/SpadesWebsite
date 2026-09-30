# Spades Atlas

A lightweight, responsive website for Spades Atlas Company Ltd. Built with browser-native JavaScript, HTML and CSS, with no runtime packages or bundler.

## Requirements

- Node.js 18 or newer
- npm

## Run locally

```sh
npm run dev
```

Open the URL printed by the server (normally `http://localhost:5173`).

## Build and preview

```sh
npm run build
npm run preview
```

The static website is copied into `dist/`. The preview server serves that built directory.

## Pages

- `/` — overview and capabilities
- `/services` — detailed service descriptions
- `/about` — company, mission and ethics
- `/contact` — project enquiry form

The enquiry form opens a prepared message in the visitor's default mail application; it does not submit to a hosted form backend.
