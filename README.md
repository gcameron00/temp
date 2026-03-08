⚠️ Archived — This repository has been archived and is now read-only.

# My Site

A minimal, modern static website built with plain HTML, CSS, and JavaScript — no frameworks, no build step. Designed to be deployed directly to [Cloudflare Pages](https://pages.cloudflare.com).

## Structure

```
├── index.html        # Main page
├── css/
│   └── style.css     # All styles (dark theme, responsive)
└── js/
    └── main.js       # Nav toggle, form validation, utilities
```

## Features

- Sticky glass-effect navbar with mobile hamburger menu
- Hero, Features, About, and Contact sections
- Responsive grid layout (CSS Grid + `auto-fit`)
- Dark theme via CSS custom properties
- Client-side contact form validation
- Animated CSS blob shape
- No dependencies, no build tooling

## Deploy to Cloudflare Pages

1. Push this repo to GitHub
2. In Cloudflare Pages, click **Create a project** and connect your repo
3. Set the build command to _(none)_ and the output directory to `/`
4. Deploy

## Contact Form

The form currently simulates a submission. To make it functional, replace the `setTimeout` mock in `js/main.js` with a real endpoint. [Web3Forms](https://web3forms.com) is a free option that works well with static sites.

## Customisation

All colours and spacing are defined as CSS custom properties at the top of `css/style.css` under `:root` — change them there to retheme the whole site.