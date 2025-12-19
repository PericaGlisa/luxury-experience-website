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

    const subject = "Nova prijava na newsletter - maestralelux.com"

    const html = `
      <h2>Nova prijava na newsletter listu</h2>
      <p><strong>Email adresa:</strong> ${email}</p>
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

