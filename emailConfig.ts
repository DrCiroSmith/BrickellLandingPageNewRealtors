// EmailJS Configuration
// =====================
// To enable email functionality, follow these steps:
// 1. Create a free account at https://www.emailjs.com/
// 2. Add an email service (Gmail, Outlook, etc.)
// 3. Create an email template with variables matching templateParams below
// 4. Replace the configuration values below with your actual keys
//
// IMPORTANT: For production, consider using environment variables:
// - VITE_EMAILJS_SERVICE_ID
// - VITE_EMAILJS_TEMPLATE_ID  
// - VITE_EMAILJS_PUBLIC_KEY

export const EMAILJS_CONFIG = {
  // Replace with your EmailJS service ID (found in EmailJS dashboard)
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_brickell',
  // Replace with your EmailJS template ID
  TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_brickell_app',
  // Replace with your EmailJS public key (Account > API Keys)
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_EMAILJS_PUBLIC_KEY',
  // Recipient email for form submissions
  TO_EMAIL: import.meta.env.VITE_RECIPIENT_EMAIL || 'roisasha@gmail.com'
};

// Generate HTML email template with Brickell Realty Group branding
export const generateEmailHTML = (data: {
  name: string;
  email: string;
  phone: string;
  license: string;
  experience: string;
  appointmentDate: string;
  languages: string;
  resumeUrl: string;
  message?: string;
}): string => {
  const goldColor = '#A5823F';
  const darkBg = '#111111';
  const surfaceDark = '#1a1a1a';

  return `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Nueva Solicitud de Agente - Brickell Realty Group</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f5f5f5;">
  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #f5f5f5;">
    <tr>
      <td style="padding: 40px 20px;">
        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="600" style="margin: 0 auto; background-color: ${darkBg}; border-radius: 4px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.15);">
          
          <!-- Header -->
          <tr>
            <td style="background-color: ${surfaceDark}; padding: 30px 40px; text-align: center; border-bottom: 2px solid ${goldColor};">
              <img 
                src="https://idxboost-single-property.s3.amazonaws.com/ad6f19fee807c6048e328d33bf4cd2e5/58726008becf56de4a8cfb855869cbac.png" 
                alt="Brickell Realty Group" 
                style="height: 60px; width: auto;"
              />
              <h1 style="color: #ffffff; font-size: 24px; margin: 20px 0 5px 0; font-weight: 300; letter-spacing: 2px;">
                NUEVA SOLICITUD DE AGENTE
              </h1>
              <p style="color: ${goldColor}; font-size: 12px; margin: 0; letter-spacing: 3px; text-transform: uppercase;">
                Brickell Realty Group
              </p>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 40px;">
              
              <!-- Data Table -->
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: ${surfaceDark}; border-radius: 4px; overflow: hidden;">
                <tr>
                  <td style="padding: 15px 20px; border-bottom: 1px solid rgba(255,255,255,0.1);">
                    <span style="color: ${goldColor}; font-size: 11px; text-transform: uppercase; letter-spacing: 1px;">Nombre</span>
                    <p style="color: #ffffff; font-size: 16px; margin: 5px 0 0 0; font-weight: 500;">${data.name}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 15px 20px; border-bottom: 1px solid rgba(255,255,255,0.1);">
                    <span style="color: ${goldColor}; font-size: 11px; text-transform: uppercase; letter-spacing: 1px;">Email</span>
                    <p style="color: #ffffff; font-size: 16px; margin: 5px 0 0 0; font-weight: 500;">
                      <a href="mailto:${data.email}" style="color: #ffffff; text-decoration: none;">${data.email}</a>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 15px 20px; border-bottom: 1px solid rgba(255,255,255,0.1);">
                    <span style="color: ${goldColor}; font-size: 11px; text-transform: uppercase; letter-spacing: 1px;">Teléfono</span>
                    <p style="color: #ffffff; font-size: 16px; margin: 5px 0 0 0; font-weight: 500;">
                      <a href="tel:${data.phone}" style="color: #ffffff; text-decoration: none;">${data.phone}</a>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 15px 20px; border-bottom: 1px solid rgba(255,255,255,0.1);">
                    <span style="color: ${goldColor}; font-size: 11px; text-transform: uppercase; letter-spacing: 1px;">Licencia de Realtor</span>
                    <p style="color: #ffffff; font-size: 16px; margin: 5px 0 0 0; font-weight: 500;">${data.license}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 15px 20px; border-bottom: 1px solid rgba(255,255,255,0.1);">
                    <span style="color: ${goldColor}; font-size: 11px; text-transform: uppercase; letter-spacing: 1px;">Experiencia</span>
                    <p style="color: #ffffff; font-size: 16px; margin: 5px 0 0 0; font-weight: 500;">${data.experience}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 15px 20px; border-bottom: 1px solid rgba(255,255,255,0.1);">
                    <span style="color: ${goldColor}; font-size: 11px; text-transform: uppercase; letter-spacing: 1px;">Mensaje Adicional</span>
                    <p style="color: #ffffff; font-size: 16px; margin: 5px 0 0 0; font-weight: 500;">${data.message || 'Sin mensaje'}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 15px 20px; border-bottom: 1px solid rgba(255,255,255,0.1);">
                    <span style="color: ${goldColor}; font-size: 11px; text-transform: uppercase; letter-spacing: 1px;">Idiomas</span>
                    <p style="color: #ffffff; font-size: 16px; margin: 5px 0 0 0; font-weight: 500;">${data.languages || 'No especificado'}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 15px 20px; border-bottom: 1px solid rgba(255,255,255,0.1);">
                    <span style="color: ${goldColor}; font-size: 11px; text-transform: uppercase; letter-spacing: 1px;">Fecha de Cita Solicitada</span>
                    <p style="color: #ffffff; font-size: 16px; margin: 5px 0 0 0; font-weight: 500;">${data.appointmentDate}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 15px 20px;">
                    <span style="color: ${goldColor}; font-size: 11px; text-transform: uppercase; letter-spacing: 1px;">CV / Resume</span>
                    <p style="color: #ffffff; font-size: 16px; margin: 5px 0 0 0; font-weight: 500;">
                      ${data.resumeUrl && !data.resumeUrl.includes('Error')
      ? `<a href="${data.resumeUrl}" style="color: ${goldColor}; text-decoration: none; display: inline-flex; align-items: center;">
                            📄 Ver/Descargar PDF
                          </a>`
      : '<span style="color: #9ca3af;">No se adjuntó archivo</span>'
    }
                    </p>
                  </td>
                </tr>
              </table>
              
              <div style="text-align: center; margin-top: 30px;">
                 <a href="https://brickell-realty.com/admin" style="background-color: ${goldColor}; color: #000000; padding: 12px 24px; text-decoration: none; font-weight: bold; text-transform: uppercase; font-size: 12px; letter-spacing: 1px; display: inline-block;">Ver Más Solicitudes</a>
              </div>

            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="background-color: ${surfaceDark}; padding: 25px 40px; text-align: center; border-top: 1px solid rgba(255,255,255,0.1);">
              <p style="color: #6b7280; font-size: 11px; margin: 0; letter-spacing: 1px;">
                © ${new Date().getFullYear()} Brickell Realty Group. Todos los derechos reservados.
              </p>
              <p style="color: #4b5563; font-size: 10px; margin: 10px 0 0 0;">
                Miami, Florida | reception@brickell-realty.com
              </p>
            </td>
          </tr>
          
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
};
