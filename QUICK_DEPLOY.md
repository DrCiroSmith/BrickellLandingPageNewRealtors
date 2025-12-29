# Quick Deploy Guide - 10 Minutes to Production

This is a streamlined guide to get the Brickell Realty Group landing page deployed quickly.

## ⚡ Quick Steps

### 1. Clone & Install (2 min)

```bash
git clone https://github.com/DrCiroSmith/BrickellLandingPageNewRealtors.git
cd BrickellLandingPageNewRealtors
npm install
```

### 2. Test Locally (1 min)

```bash
npm run dev
```

Open http://localhost:3000 to verify everything works.

### 3. Add GitHub Secrets (3 min)

Go to your repo → **Settings** → **Secrets and variables** → **Actions**

Add these 4 secrets:

```
VITE_EMAILJS_SERVICE_ID     → your_service_id
VITE_EMAILJS_TEMPLATE_ID    → your_template_id  
VITE_EMAILJS_PUBLIC_KEY     → your_public_key
VITE_RECIPIENT_EMAIL        → your@email.com
```

### 4. Enable GitHub Pages (1 min)

1. Go to **Settings** → **Pages**
2. Source: **GitHub Actions**
3. Save

### 5. Push & Deploy (2 min)

```bash
git add .
git commit -m "Deploy"
git push origin main
```

### 6. Done! 🎉

Your site is live at:
```
https://YOUR_USERNAME.github.io/BrickellLandingPageNewRealtors/
```

## 📋 Checklist

- [ ] Repository cloned
- [ ] Dependencies installed
- [ ] Local test passed
- [ ] 4 GitHub Secrets added
- [ ] GitHub Pages enabled (source: GitHub Actions)
- [ ] Code pushed to main
- [ ] Site is live

## 🆘 Common Issues

| Issue | Solution |
|-------|----------|
| Build fails | Check GitHub Actions logs |
| Images broken | Verify `public/images/` files exist |
| 404 error | Wait 2-3 min for deployment |
| Emails not sending | Check EmailJS secrets and dashboard |

## 📞 Need Help?

Contact: roisasha@gmail.com
