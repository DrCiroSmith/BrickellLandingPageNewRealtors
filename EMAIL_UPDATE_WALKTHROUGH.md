# EmailJS Configuration Update Walkthrough

## Objective
Configure the EmailJS form submission to send a specific HTML template to `roisasha@gmail.com`, remove the "Age" field, add a "Message" field, and ensure the button color is `#A5823F`.

## Changes Made

### 1. `emailConfig.ts`
- **Updated `generateEmailHTML` function:**
  - Implemented the requested HTML structure with Brickell Realty Group branding.
  - Set the gold color to `#A5823F`.
  - Removed the `age` field from the template.
  - Added the `message` field to the template.
  - Ensured the Resume URL is correctly linked.

### 2. `components/ContactForm.tsx`
- **Updated State:**
  - Added `message` to the `formData` state.
- **Updated UI:**
  - Added a `textarea` for the "Mensaje Adicional" field.
  - Applied inline style `backgroundColor: '#A5823F'` to the submit button to ensure the exact color is used.
- **Updated Logic:**
  - Included `message` in the `sanitizeInput` process.
  - Updated `sendEmailNotification` to pass the `message` to `generateEmailHTML`.
  - Updated `templateParams` sent to EmailJS to include `applicant_message` and exclude `applicant_age`.

### 3. `EMAILJS_TEMPLATE_CONFIG.md`
- **Updated Documentation:**
  - Removed `applicant_age` from the variable list.
  - Added `applicant_message` to the variable list.
  - Updated the recommended HTML template example to match the new design.

## Verification
- The form now collects Name, Email, Phone, License, Experience, Languages, Appointment Date, Message, and CV.
- The email sent will contain the branded HTML template with all these fields.
- The "Age" field is no longer collected or sent.
- The submit button uses the specific gold color `#A5823F`.

## Next Steps for User
1. **Deploy:** Ensure the changes are deployed to GitHub Pages (remember to deploy from the `gh-pages` branch as discussed in the previous session).
2. **Test:** Fill out the form on the live site and verify the email received at `roisasha@gmail.com`.
