import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

const ContactSchema = z.object({
  first_name: z.string().trim().min(1).max(100),
  last_name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().max(50).optional().or(z.literal("")),
  interest: z.string().trim().max(200).optional().or(z.literal("")),
  avgs_status: z.string().trim().max(200).optional().or(z.literal("")),
  message: z.string().trim().max(2000).optional().or(z.literal("")),
  format: z.string().trim().max(100).optional().or(z.literal("")),
  source: z.string().trim().max(100).optional().or(z.literal("")),
});

export const Route = createFileRoute("/api/public/contact")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const json = await request.json();
          const parsed = ContactSchema.safeParse(json);
          if (!parsed.success) {
            return new Response(
              JSON.stringify({ error: "invalid_input", details: parsed.error.flatten() }),
              { status: 400, headers: { "Content-Type": "application/json" } },
            );
          }

          const record = {
            first_name: parsed.data.first_name,
            last_name: parsed.data.last_name,
            email: parsed.data.email,
            phone: parsed.data.phone || null,
            interest: parsed.data.interest || null,
            avgs_status: parsed.data.avgs_status || null,
            message: parsed.data.message || null,
            format: parsed.data.format || null,
            source: parsed.data.source || "kontakt-form",
          };

          try {
            const { insertContactRequest } = await import("@/lib/db.server");
            insertContactRequest(record);
          } catch (dbError) {
            console.error("contact insert error", dbError);
            return new Response(JSON.stringify({ error: "db_error" }), {
              status: 500,
              headers: { "Content-Type": "application/json" },
            });
          }

          // Don't let a Gmail hiccup fail the form submission — the request
          // is already saved in the database.
          import("@/lib/email.server")
            .then(({ sendContactNotification }) => sendContactNotification(record))
            .catch((emailError) => {
              console.error("contact notification email error", emailError);
            });

          return new Response(JSON.stringify({ ok: true }), {
            status: 200,
            headers: { "Content-Type": "application/json" },
          });
        } catch (e) {
          console.error("contact handler error", e);
          return new Response(JSON.stringify({ error: "server_error" }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
          });
        }
      },
    },
  },
});
