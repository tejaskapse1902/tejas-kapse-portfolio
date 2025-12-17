import nodemailer from 'nodemailer'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const data = await request.json()
    const { name, email, message } = data || {}

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
    }

    const SMTP_HOST = process.env.SMTP_HOST
    const SMTP_PORT = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : undefined
    const SMTP_USER = process.env.SMTP_USER
    const SMTP_PASS = process.env.SMTP_PASS
    const FROM_EMAIL = process.env.FROM_EMAIL
    const OWNER_EMAIL = process.env.OWNER_EMAIL

    if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !FROM_EMAIL || !OWNER_EMAIL) {
      return NextResponse.json({ error: 'Email server not configured' }, { status: 500 })
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

    const ownerMail = {
      from: FROM_EMAIL,
      to: OWNER_EMAIL,
      subject: `New contact from ${name}`,
      text: `You have a new message from ${name} <${email}>:\n\n${message}`,
      html: `<p><strong>From:</strong> ${name} &lt;${email}&gt;</p><p><strong>Message:</strong></p><p>${message}</p>`,
    }

    const clientMail = {
      from: FROM_EMAIL,
      to: email,
      subject: `Thanks for contacting ${process.env.NEXT_PUBLIC_SITE_NAME || 'me'}`,
      text: `Hi ${name},\n\nThanks for reaching out. I've received your message and will get back to you soon.\n\n—`,
      html: `<p>Hi ${name},</p><p>Thanks for reaching out. I've received your message and will get back to you soon.</p><p>—</p>`,
    }

    await transporter.sendMail(ownerMail)
    await transporter.sendMail(clientMail)

    return NextResponse.json({ ok: true })
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('Mail send error', err)
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }
}
