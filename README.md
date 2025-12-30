<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Brickell Realty Group - Recruitment Landing Page

A modern, elegant recruitment landing page for Brickell Realty Group, designed to attract elite real estate agents in the Miami/Brickell area.

## ✨ Features

- 🏠 Professional landing page with dark luxury theme
- 📝 Dynamic application form with language skills
- 📧 Email notifications via EmailJS
- 📱 Fully responsive design
- 🗄️ Supabase integration for data storage
- 🔒 Security measures (input sanitization, XSS protection)
- 🚀 Automated deployment via GitHub Actions
- 🖼️ Custom Miami/Brickell property imagery

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/DrCiroSmith/BrickellLandingPageNewRealtors.git
   cd BrickellLandingPageNewRealtors
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables (optional):
   ```bash
   cp .env.example .env.local
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open http://localhost:3000 in your browser

## 📂 Project Structure

```
BrickellLandingPageNewRealtors/
├── .github/
│   └── workflows/
│       └── deploy.yml        # GitHub Actions CI/CD
├── components/
│   ├── Benefits.tsx          # Benefits section
│   ├── ContactForm.tsx       # Application form with validation
│   ├── Footer.tsx            # Footer component
│   ├── Gallery.tsx           # Property image gallery
│   ├── Header.tsx            # Navigation header
│   ├── Hero.tsx              # Hero section with background
│   └── ThankYou.tsx          # Thank you page
├── public/
│   └── images/
│       ├── gallery-1.png     # Luxury shopping area
│       ├── gallery-2.png     # Beachfront property
│       ├── gallery-3.png     # Pool amenities
│       ├── gallery-4.png     # Miami sunset skyline
│       └── hero-bg.png       # Hero background image
├── App.tsx                   # Main app component
├── emailConfig.ts            # EmailJS configuration
├── index.html                # HTML entry point
├── index.tsx                 # React entry point
├── supabaseClient.ts         # Supabase client setup
├── vite.config.ts            # Vite configuration
└── package.json              # Dependencies
```

## 📧 Email Configuration

The application supports two email services for form submission notifications. **Web3Forms is recommended** as the primary service.

### Option 1: Web3Forms (Recommended)

Web3Forms is a free form-to-email service (250 emails/month on free tier) that works directly from the browser.

1. Go to [Web3Forms](https://web3forms.com/) and create a free access key
2. Configure your `.env.local`:
   ```env
   VITE_WEB3FORMS_ACCESS_KEY=your_access_key_here
   VITE_RECIPIENT_EMAIL=your_email@example.com
   ```

### Option 2: EmailJS (Fallback)

To use EmailJS for email notifications:

1. Create a free account at [EmailJS](https://www.emailjs.com/)
2. Add an email service (Gmail, Outlook, etc.)
3. Create an email template with these variables:
   - `to_email` - Recipient email
   - `from_name` - Applicant name
   - `from_email` - Applicant email  
   - `html_content` - Formatted HTML content
   - `applicant_*` - Individual form fields
   - `resume_url` - Link to uploaded resume

4. Configure your `.env.local`:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   VITE_RECIPIENT_EMAIL=your_email@example.com
   ```

**Note:** If Web3Forms is configured, it will be used as the primary email service. EmailJS will be used as a fallback.

## 🚀 Deployment to GitHub Pages

### Automatic Deployment

This project includes a GitHub Actions workflow that automatically deploys to GitHub Pages on every push to the `main` branch.

### Setup GitHub Secrets

Add these secrets in your repository settings (Settings → Secrets and variables → Actions):

| Secret Name | Description |
|-------------|-------------|
| `VITE_WEB3FORMS_ACCESS_KEY` | Your Web3Forms access key (recommended) |
| `VITE_EMAILJS_SERVICE_ID` | Your EmailJS service ID (fallback) |
| `VITE_EMAILJS_TEMPLATE_ID` | Your EmailJS template ID (fallback) |
| `VITE_EMAILJS_PUBLIC_KEY` | Your EmailJS public key (fallback) |
| `VITE_RECIPIENT_EMAIL` | Email to receive form submissions |

### Enable GitHub Pages

1. Go to repository Settings → Pages
2. Under "Build and deployment", select "GitHub Actions"
3. Push code to main branch to trigger deployment

## 🔨 Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## 🔒 Security Features

- **Input Sanitization**: All form inputs are sanitized to prevent XSS attacks
- **Email Validation**: Strict email format validation
- **Filename Sanitization**: Uploaded file names are sanitized
- **Security Headers**: X-Content-Type-Options and Referrer-Policy headers
- **Environment Variables**: Sensitive data stored in GitHub Secrets

## 🛠️ Tech Stack

- **Frontend**: React 19, TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Database**: Supabase
- **Email**: Web3Forms (primary), EmailJS (fallback)
- **Deployment**: GitHub Actions, GitHub Pages

## 📋 Recent Improvements

- ✅ Custom Miami/Brickell property images
- ✅ GitHub Actions CI/CD workflow
- ✅ Production build optimizations (code splitting)
- ✅ Input sanitization and security measures
- ✅ Dynamic base path for GitHub Pages
- ✅ Comprehensive documentation

## 📞 Support

For questions or issues:
- Open a GitHub issue
- Contact: roisasha@gmail.com

---

**Last Updated:** December 2024  
**Version:** 2.0  
**Status:** ✅ Production Ready
