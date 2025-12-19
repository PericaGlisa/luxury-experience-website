import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

const fromEmail = process.env.RESEND_FROM_EMAIL || "Maestrale <onboarding@resend.dev>"
const toEmail = process.env.CONTACT_RECIPIENT_EMAIL || "info@maestralelux.com"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, subject, message } = body

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Map subject values to Serbian labels
    const subjectLabels: Record<string, string> = {
      experiences: "Iskustva",
      destinations: "Destinacije",
      "yacht-charters": "Čarter jahte",
    }
    const subjectLabel = subjectLabels[subject] || subject

    const emailSubject = `Nova poruka sa kontakt forme: ${subjectLabel}`

    const html = `
      <h2>Nova poruka sa kontakt stranice</h2>
      <p><strong>Ime:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Telefon:</strong> ${phone || "Nije navedeno"}</p>
      <p><strong>Tema:</strong> ${subjectLabel}</p>
      <p><strong>Poruka:</strong></p>
      <p>${message}</p>
    `

    await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      subject: emailSubject,
      html,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

