import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message, phNo } = req.body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: 'htunyarzar2001@gmail.com', 
        pass: 'nlyw qdna vfqs oret', 
      },
    });

    const mailOptions = {
        from: email, 
        to: "htunyarzar2001@gmail.com", 
        replyTo: email, 
        subject: `New contact message from ${name}`,
        text: message,
        html: `<p><strong>Name:</strong> ${name}</p>
               <p><strong>Phone:</strong> ${phNo}</p>
               <p><strong>Email:</strong> ${email}</p>
               <p><strong>Message:</strong> ${message}</p>`,
    };

    try {
      await transporter.sendMail(mailOptions);
      return res.status(200).json({ success: true });
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .json({ success: false, error: "Error sending message" });
    }
  } else {
    return res
      .status(405)
      .json({ success: false, error: "Method not allowed" });
  }
}
