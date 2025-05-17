import type { NextApiRequest, NextApiResponse } from "next";
import emailjs from "@emailjs/nodejs";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    try {
      const { name, email, message } = req.body;

      const response = await emailjs.send(
        process.env.EMAILJS_SERVICE_ID as string,
        process.env.EMAILJS_TEMPLATE_ID as string,
        {
          name,
          email,
          message,
        },
        {
          publicKey: process.env.EMAILJS_PUBLIC_KEY as string,
        }
      );

      res.status(200).json({ success: true, message: "Email sent successfully!" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ success: false, message: "Failed to send email." });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
