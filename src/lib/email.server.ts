// Server-only Gmail API notification sender.
// Load inside server handlers: const { sendContactNotification } = await import("@/lib/email.server");
// Top-level import is safe only in other .server.ts modules - route files and *.functions.ts ship to the client bundle.
//
// TODO(setup): this needs Gmail API OAuth credentials for a Google Workspace
// account allowed to send as GMAIL_SENDER_EMAIL (info@getgrow.academy).
// Without them, sendContactNotification() just logs a warning and no-ops —
// the contact form still works, you just won't get the email alert.
//
// How to get credentials:
//   1. Google Cloud Console (https://console.cloud.google.com) — create or
//      pick a project, then enable the "Gmail API" under
//      APIs & Services -> Library.
//   2. APIs & Services -> OAuth consent screen — configure it (Internal is
//      fine if allowed for your Workspace org).
//   3. APIs & Services -> Credentials -> Create Credentials -> OAuth client
//      ID (type "Web application" works, redirect URI doesn't matter if you
//      use the OAuth Playground below). Note the Client ID and Client Secret.
//   4. Get a refresh token scoped to gmail.send, authorized AS
//      info@getgrow.academy, via the OAuth 2.0 Playground
//      (https://developers.google.com/oauthplayground):
//        - gear icon (top right) -> "Use your own OAuth credentials" -> paste
//          the Client ID/Secret from step 3
//        - Step 1: pick "Gmail API v1" -> scope
//          https://www.googleapis.com/auth/gmail.send -> Authorize APIs ->
//          sign in as info@getgrow.academy
//        - Step 2: "Exchange authorization code for tokens" -> copy the
//          "Refresh token" value
//   5. Fill in .env (see .env.example):
//        GOOGLE_CLIENT_ID=...
//        GOOGLE_CLIENT_SECRET=...
//        GOOGLE_REFRESH_TOKEN=...
//        GMAIL_SENDER_EMAIL=info@getgrow.academy
//        CONTACT_NOTIFICATION_EMAIL=info@getgrow.academy
//
// Alternative for Workspace admins: a service account with domain-wide
// delegation impersonating info@getgrow.academy (google.auth.JWT with a
// `subject`) avoids the user-consent refresh-token flow entirely, at the
// cost of an admin needing to authorize the service account's client ID in
// the Workspace Admin Console (Security -> API controls -> Domain-wide
// delegation).

import { google } from "googleapis";

export type ContactNotificationPayload = {
  first_name: string;
  last_name: string;
  email: string;
  phone: string | null;
  interest: string | null;
  avgs_status: string | null;
  message: string | null;
  format: string | null;
  source: string | null;
};

function encodeEmail({
  to,
  from,
  subject,
  body,
}: {
  to: string;
  from: string;
  subject: string;
  body: string;
}): string {
  const lines = [
    `From: ${from}`,
    `To: ${to}`,
    `Subject: =?utf-8?B?${Buffer.from(subject, "utf-8").toString("base64")}?=`,
    "MIME-Version: 1.0",
    "Content-Type: text/plain; charset=utf-8",
    "",
    body,
  ];
  return Buffer.from(lines.join("\r\n"))
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

function formatBody(payload: ContactNotificationPayload): string {
  return [
    "Neue Kontaktanfrage über getgrow.academy:",
    "",
    `Name: ${payload.first_name} ${payload.last_name}`,
    `E-Mail: ${payload.email}`,
    `Telefon: ${payload.phone ?? "-"}`,
    `Interesse: ${payload.interest ?? "-"}`,
    `AVGS-Status: ${payload.avgs_status ?? "-"}`,
    `Format: ${payload.format ?? "-"}`,
    `Quelle: ${payload.source ?? "-"}`,
    "",
    "Nachricht:",
    payload.message ?? "-",
  ].join("\n");
}

export async function sendContactNotification(
  payload: ContactNotificationPayload,
): Promise<void> {
  const clientId = process.env.GOOGLE_CLIENT_ID;
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
  const refreshToken = process.env.GOOGLE_REFRESH_TOKEN;
  const sender = process.env.GMAIL_SENDER_EMAIL || "info@getgrow.academy";
  const recipient = process.env.CONTACT_NOTIFICATION_EMAIL || "info@getgrow.academy";

  if (!clientId || !clientSecret || !refreshToken) {
    console.warn(
      "[email] Gmail API credentials missing (GOOGLE_CLIENT_ID / GOOGLE_CLIENT_SECRET / " +
        "GOOGLE_REFRESH_TOKEN) — skipping notification email. See src/lib/email.server.ts for setup steps.",
    );
    return;
  }

  const oauth2Client = new google.auth.OAuth2(clientId, clientSecret);
  oauth2Client.setCredentials({ refresh_token: refreshToken });

  const gmail = google.gmail({ version: "v1", auth: oauth2Client });

  const raw = encodeEmail({
    to: recipient,
    from: sender,
    subject: `Neue Kontaktanfrage: ${payload.first_name} ${payload.last_name}`,
    body: formatBody(payload),
  });

  await gmail.users.messages.send({
    userId: "me",
    requestBody: { raw },
  });
}
