# Mubeen Official Portfolio

Portfolio site for [mubeenofficial.com](https://mubeenofficial.com) — Muhammad Mubeen, Senior Flutter Developer.

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## GitHub Pages

This repo deploys to GitHub Pages via GitHub Actions. Custom domain: `mubeenofficial.com`.

### DNS (at your domain registrar)

Point `mubeenofficial.com` to GitHub Pages:

| Type | Host | Value |
|------|------|--------|
| A | @ | `185.199.108.153` |
| A | @ | `185.199.109.153` |
| A | @ | `185.199.110.153` |
| A | @ | `185.199.111.153` |
| CNAME | www | `<your-github-username>.github.io` |

After DNS propagates, enable **Custom domain** + **Enforce HTTPS** in the repo Settings → Pages.
