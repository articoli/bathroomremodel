import { NextResponse } from "next/server";
import { site } from "@/lib/site";

const smtp = {
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT || 587),
  user: process.env.SMTP_USER,
  pass: process.env.SMTP_PASS,
  to: process.env.CONTACT_EMAIL_TO || site.email,
};

async function sendMail(data: {
  name: string;
  phone: string;
  email?: string;
  service?: string;
  message: string;
}) {
  const nodemailer = await import("nodemailer");
  const transporter = nodemailer.createTransport({
    host: smtp.host,
    port: smtp.port,
    secure: smtp.port === 465,
    auth: { user: smtp.user, pass: smtp.pass },
  });

  await transporter.sendMail({
    from: `"${site.name} Website" <${smtp.user}>`,
    to: smtp.to,
    replyTo: data.email || smtp.user,
    subject: `New Quote Request from ${data.name}`,
    text: [
      `Name: ${data.name}`,
      `Phone: ${data.phone}`,
      `Email: ${data.email || "Not provided"}`,
      `Service: ${data.service || "Not specified"}`,
      "",
      "Message:",
      data.message,
    ].join("\n"),
  });
}

export async function POST(request: Request) {
  if (!smtp.host || !smtp.user || !smtp.pass) {
    return NextResponse.json(
      { error: "Server email is not configured. Please call (972) 391-8227." },
      { status: 500 }
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const phone = typeof body.phone === "string" ? body.phone.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const service = typeof body.service === "string" ? body.service.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";
  const company = typeof body.company === "string" ? body.company : "";

  if (company) {
    return NextResponse.json({ ok: true });
  }

  if (!name || !phone || !message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  if (!/^[+()\d\s-]{7,20}$/.test(phone)) {
    return NextResponse.json({ error: "Invalid phone number" }, { status: 400 });
  }

  try {
    await sendMail({ name, phone, email, service, message });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Could not send your message. Please call (972) 391-8227." },
      { status: 500 }
    );
  }
}
