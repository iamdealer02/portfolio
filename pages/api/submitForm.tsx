import nodemailer from 'nodemailer';
import { NextApiRequest, NextApiResponse } from 'next';

const submitForm = async (req: NextApiRequest, res: NextApiResponse) => {
  
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
    secure: true,
    tls: {
      rejectUnauthorized: false 
    }
  });

  try {
     await transporter.sendMail({
      from: process.env.EMAIL,
      to: process.env.RECEIVER,
      subject: `New message from ${name}, ${email}`,
      text: message,
    });

    res.status(200).json({ success: true });

  } catch (error: any) {
    console.error(error);
    res.status(500).json({ success: false });
  }
};

export default submitForm;
