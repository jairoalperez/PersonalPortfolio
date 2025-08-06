// app/api/send-email/route.ts
import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  const body = await req.json()
  const { name, email, message } = body

  if (!name || !email || !message) {
    return NextResponse.json({ message: 'Missing fields' }, { status: 400 })
  }

  try {
    await resend.emails.send({
      from: 'Web Form <onboarding@resend.dev>',
      to: process.env.CONTACT_RECEIVER_EMAIL!,
      subject: 'New message from contact form',
      html: `
        <h2>New message received</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `
    })

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 })
  } catch (error) {
    console.error('Error sending:', error)
    return NextResponse.json({ message: 'Error sending the email' }, { status: 500 })
  }
}
