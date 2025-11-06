# SigmaSellAxe Wiki

This is the GitHub Pages wiki repository for SigmaSellAxe.

## Repository Setup

This repository should be public and named `SigmaSellAxe.wiki` or `SigmaSellAxe-wiki`.

## GitHub Pages Setup

1. Go to repository **Settings** → **Pages**
2. Under **Source**, select:
   - **Branch**: `main` (or `master`)
   - **Folder**: `/` (root)
3. Click **Save**

Your wiki will be available at:
```
https://[username].github.io/SigmaSellAxe-wiki/
```

Or if named `SigmaSellAxe.wiki`:
```
https://[username].github.io/SigmaSellAxe.wiki/
```

## Structure

- `index.md` - Home page
- `getting-started.md` - Installation guide
- `configuration.md` - Configuration reference
- `commands.md` - Command reference
- `permissions.md` - Permission reference
- `features.md` - Feature overview
- `integrations.md` - Plugin integrations
- `api.md` - Developer API
- `troubleshooting.md` - Troubleshooting guide
- `changelog.md` - Version history
- `_config.yml` - Jekyll configuration

## Local Development

1. Install Jekyll:
   ```bash
   gem install bundler jekyll
   ```

2. Install dependencies:
   ```bash
   bundle install
   ```

3. Run Jekyll:
   ```bash
   bundle exec jekyll serve
   ```

4. Open http://localhost:4000

## Updating Documentation

1. Edit markdown files
2. Commit and push:
   ```bash
   git add .
   git commit -m "Update documentation"
   git push
   ```
3. GitHub Pages will automatically rebuild
