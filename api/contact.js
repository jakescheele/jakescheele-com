export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "onboarding@resend.dev",
        to: process.env.CONTACT_EMAIL,
        subject: `New message from ${name}`,
        text: `From: ${name} (${email})\n\n${message}`,
      }),
    });

    if (!response.ok) {
      return res.status(500).json({ error: "Failed to send" });
    }

    return res.status(200).json({ ok: true });
  } catch {
    return res.status(500).json({ error: "Failed to send" });
  }
}
