import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

const fromEmail = process.env.RESEND_FROM_EMAIL || "Maestrale <onboarding@resend.dev>"
const toEmail = process.env.CONTACT_RECIPIENT_EMAIL || "info@maestralelux.com"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email } = body

    if (!email) {
      return NextResponse.json({ error: "Missing email" }, { status: 400 })
    }

    const subject = "New newsletter subscription from maestralelux.com"

    const html = `
      <h2>New newsletter subscription</h2>
      <p><strong>Email:</strong> ${email}</p>
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

