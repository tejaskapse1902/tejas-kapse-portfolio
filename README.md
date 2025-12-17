# Tejas Kapse — Portfolio Website

A modern, responsive personal portfolio built with Next.js, Tailwind CSS and Framer Motion. This repository contains the source for a developer portfolio that includes a hero, about, skills, projects, experience, education and a contact form with server-side email delivery.

**Summary of recent changes in this repository**
- Reworked `Hero` and `Navbar` for improved layout, accessibility and responsive behavior.
- Rebuilt contact UI and added a server API route to send emails using Nodemailer.
- Added `.env.example` and documentation for SMTP configuration.
- Set the default site theme to dark in `app/layout.tsx`.

## 🚀 Features

- Modern, responsive UI with smooth animations (Framer Motion).
- Accessible components with keyboard focus states and ARIA labels.
- Contact form that sends two emails on submit: one to the site owner and a confirmation to the sender.
- Theme support with dark mode as the default.
- Ready for deployment to Vercel, Netlify or other static/SSR hosts.

## 🛠️ Tech Stack

- Next.js 16 (App Router)
- React 19
- Tailwind CSS v4
- Framer Motion
- Lucide React icons
- shadcn/ui components
- Nodemailer (server-side SMTP email)

## 📁 Project Structure (important files)

```bash
app/
   ├─ layout.tsx        # Root layout, metadata, ThemeProvider (default dark)
   ├─ page.tsx          # Main entry page
   └─ api/contact/route.ts  # POST API route that sends emails (nodemailer)
components/
   ├─ portfolio/
   │   ├─ hero.tsx
   │   ├─ navbar.tsx
   │   ├─ contact.tsx   # Contact UI that POSTs to /api/contact
   │   └─ ...
   └─ ui/                # Reusable UI primitives
public/                 # Static assets (favicons, images)
.env.example            # Example env vars for SMTP
README.md
```

## Contact API — how it works

- Endpoint: `POST /api/contact` (located at `app/api/contact/route.ts`).
- Behavior: accepts JSON `{ name, email, message }`. The route validates fields and uses Nodemailer to send two emails:
   - An email to the owner (`OWNER_EMAIL`) containing the message
   - A confirmation email to the sender's address
- Environment variables (see `.env.example`) must be set for SMTP credentials.

## Environment variables

Create a local `.env.local` (do NOT commit it). Copy from `.env.example` and fill in your real SMTP credentials.

Required variables:

- `SMTP_HOST` — SMTP server host (e.g., `smtp.gmail.com`)
- `SMTP_PORT` — SMTP server port (465 for SSL, 587 for STARTTLS)
- `SMTP_USER` — SMTP username (your email or SMTP login)
- `SMTP_PASS` — SMTP password (use an app password for Gmail)
- `FROM_EMAIL` — From address used for outgoing mail (e.g., `you@domain.com`)
- `OWNER_EMAIL` — Site owner email (where incoming messages are delivered)
- `NEXT_PUBLIC_SITE_NAME` — Optional display name used in confirmation subject

Example file is provided at `.env.example`.

Security notes:
- Use app passwords for providers like Gmail instead of your main account password.
- Keep `.env.local` out of version control. Add it to `.gitignore` if necessary.

## Installation & Local Development

1. Install dependencies (this project uses `npm`):

```bash
npm install
```

2. Add local environment variables:

```bash
cp .env.example .env.local
# then edit .env.local and fill the values
```

3. Start the dev server:

```bash
npm run dev
```

Open http://localhost:3000 and test the contact form.

If you add Nodemailer, install it locally:

```bash
npm install nodemailer
```

## Favicon / Icons

Place favicon files in the `public/` folder. The app currently registers icons via the `metadata` in `app/layout.tsx`. To change icons, update the `icons` section in `app/layout.tsx` or add `app/head.tsx` with `<link rel="icon" .../>` tags.

## Theme

Dark theme is set as the default via the `ThemeProvider` in `app/layout.tsx`. To change back to light by default, edit `defaultTheme` in `app/layout.tsx`.

## Deployment

- Vercel: recommended for Next.js app router projects. Set your environment variables in the Vercel dashboard.
- Netlify: supported, but be sure to set env vars and use the correct build command (`npm run build`).

## Troubleshooting

- If emails fail to send, check server logs and ensure SMTP env vars are set and valid.
- For Gmail, use an app password and ensure the port/secure settings match (465 -> secure, 587 -> secure=false + STARTTLS).
- If `nodemailer` isn't installed, run `npm install nodemailer`.

## Testing the Contact Form

1. Start the dev server.
2. Fill out the contact form at the website and submit.
3. Expected behavior: you should receive a toast message and two emails should be sent (owner + confirmation).

## Contributing & Notes

- This project uses Tailwind utility classes extensively. Keep components modular and accessible.
- If you prefer a transactional email provider (SendGrid, Mailgun, Postmark), I can update the API route to use their HTTP APIs instead of SMTP.

## Credits

- Built with Next.js, Tailwind CSS, Framer Motion and shadcn/ui.

---

If you'd like, I can also:
- Add a ready `.env.local` template (placeholder values) — I will not commit real credentials.
- Swap the Nodemailer implementation for SendGrid or another provider.
- Run the dev server and take screenshots of mobile/desktop layouts.

Requested next step? (install `nodemailer`, swap provider, or run locally and test?)
