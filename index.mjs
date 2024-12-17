import { MailtrapClient } from "mailtrap";

/**
 * For this example to work, you need to set up a sending domain,
 * and obtain a token that is authorized to send from the domain.
 */

const TOKEN = "42edb8fe4c6a832c8f20c9508db8fca4";
const SENDER_EMAIL = "hello@demomailtrap.com";
const RECIPIENT_EMAIL = "swapnanilmanna06694@gmail.com";

if (!TOKEN) {
  throw new Error("MAILTRAP_TOKEN environment variable is not set");
}

const client = new MailtrapClient({ token: TOKEN });

const sender = { name: "Mailtrap Test", email: SENDER_EMAIL };

client
  .send({
    from: sender,
    to: [{ email: RECIPIENT_EMAIL }],
    subject: "Hello from Mailtrap!",
    text: "Welcome to Cazz👋",
  })
  .then(console.log)
  .catch(console.error);
