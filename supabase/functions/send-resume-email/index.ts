import { Resend } from "npm:resend@1.1.0";

const resend = new Resend(Deno.env.get('RESEND_API_KEY'));

Deno.serve(async (req) => {
  try {
    const {
      id,
      full_name,
      email,
      phone,
      license_status,
      experience_years,
      resume_url,
      languages,
      appointment_date,
      message
    } = await req.json();

    if (!full_name || !email) {
      return new Response(JSON.stringify({ error: 'missing required fields' }), { status: 400 });
    }

    const TEST_EMAIL = Deno.env.get('TEST_EMAIL');
    if (!TEST_EMAIL) {
      return new Response(JSON.stringify({ error: 'TEST_EMAIL not set' }), { status: 500 });
    }

    // Company Branding Colors
    const GOLD = '#A5823F';
    const BLACK = '#000000';

    const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Nueva Solicitud - Brickell Realty Group</title>
  <style>
    body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #333; line-height: 1.6; margin: 0; padding: 0; background-color: #f4f4f4; }
    .container { max-width: 600px; margin: 20px auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
    .header { background-color: ${BLACK}; padding: 30px 20px; text-align: center; border-bottom: 4px solid ${GOLD}; }
    .header img { max-width: 180px; height: auto; }
    .content { padding: 40px 30px; }
    .title { color: ${BLACK}; margin-top: 0; font-size: 24px; font-weight: 300; text-align: center; margin-bottom: 30px; }
    .field-group { margin-bottom: 20px; border-bottom: 1px solid #eeeeee; padding-bottom: 15px; }
    .field-group:last-child { border-bottom: none; }
    .label { font-weight: 700; color: ${GOLD}; text-transform: uppercase; font-size: 11px; letter-spacing: 1px; margin-bottom: 5px; }
    .value { font-size: 16px; color: #1a1a1a; }
    .message-box { background-color: #f9f9f9; padding: 15px; border-left: 3px solid ${GOLD}; margin-top: 10px; font-style: italic; }
    .button-container { text-align: center; margin-top: 40px; margin-bottom: 20px; }
    .button { display: inline-block; background-color: ${GOLD}; color: #ffffff !important; padding: 14px 28px; text-decoration: none; border-radius: 4px; font-weight: bold; font-size: 14px; text-transform: uppercase; letter-spacing: 1px; }
    .footer { background-color: #f9f9f9; padding: 20px; text-align: center; font-size: 12px; color: #999; border-top: 1px solid #eeeeee; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <img src="https://idxboost-single-property.s3.amazonaws.com/ad6f19fee807c6048e328d33bf4cd2e5/58726008becf56de4a8cfb855869cbac.png" alt="Brickell Realty Group">
    </div>
    <div class="content">
      <h2 class="title">Nueva Solicitud de Candidato</h2>
      
      <div class="field-group">
        <div class="label">Nombre Completo</div>
        <div class="value">${full_name}</div>
      </div>
      
      <div class="field-group">
        <div class="label">Email</div>
        <div class="value"><a href="mailto:${email}" style="color: #333; text-decoration: none;">${email}</a></div>
      </div>
      
      <div class="field-group">
        <div class="label">Teléfono</div>
        <div class="value"><a href="tel:${phone}" style="color: #333; text-decoration: none;">${phone}</a></div>
      </div>
      
      <div class="field-group">
        <div class="label">Estado de Licencia</div>
        <div class="value">${license_status}</div>
      </div>
      
      <div class="field-group">
        <div class="label">Experiencia</div>
        <div class="value">${experience_years}</div>
      </div>
      
      <div class="field-group">
        <div class="label">Idiomas</div>
        <div class="value">${languages}</div>
      </div>

      <div class="field-group">
        <div class="label">Fecha de Cita Preferida</div>
        <div class="value">${appointment_date || 'No especificada'}</div>
      </div>

      ${message ? `
      <div class="field-group">
        <div class="label">Mensaje Adicional</div>
        <div class="message-box">${message}</div>
      </div>
      ` : ''}

      ${resume_url && !resume_url.startsWith('Error') ? `
      <div class="button-container">
        <a href="${resume_url}" class="button">Descargar CV / Resume (PDF)</a>
      </div>
      ` : ''}
    </div>
    <div class="footer">
      &copy; ${new Date().getFullYear()} Brickell Realty Group.<br>
      Recruitment Portal Notification
    </div>
  </div>
</body>
</html>
    `;

    const resp = await resend.emails.send({
      from: Deno.env.get('RESEND_FROM') || 'onboarding@resend.dev',
      to: TEST_EMAIL,
      subject: `Nueva Solicitud: ${full_name} - Brickell Realty Group`,
      html
    });

    return new Response(JSON.stringify({ ok: true, result: resp }), {
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
});
