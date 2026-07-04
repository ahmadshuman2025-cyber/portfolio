import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const ContactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  subject: z.string().trim().min(1, "Subject is required").max(150),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(2000),
});

export const sendContactMessage = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => ContactSchema.parse(data))
  .handler(async ({ data }) => {
    // Log to server (visible in server function logs).
    // Wire to email (Resend/Mailgun) or DB later without changing the client.
    console.log("[contact] new message", {
      name: data.name,
      email: data.email,
      subject: data.subject,
      message: data.message,
      receivedAt: new Date().toISOString(),
    });
    return { ok: true as const };
  });
