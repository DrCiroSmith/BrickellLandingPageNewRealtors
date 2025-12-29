<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Brickell Realty Group - Recruitment Landing Page

A modern, elegant recruitment landing page for Brickell Realty Group, designed to attract elite real estate agents.

## Features

- 🏠 Professional landing page with dark luxury theme
- 📝 Dynamic application form with language skills
- 📧 Email notifications via EmailJS
- 📱 Fully responsive design
- 🗄️ Supabase integration for data storage

## Run Locally

**Prerequisites:** Node.js

1. Install dependencies:
   ```bash
   npm install
   ```

2. Configure environment variables (optional):
   Copy `.env.example` to `.env.local` and configure your keys:
   ```bash
   cp .env.example .env.local
   ```

3. Run the app:
   ```bash
   npm run dev
   ```

## Email Configuration (EmailJS)

To enable email notifications when applicants submit the form:

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

## Build for Production

```bash
npm run build
```

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS
- Supabase
- EmailJS
