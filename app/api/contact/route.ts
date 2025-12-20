import nodemailer from "nodemailer"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const data = await request.json()
    const { name, email, message } = data || {}

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 })
    }

    const SMTP_HOST = process.env.SMTP_HOST
    const SMTP_PORT = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : undefined
    const SMTP_USER = process.env.SMTP_USER
    const SMTP_PASS = process.env.SMTP_PASS
    const FROM_EMAIL = process.env.FROM_EMAIL
    const OWNER_EMAIL = process.env.OWNER_EMAIL
    const SITE_NAME = process.env.NEXT_PUBLIC_SITE_NAME || "My Portfolio"
    const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || ""
    const LOGO_URL = SITE_URL ? `${SITE_URL}logo.png` : ""

    if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !FROM_EMAIL || !OWNER_EMAIL) {
      return NextResponse.json({ error: "Email server not configured" }, { status: 500 })
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: SMTP_PORT === 465,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    })

    /* ---------------- SOCIAL LINKS (REUSABLE) ---------------- */

    const socialLinksHtml = `
      <div style="margin-top:24px; text-align:center;">
        <a href="${SITE_URL}" target="_blank"
          style="margin:0 8px; text-decoration:none; color:#374151;">
          🌐 Portfolio
        </a>
        |
        <a href="https://github.com/tejaskapse1902" target="_blank"
           style="margin:0 8px; text-decoration:none; color:#374151;">
          🐙 GitHub
        </a>
        |
        <a href="https://www.linkedin.com/in/tejas-kapse/" target="_blank"
           style="margin:0 8px; text-decoration:none; color:#374151;">
          💼 LinkedIn
        </a>
        |
        <a href="mailto:tejaskapse19@gmail.com"
           style="margin:0 8px; text-decoration:none; color:#374151;">
          ✉️ Email
        </a>
      </div>
    `

    /* ---------------- LOGO HEADER (REUSABLE) ---------------- */
     const logoHeader = LOGO_URL
  ? `
    <div style="
      text-align:center;
      margin-bottom:24px;
    ">
      <div style="
        
        
        
        padding:5px 5px;
        border-radius:18px;
        background:linear-gradient(135deg,#020b24,#04113a);
        border:3px solid rgba(52,211,153,0.9);
        box-shadow:
          0 0 12px rgba(52,211,153,0.35),
          inset 0 0 18px rgba(52,211,153,0.15);
      ">
        <img
          src="${LOGO_URL}"
          alt="Logo"
          style="
            max-width:100%;
            height:auto;
            display:block;
            border-radius:18px;
          "
        />
      </div>
    </div>
  `
  : ""


    /* ---------------- OWNER EMAIL ---------------- */

    const ownerMail = {
      from: FROM_EMAIL,
      to: OWNER_EMAIL,
      subject: `📩 New contact message from ${name}`,
      html: `
        ${logoHeader}
        <div style="font-family: Arial, sans-serif; background:#f9fafb; padding:24px;">
          <div style="max-width:600px; margin:auto; background:#ffffff; border-radius:8px; padding:24px;">
            <h2 style="color:#6d28d9;">New Contact Message</h2>

            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>

            <hr style="margin:20px 0;" />

            <p style="white-space:pre-line;">${message}</p>

            <hr style="margin:20px 0;" />

            ${socialLinksHtml}

            <p style="font-size:12px; color:#6b7280; margin-top:16px; text-align:center;">
              Sent from your portfolio contact form.
            </p>
          </div>
        </div>
      `,
    }

    /* ---------------- USER CONFIRMATION EMAIL ---------------- */

    const clientMail = {
      from: FROM_EMAIL,
      to: email,
      subject: `Thanks for contacting ${SITE_NAME} 👋`,
      html: `
      ${logoHeader}
        <div style="font-family: Arial, sans-serif; background:#f9fafb; padding:24px;">
          <div style="max-width:600px; margin:auto; background:#ffffff; border-radius:8px; padding:24px;">
            <h2 style="color:#6d28d9;">Thanks for reaching out, ${name} 👋</h2>

            <p>
              I’ve received your message and will get back to you as soon as possible.
            </p>

            <div style="background:#f3f4f6; padding:16px; border-radius:6px; margin:20px 0;">
              <p style="margin:0; font-size:14px; color:#374151;">
                <strong>Your Message:</strong>
              </p>
              <p style="white-space:pre-line; font-size:14px;">
                ${message}
              </p>
            </div>

            <p>
              In the meantime, feel free to explore my work or connect with me:
            </p>

            ${socialLinksHtml}

            <p style="margin-top:24px;">
              Best regards,<br />
              <strong>Tejas Kapse</strong><br />
              Full Stack & Backend Developer
            </p>

            <hr style="margin:24px 0;" />

            <p style="font-size:12px; color:#6b7280; text-align:center;">
              This is an automated confirmation email. Please do not reply.
            </p>
          </div>
        </div>
      `,
    }

    await transporter.sendMail(ownerMail)
    await transporter.sendMail(clientMail)

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error("Mail send error:", err)
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
  }
}
