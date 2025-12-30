import { Resend } from "npm:resend@1.1.0";

const resend = new Resend(Deno.env.get('RESEND_API_KEY'));

Deno.serve(async (req) => {
    try {
        const { id, full_name, email, phone, license_status, experience_years, resume_url, languages } = await req.json();
        if (!id || !resume_url) return new Response(JSON.stringify({ error: 'missing id or resume_url' }), { status: 400 });

        const TEST_EMAIL = Deno.env.get('TEST_EMAIL');
        if (!TEST_EMAIL) return new Response(JSON.stringify({ error: 'TEST_EMAIL not set' }), { status: 500 });

        const html = `
      <p>New applicant submitted:</p>
      <ul>
        <li><strong>Name:</strong> ${full_name}</li>
        <li><strong>Email:</strong> ${email}</li>
        <li><strong>Phone:</strong> ${phone}</li>
        <li><strong>License status:</strong> ${license_status}</li>
        <li><strong>Experience:</strong> ${experience_years}</li>
        <li><strong>Languages:</strong> ${languages}</li>
        <li><strong>Resume:</strong> <a href="${resume_url}">Download PDF</a></li>
      </ul>
    `;

        const resp = await resend.emails.send({
            from: Deno.env.get('RESEND_FROM') || `no-reply@${Deno.env.get('SUPABASE_URL')?.replace(/^https?:\/\//, '')}`,
            to: TEST_EMAIL,
            subject: `New applicant: ${full_name}`,
            html
        });

        return new Response(JSON.stringify({ ok: true, result: resp }), { headers: { 'Content-Type': 'application/json' } });
    } catch (err) {
        console.error(err);
        return new Response(JSON.stringify({ error: err.message }), { status: 500 });
    }
});
