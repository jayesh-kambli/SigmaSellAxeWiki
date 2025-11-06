# SigmaSellAxe Wiki

Complete documentation for SigmaSellAxe - Advanced Container Selling Tool for Minecraft servers.

This is a **static HTML-based** documentation site hosted on Cloudflare Pages.

## Repository

**Repository**: [SigmaSellAxeWiki](https://github.com/jayesh-kambli/SigmaSellAxeWiki)

## Cloudflare Pages Setup

### Build Settings

When connecting this repository to Cloudflare Pages, use these settings:

- **Framework preset**: `None` or `Static HTML`
- **Build command**: `(leave empty)` or `echo "No build needed"`
- **Build output directory**: `/` (root)
- **Root directory**: `/` (default)

### Auto-Deploy

Once connected:
- Every push to `main` branch = automatic deployment
- No manual commands needed
- Build time: ~1-2 minutes

### Live Site

Your wiki will be available at:
```
https://sigmasellaxe-wiki.pages.dev
```
(or your custom domain if configured)

## Structure

This is a **static HTML site** (no build process needed):

- `index.html` - Home page
- `getting-started.html` - Installation guide
- `configuration.html` - Configuration reference
- `commands.html` - Command reference
- `permissions.html` - Permission reference
- `features.html` - Feature overview
- `integrations.html` - Plugin integrations
- `api.html` - Developer API
- `troubleshooting.html` - Troubleshooting guide
- `changelog.html` - Version history
- `assets/css/style.css` - Stylesheet

## Features

- ✅ Pure HTML/CSS (no build process needed)
- ✅ Fast loading with Cloudflare CDN
- ✅ Works directly with Cloudflare Pages
- ✅ Mobile responsive
- ✅ Clean, modern design
- ✅ Auto-deploy on Git push

## Updating Documentation

1. Edit HTML files locally
2. Commit and push:
   ```bash
   git add .
   git commit -m "Update documentation"
   git push
   ```
3. Cloudflare Pages will automatically deploy (takes 1-2 minutes)

## Local Preview

Simply open `index.html` in your web browser - no server needed!

Or use a local server:
```bash
# Python 3
python -m http.server 8000

# Node.js (with http-server)
npx http-server

# Then open http://localhost:8000
```

## Manual Deploy (Alternative)

If you need to manually deploy:

```bash
# Install Wrangler CLI
npm install -g wrangler

# Login to Cloudflare
wrangler login

# Deploy
wrangler pages deploy . --project-name=sigmasellaxe-wiki
```

## Custom Domain

To use a custom domain:

1. Go to Cloudflare Pages → Your Project → Custom domains
2. Add your domain
3. Follow DNS configuration instructions
4. Cloudflare will automatically provision SSL
