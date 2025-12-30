# Deployment Guide - Brickell Realty Group

This guide covers deploying the Brickell Realty Group recruitment landing page to GitHub Pages.

## Prerequisites

- GitHub account
- Node.js 18+ installed locally
- Git installed

## Step 1: Fork or Clone the Repository

```bash
git clone https://github.com/DrCiroSmith/BrickellLandingPageNewRealtors.git
cd BrickellLandingPageNewRealtors
```

## Step 2: Install Dependencies

```bash
npm install
```

## Step 3: Configure Environment Variables

### For Local Development

Create a `.env.local` file:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_RECIPIENT_EMAIL=your_email@example.com
```

### For Production (GitHub Pages)

Add these secrets in your repository:

1. Go to **Settings** → **Secrets and variables** → **Actions**
2. Click **New repository secret**
3. Add each of the following:

| Secret Name | Value |
|-------------|-------|
| `VITE_EMAILJS_SERVICE_ID` | Your EmailJS service ID |
| `VITE_EMAILJS_TEMPLATE_ID` | Your EmailJS template ID |
| `VITE_EMAILJS_PUBLIC_KEY` | Your EmailJS public key |
| `VITE_RECIPIENT_EMAIL` | Email to receive submissions |

## Step 4: Configure Base Path

If your repository name is different, update `vite.config.ts`:

```typescript
const base = mode === 'production' 
  ? '/YOUR_REPOSITORY_NAME/' 
  : '/';
```

## Step 5: Enable GitHub Pages

1. Go to repository **Settings** → **Pages**
2. Under "Build and deployment":
   - **Source**: Select "GitHub Actions"
3. Save the settings

## Step 6: Deploy

Push your code to the `main` branch:

```bash
git add .
git commit -m "Deploy to GitHub Pages"
git push origin main
```

The GitHub Actions workflow will automatically:
1. Install dependencies
2. Build the project
3. Deploy to GitHub Pages

## Step 7: Access Your Site

After deployment completes (2-3 minutes), your site will be available at:

```
https://YOUR_USERNAME.github.io/YOUR_REPOSITORY_NAME/
```

## Troubleshooting

### Build Fails

1. Check the **Actions** tab for error logs
2. Ensure all secrets are configured correctly
3. Verify `package.json` has all required dependencies

### Images Not Loading

1. Ensure images are in `public/images/` directory
2. Check file names match exactly (case-sensitive)
3. Verify base path in `vite.config.ts` matches your repo name

### 404 Error on Pages

1. Wait a few minutes for DNS propagation
2. Verify GitHub Pages is enabled with "GitHub Actions" source
3. Check that the `deploy.yml` workflow completed successfully

### EmailJS Not Working

1. Verify all EmailJS secrets are set correctly
2. Check EmailJS dashboard for quota limits
3. Test with a simple template first

## Custom Domain Setup (Optional)

1. Go to **Settings** → **Pages**
2. Under "Custom domain", enter your domain
3. Create DNS records:
   - For apex domain: A records pointing to GitHub's IPs
   - For subdomain: CNAME record pointing to `YOUR_USERNAME.github.io`

4. Wait for DNS propagation (up to 24 hours)
5. Enable "Enforce HTTPS" once available

## Updating Content

### Update Images

1. Replace files in `public/images/`
2. Commit and push to `main`
3. Wait for deployment to complete

### Update Form Configuration

1. Edit `emailConfig.ts` for email settings
2. Edit `supabaseClient.ts` for database settings
3. Commit and push to `main`

## Monitoring

- Check **Actions** tab for deployment status
- Review deployment logs for any issues
- Monitor EmailJS dashboard for email deliveries

## Support

For additional help:
- Open a GitHub issue
- Contact: roisasha@gmail.com

---

**Last Updated:** December 2024
