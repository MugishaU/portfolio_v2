import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const MIN_SUBMIT_TIME_MS = 3000; // Minimum 3 seconds to fill out form

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message, _gotcha, _timestamp } = body;

    // Bot detection: honeypot field should be empty
    if (_gotcha) {
      // Silently reject but return success to not tip off bots
      return NextResponse.json({ success: true });
    }

    // Bot detection: form submitted too quickly
    if (_timestamp && Date.now() - _timestamp < MIN_SUBMIT_TIME_MS) {
      // Silently reject but return success to not tip off bots
      return NextResponse.json({ success: true });
    }

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Notify site owner of new submission
    await resend.emails.send({
      from: "Mugisha Portfolio Contact Form <no-reply@mugisha.io>",
      to: "me@mugisha.io",
      subject: `New Enquiry: ${name}`,
      html: `<p><b>Name:</b> ${name}</p><p><b>Email:</b> ${email}</p><p><b>Message:</b></p><p><i>${message}</i></p>`,
    });

    // Send confirmation email to the user
    await resend.emails.send({
      from: "Mugisha <no-reply@mugisha.io>",
      to: email,
      subject: "Thanks for reaching out!",
      html: `<p>Hi ${name},</p><p>Thank you for your message! I've received it and will get back to you soon.</p><p>Best,<br>Mugisha</p><hr><p>Your message:<br><i>${message}</i></p><p>Please do not reply to this message.</p>`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
