# Deployment Guide for GREENOV LTD Website

## Quick Deployment Options

### Option 1: Vercel (Recommended - Easiest)

1. **Install Vercel CLI** (optional, or use web interface):
   ```bash
   npm install -g vercel
   ```

2. **Deploy via Web Interface**:
   - Go to [https://vercel.com](https://vercel.com)
   - Sign up/login with GitHub, GitLab, or Bitbucket
   - Click "New Project"
   - Import your repository
   - Vercel will auto-detect Vite settings
   - Click "Deploy"

3. **Deploy via CLI**:
   ```bash
   vercel
   ```
   Follow the prompts

**Advantages:**
- Free tier available
- Automatic HTTPS
- Custom domain support
- Automatic deployments on git push
- Fast CDN

---

### Option 2: Netlify

1. **Install Netlify CLI** (optional):
   ```bash
   npm install -g netlify-cli
   ```

2. **Deploy via Web Interface**:
   - Go to [https://netlify.com](https://netlify.com)
   - Sign up/login
   - Click "Add new site" → "Import an existing project"
   - Connect your Git repository
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Click "Deploy site"

3. **Deploy via CLI**:
   ```bash
   npm run build
   netlify deploy --prod --dir=dist
   ```

**Advantages:**
- Free tier available
- Automatic HTTPS
- Custom domain support
- Form handling (though you're using EmailJS)
- Easy rollback

---

### Option 3: GitHub Pages

1. **Install gh-pages package**:
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json**:
   Add to scripts:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```

3. **Update vite.config.js**:
   ```javascript
   import { defineConfig } from 'vite'
   import react from '@vitejs/plugin-react'

   export default defineConfig({
     plugins: [react()],
     base: '/your-repo-name/' // Replace with your GitHub repo name
   })
   ```

4. **Deploy**:
   ```bash
   npm run deploy
   ```

5. **Enable GitHub Pages**:
   - Go to your repo → Settings → Pages
   - Source: `gh-pages` branch
   - Save

**Advantages:**
- Free
- Integrated with GitHub
- Custom domain support

---

## Pre-Deployment Checklist

- [x] EmailJS configured (Service ID, Template ID, Public Key)
- [ ] Test form submission works
- [ ] All images are in `public` folder
- [ ] Build runs without errors
- [ ] Test all pages navigate correctly
- [ ] Check mobile responsiveness

## Build for Production

Before deploying, test the build locally:

```bash
npm run build
npm run preview
```

This will:
1. Create optimized production build in `dist` folder
2. Start a preview server to test the build

## Important Notes

1. **EmailJS Public Key**: Your public key is safe to expose in frontend code. EmailJS handles security on their end.

2. **Environment Variables** (if needed later):
   - Create `.env` file for sensitive data
   - Add `.env` to `.gitignore`
   - Use `import.meta.env.VITE_*` in Vite

3. **Custom Domain**: All platforms support custom domains. Update DNS settings as per platform instructions.

4. **Router Configuration**: If using GitHub Pages, make sure to set the `base` path in `vite.config.js`.

## Recommended: Vercel

For this project, **Vercel** is recommended because:
- Zero configuration needed
- Automatic deployments
- Free SSL certificate
- Fast global CDN
- Easy custom domain setup
- Great for React/Vite projects

