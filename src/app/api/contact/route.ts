import { NextResponse } from "next/server";

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

    // TODO: Integrate with email service (Resend, SendGrid, etc.)
    // For now, log the message and return success
    console.log("Contact form submission:", { name, email, message });

    // Example with Resend (uncomment and add RESEND_API_KEY to .env):
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'portfolio@yourdomain.com',
    //   to: 'mugaboroyal@gmail.com',
    //   subject: `Portfolio Contact: ${name}`,
    //   text: `From: ${name} (${email})\n\n${message}`,
    // });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
