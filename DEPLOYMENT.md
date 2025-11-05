# Deploying PixKit Demo to GitHub Pages

This guide explains how to deploy the PixKit demo web application to GitHub Pages.

## Quick Deploy

From the root of the repository, run:

```bash
pnpm deploy:web
```

This command will:
1. Build the web application
2. Deploy it to GitHub Pages

## What It Does

The deployment script:
- Builds the web app with Vite (optimized production build)
- Deploys the `apps/web/dist` folder to the `gh-pages` branch
- Makes it available at: https://shayaqhmetov.github.io/pixkit/

## Manual Deployment

If you need to deploy manually:

```bash
# 1. Build the web app
cd apps/web
pnpm build

# 2. Deploy to GitHub Pages
pnpm deploy
```

## Configuration

### Vite Base Path
The base path is configured in `apps/web/vite.config.mts`:
```typescript
export default defineConfig({
  base: '/pixkit/',  // Must match your GitHub repo name
  plugins: [react()],
});
```

### Homepage URL
Set in `apps/web/package.json`:
```json
{
  "homepage": "https://shayaqhmetov.github.io/pixkit/"
}
```

## First-Time Setup

If this is your first deployment:

1. **Enable GitHub Pages in your repository settings**
   - Go to: https://github.com/shayaqhmetov/pixkit/settings/pages
   - Source: Deploy from a branch
   - Branch: `gh-pages` / `root`
   - Save

2. **Deploy**
   ```bash
   pnpm deploy:web
   ```

3. **Wait a few minutes** for GitHub to build and deploy

4. **Visit your site**
   https://shayaqhmetov.github.io/pixkit/

## Troubleshooting

### 404 on GitHub Pages
- Make sure the `base` path in `vite.config.mts` matches your repo name
- Check that GitHub Pages is enabled and set to deploy from `gh-pages` branch

### Assets not loading
- Verify the base path includes leading and trailing slashes: `/pixkit/`
- Check browser console for 404 errors

### Deployment fails
- Make sure you have push access to the repository
- Check that `gh-pages` package is installed: `pnpm install -w gh-pages`

## Automated Deployment

### GitHub Actions (Optional)

You can automate deployment with GitHub Actions. Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - uses: pnpm/action-setup@v2
        with:
          version: 10.14.0
      
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'pnpm'
      
      - name: Install dependencies
        run: pnpm install
      
      - name: Build packages
        run: pnpm build
      
      - name: Deploy to GitHub Pages
        run: pnpm deploy:web
        env:
          GITHUB_TOKEN: \${{ secrets.GITHUB_TOKEN }}
```

## Available Scripts

### Root level:
- `pnpm deploy:web` - Build and deploy the web app

### In apps/web:
- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build locally
- `pnpm deploy` - Deploy dist folder to GitHub Pages

## After Deployment

Your demo will be live at:
**https://shayaqhmetov.github.io/pixkit/**

Update your README and documentation with this link so users can see your components in action!
