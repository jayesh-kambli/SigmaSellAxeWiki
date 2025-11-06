# Cloudflare Pages Setup Guide

## Quick Setup Steps

### 1. Connect Repository

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Navigate to **Pages** → **Create a project**
3. Select **Connect to Git**
4. Choose **GitHub** and authorize Cloudflare
5. Select repository: `jayesh-kambli/SigmaSellAxeWiki`
6. Click **Begin setup**

### 2. Configure Build Settings

Use these exact settings:

```
Project name: sigmasellaxe-wiki
Production branch: main
Framework preset: None (or Static HTML)
Build command: (leave empty)
Build output directory: /
Root directory: / (default)
```

### 3. Deploy

1. Click **Save and Deploy**
2. Wait 1-2 minutes for deployment
3. Your site will be live at: `https://sigmasellaxe-wiki.pages.dev`

## Build Commands

### Build Command
```
(empty - leave blank)
```

Since this is a static HTML site, no build process is needed.

### Alternative Build Command (if required)
```
echo "No build needed for static HTML"
```

### Build Output Directory
```
/
```

## Deploy Commands

### Automatic Deploy (Recommended)
- **No commands needed!**
- Just push to GitHub:
  ```bash
  git push
  ```
- Cloudflare Pages automatically deploys on every push to `main` branch

### Manual Deploy (Using Wrangler CLI)

If you need to manually deploy:

```bash
# Install Wrangler
npm install -g wrangler

# Login to Cloudflare
wrangler login

# Deploy from current directory
wrangler pages deploy . --project-name=sigmasellaxe-wiki

# Or deploy specific directory
wrangler pages deploy wiki/ --project-name=sigmasellaxe-wiki
```

## Environment Variables

No environment variables needed for static HTML site.

## Custom Domain Setup

1. Go to Cloudflare Pages → Your Project → **Custom domains**
2. Click **Set up a custom domain**
3. Enter your domain (e.g., `wiki.yourdomain.com`)
4. Follow DNS configuration instructions
5. Cloudflare will automatically provision SSL certificate

## Troubleshooting

### Build Fails

- Check that build command is empty
- Verify build output directory is `/`
- Ensure all HTML files are in the root directory

### 404 Errors

- Verify `index.html` exists in root directory
- Check that file paths are relative (not absolute)
- Ensure `.nojekyll` file exists (tells Cloudflare to serve static files)

### Changes Not Appearing

- Wait 1-2 minutes for deployment to complete
- Check deployment status in Cloudflare Dashboard
- Hard refresh browser (Ctrl+F5)

## File Structure

```
SigmaSellAxeWiki/
├── index.html
├── getting-started.html
├── configuration.html
├── commands.html
├── permissions.html
├── features.html
├── integrations.html
├── api.html
├── troubleshooting.html
├── changelog.html
├── assets/
│   └── css/
│       └── style.css
├── .nojekyll
└── README.md
```

## Support

For Cloudflare Pages issues:
- [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages/)
- [Cloudflare Community](https://community.cloudflare.com/)

