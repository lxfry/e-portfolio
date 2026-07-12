type ContactPayload = {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  message?: unknown;
  website?: unknown;
};

const resendEndpoint = "https://api.resend.com/emails";

function sanitizeText(value: unknown, maxLength: number) {
  if (typeof value !== "string") {
    return "";
  }

  return value.trim().slice(0, maxLength);
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function isValidOptionalPhone(value: string) {
  return !value || value.startsWith("+");
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL ?? "lucas.frery@gmail.com";
  const fromEmail = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !fromEmail) {
    return Response.json(
      { message: "The contact form is not configured yet." },
      { status: 500 },
    );
  }

  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return Response.json(
      { message: "Invalid contact form request." },
      { status: 400 },
    );
  }

  if (sanitizeText(payload.website, 200)) {
    return Response.json({ message: "Message sent." });
  }

  const name = sanitizeText(payload.name, 120);
  const email = sanitizeText(payload.email, 180);
  const phone = sanitizeText(payload.phone, 60);
  const message = sanitizeText(payload.message, 4000);

  if (!name) {
    return Response.json(
      { message: "Please enter your name." },
      { status: 400 },
    );
  }

  if (!email) {
    return Response.json(
      { message: "Please enter your email address." },
      { status: 400 },
    );
  }

  if (!isValidEmail(email)) {
    return Response.json(
      {
        message:
          "Please enter a valid email address, for example name@example.com.",
      },
      { status: 400 },
    );
  }

  if (!isValidOptionalPhone(phone)) {
    return Response.json(
      {
        message:
          "Please start the phone number with a country code, for example +33 0 00 00 00 00.",
      },
      { status: 400 },
    );
  }

  if (!message) {
    return Response.json(
      { message: "Please enter a message." },
      { status: 400 },
    );
  }

  const text = [
    "New portfolio contact message",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone || "Not provided"}`,
    "",
    "Message:",
    message,
  ].join("\n");

  const html = `
    <h2>New portfolio contact message</h2>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(phone || "Not provided")}</p>
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(message).replaceAll("\n", "<br />")}</p>
  `;

  const response = await fetch(resendEndpoint, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [toEmail],
      subject: `Portfolio contact from ${name}`,
      text,
      html,
      headers: {
        "Reply-To": email,
      },
    }),
  });

  if (!response.ok) {
    return Response.json(
      { message: "The message could not be sent. Please try again later." },
      { status: 502 },
    );
  }

  return Response.json({ message: "Message sent." });
}
