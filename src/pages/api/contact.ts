import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Méthode non autorisée' });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Tous les champs sont requis.' });
  }

  try {
    // Configurez le transporteur Nodemailer (exemple avec Gmail)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.CONTACT_EMAIL_USER,
        pass: process.env.CONTACT_EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: email,
      to: process.env.CONTACT_EMAIL_TO,
      subject: `Nouveau message de ${name} via le formulaire de contact`,
      text: message,
      html: `<p><strong>Nom :</strong> ${name}</p><p><strong>Email :</strong> ${email}</p><p><strong>Message :</strong><br/>${message}</p>`
    });

    return res.status(200).json({ message: 'Message envoyé avec succès.' });
  } catch (error) {
    return res.status(500).json({ message: 'Erreur lors de l\'envoi du message.' });
  }
} 