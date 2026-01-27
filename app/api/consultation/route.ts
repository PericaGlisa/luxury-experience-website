import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

const fromEmail = process.env.RESEND_FROM_EMAIL || "Maestrale <onboarding@resend.dev>"
const toEmail = process.env.CONTACT_RECIPIENT_EMAIL || "info@maestralelux.com"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, date, time, destination, message } = body

    if (!name || !email) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Format date to Serbian standard (DD.MM.YYYY)
    let formattedDate = date
    if (date) {
      const [year, month, day] = date.split("-")
      formattedDate = `${day}.${month}.${year}.`
    }

    // Map time values to Serbian labels
    const timeLabels: Record<string, string> = {
      morning: "Prepodne",
      afternoon: "Popodne",
      evening: "Veče",
    }
    const timeLabel = timeLabels[time] || "Nije precizirano"

    // Map destination values to Serbian labels
    const destinationLabels: Record<string, string> = {
      experiences: "Iskustva",
      destinations: "Destinacije",
      "yacht-charters": "Čarter jahte",
    }
    const destinationLabel = destinationLabels[destination] || "Nije odabrano"

    const subject = `Novi upit za konsultacije (${destinationLabel}) - maestralelux.com`

    const html = `
      <h2>Novi zahtev za konsultacije sa početne strane</h2>
      <p><strong>Ime:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Telefon:</strong> ${phone || "Nije navedeno"}</p>
      <p><strong>Željeni datum:</strong> ${formattedDate || "Nije precizirano"}</p>
      <p><strong>Okvirno vreme:</strong> ${timeLabel}</p>
      <p><strong>Zanima me:</strong> ${destinationLabel}</p>
      <p><strong>Poruka:</strong></p>
      <p>${message || "Nema dodatne poruke"}</p>
    `

    await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      subject,
      html,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
