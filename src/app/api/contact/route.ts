import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Notify site owner of new submission
    await resend.emails.send({
      from: "Portfolio Contact <no-reply@mugisha.io>",
      to: "mugaboroyal@gmail.com",
      subject: `New contact from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    // Send confirmation email to the user
    await resend.emails.send({
      from: "Mugisha <no-reply@mugisha.io>",
      to: email,
      subject: "Thanks for reaching out!",
      text: `Hi ${name},\n\nThank you for your message! I've received it and will get back to you soon.\n\nYour message:\n"${message}"\n\nBest,\nMugisha\n\nPlease do not reply to this message.`,
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
