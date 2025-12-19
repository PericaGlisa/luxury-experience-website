import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

const fromEmail = process.env.RESEND_FROM_EMAIL || "Maestrale <onboarding@resend.dev>"
const toEmail = process.env.CONTACT_RECIPIENT_EMAIL || "info@maestralelux.com"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, date, destination, message } = body

    if (!name || !email) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const subject = "New consultation request from maestralelux.com"

    const html = `
      <h2>New consultation request from homepage</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
      <p><strong>Preferred date:</strong> ${date || "Not specified"}</p>
      <p><strong>Destination:</strong> ${destination || "Not selected"}</p>
      <p><strong>Message:</strong></p>
      <p>${message || "No additional message"}</p>
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

