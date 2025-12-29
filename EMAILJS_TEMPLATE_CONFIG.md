# EmailJS Template Configuration

This document provides the complete configuration needed to create your EmailJS template for the Brickell Realty Group recruitment form.

## Quick Setup

1. Go to [EmailJS Dashboard](https://dashboard.emailjs.com/)
2. Create an Email Template
3. Use the configuration below

---

## Template Variables

The application sends the following variables to EmailJS. Use these in your template with the `{{variable_name}}` syntax:

### Core Variables

| Variable | Description | Example Value |
|----------|-------------|---------------|
| `{{to_email}}` | Recipient email address | `roisasha@gmail.com` |
| `{{from_name}}` | Applicant's full name | `Juan García` |
| `{{from_email}}` | Applicant's email | `juan@example.com` |
| `{{subject}}` | Email subject line | `Nueva Solicitud de Agente: Juan García` |
| `{{html_content}}` | Pre-formatted HTML email (full branded template) | *(HTML content)* |

### Individual Applicant Fields

| Variable | Description | Example Value |
|----------|-------------|---------------|
| `{{applicant_name}}` | Full name | `Juan García` |
| `{{applicant_age}}` | Age | `28` |
| `{{applicant_email}}` | Email address | `juan@example.com` |
| `{{applicant_phone}}` | Phone number | `+1 (305) 555-1234` |
| `{{applicant_license}}` | Realtor license status | `Activa` / `En proceso` / `No` |
| `{{applicant_experience}}` | Years of experience | `1-3 años` / `3-5 años` / `5+ años` |
| `{{applicant_languages}}` | Languages and proficiency | `Español (Nativo), English (Avanzado)` |
| `{{applicant_appointment}}` | Requested appointment date | `2025-01-15` |
| `{{resume_url}}` | Link to uploaded resume PDF | `https://...` or `No se adjuntó archivo` |

---

## Recommended Template Configuration

### Option 1: Simple HTML Template (Recommended)

If you want to use the pre-built branded HTML template, configure your EmailJS template like this:

**Subject:**
```
{{subject}}
```

**Content (HTML):**
```html
{{{html_content}}}
```

> **Note:** Use triple braces `{{{html_content}}}` to render HTML without escaping.

### Option 2: Custom Template with Individual Variables

If you prefer to design your own template, use the individual variables:

**Subject:**
```
Nueva Solicitud de Agente: {{applicant_name}}
```

**Content:**
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
</head>
<body style="font-family: Arial, sans-serif; background-color: #f5f5f5; padding: 20px;">
  <div style="max-width: 600px; margin: 0 auto; background: #111; border-radius: 8px; overflow: hidden;">
    
    <!-- Header -->
    <div style="background: #1a1a1a; padding: 30px; text-align: center; border-bottom: 2px solid #d4af37;">
      <h1 style="color: white; margin: 0; font-size: 24px;">Nueva Solicitud de Agente</h1>
      <p style="color: #d4af37; margin: 10px 0 0; font-size: 12px; text-transform: uppercase; letter-spacing: 2px;">Brickell Realty Group</p>
    </div>
    
    <!-- Content -->
    <div style="padding: 30px;">
      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="padding: 12px; border-bottom: 1px solid rgba(255,255,255,0.1);">
            <span style="color: #d4af37; font-size: 11px; text-transform: uppercase;">Nombre</span>
            <p style="color: white; margin: 5px 0 0; font-size: 16px;">{{applicant_name}}</p>
          </td>
        </tr>
        <tr>
          <td style="padding: 12px; border-bottom: 1px solid rgba(255,255,255,0.1);">
            <span style="color: #d4af37; font-size: 11px; text-transform: uppercase;">Edad</span>
            <p style="color: white; margin: 5px 0 0; font-size: 16px;">{{applicant_age}} años</p>
          </td>
        </tr>
        <tr>
          <td style="padding: 12px; border-bottom: 1px solid rgba(255,255,255,0.1);">
            <span style="color: #d4af37; font-size: 11px; text-transform: uppercase;">Email</span>
            <p style="color: white; margin: 5px 0 0; font-size: 16px;">
              <a href="mailto:{{applicant_email}}" style="color: white;">{{applicant_email}}</a>
            </p>
          </td>
        </tr>
        <tr>
          <td style="padding: 12px; border-bottom: 1px solid rgba(255,255,255,0.1);">
            <span style="color: #d4af37; font-size: 11px; text-transform: uppercase;">Teléfono</span>
            <p style="color: white; margin: 5px 0 0; font-size: 16px;">
              <a href="tel:{{applicant_phone}}" style="color: white;">{{applicant_phone}}</a>
            </p>
          </td>
        </tr>
        <tr>
          <td style="padding: 12px; border-bottom: 1px solid rgba(255,255,255,0.1);">
            <span style="color: #d4af37; font-size: 11px; text-transform: uppercase;">Licencia de Realtor</span>
            <p style="color: white; margin: 5px 0 0; font-size: 16px;">{{applicant_license}}</p>
          </td>
        </tr>
        <tr>
          <td style="padding: 12px; border-bottom: 1px solid rgba(255,255,255,0.1);">
            <span style="color: #d4af37; font-size: 11px; text-transform: uppercase;">Experiencia</span>
            <p style="color: white; margin: 5px 0 0; font-size: 16px;">{{applicant_experience}}</p>
          </td>
        </tr>
        <tr>
          <td style="padding: 12px; border-bottom: 1px solid rgba(255,255,255,0.1);">
            <span style="color: #d4af37; font-size: 11px; text-transform: uppercase;">Idiomas</span>
            <p style="color: white; margin: 5px 0 0; font-size: 16px;">{{applicant_languages}}</p>
          </td>
        </tr>
        <tr>
          <td style="padding: 12px; border-bottom: 1px solid rgba(255,255,255,0.1);">
            <span style="color: #d4af37; font-size: 11px; text-transform: uppercase;">Fecha de Cita</span>
            <p style="color: white; margin: 5px 0 0; font-size: 16px;">{{applicant_appointment}}</p>
          </td>
        </tr>
        <tr>
          <td style="padding: 12px;">
            <span style="color: #d4af37; font-size: 11px; text-transform: uppercase;">CV / Resume</span>
            <p style="color: white; margin: 5px 0 0; font-size: 16px;">
              <a href="{{resume_url}}" style="color: #d4af37;">📄 Ver/Descargar PDF</a>
            </p>
          </td>
        </tr>
      </table>
    </div>
    
    <!-- Footer -->
    <div style="background: #1a1a1a; padding: 20px; text-align: center; border-top: 1px solid rgba(255,255,255,0.1);">
      <p style="color: #6b7280; margin: 0; font-size: 11px;">© 2025 BRICKELL REALTY GROUP</p>
      <p style="color: #4b5563; margin: 5px 0 0; font-size: 10px;">Exclusive · Luxurious · Unique</p>
    </div>
    
  </div>
</body>
</html>
```

---

## EmailJS Dashboard Settings

### 1. Email Service Setup

1. Go to **Email Services** in the dashboard
2. Click **Add New Service**
3. Select your email provider (Gmail, Outlook, etc.)
4. Follow the authentication steps
5. Note your **Service ID** (e.g., `service_brickell`)

### 2. Template Creation

1. Go to **Email Templates**
2. Click **Create New Template**
3. Configure:
   - **Template Name:** `Brickell Agent Application`
   - **To Email:** `{{to_email}}`
   - **From Name:** `{{from_name}}`
   - **Reply To:** `{{from_email}}`
   - **Subject:** `{{subject}}`
   - **Content:** Use Option 1 or Option 2 above
4. Save and note your **Template ID** (e.g., `template_brickell_app`)

### 3. API Keys

1. Go to **Account** → **API Keys**
2. Copy your **Public Key**

---

## Environment Variables

Set these in your `.env.local` file:

```env
# EmailJS Configuration
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
VITE_RECIPIENT_EMAIL=roisasha@gmail.com
```

---

## Testing

1. After configuration, fill out the recruitment form on the site
2. Check your email inbox for the notification
3. Verify all fields are populated correctly
4. Test the resume download link (if file was uploaded)

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Emails not sending | Verify your Service ID, Template ID, and Public Key |
| HTML not rendering | Use triple braces `{{{html_content}}}` for HTML content |
| Missing fields | Ensure all template variables match the names above |
| Resume link broken | Check Supabase Storage configuration |

---

## Template Parameters Summary (JSON)

For reference, here's the complete templateParams object sent from the application:

```json
{
  "to_email": "roisasha@gmail.com",
  "from_name": "Applicant Name",
  "from_email": "applicant@email.com",
  "subject": "Nueva Solicitud de Agente: Applicant Name",
  "html_content": "...(full HTML email template)...",
  "applicant_name": "Applicant Name",
  "applicant_age": "28",
  "applicant_email": "applicant@email.com",
  "applicant_phone": "+1 (305) 555-1234",
  "applicant_license": "Activa",
  "applicant_experience": "1-3 años",
  "applicant_languages": "Español (Nativo), English (Avanzado)",
  "applicant_appointment": "2025-01-15",
  "resume_url": "https://supabase-storage-url/resume.pdf"
}
```
