const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const sgMail = require("@sendgrid/mail");

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.get("/", (req, res) => {
  res.send("Le serveur fonctionne 🚀");
});

app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;

  const msg = {
    to: "info@vincenttenret.ch", // Ton email de réception
    from: "info@vincenttenret.ch", // Email vérifié sur SendGrid
    subject: `Nouveau message de ${name}`,
    html: `<p><strong>Nom:</strong> ${name}</p>
           <p><strong>Email:</strong> ${email}</p>
           <p><strong>Message:</strong></p>
           <p>${message}</p>`,
  };

  try {
    await sgMail.send(msg);
    res.status(200).json({ message: "Email envoyé avec succès !" });
  } catch (error) {
    console.error("Erreur d'envoi :", error.response?.body || error.message);
    res.status(500).json({ error: "Erreur lors de l'envoi du message." });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Serveur démarré sur le port ${PORT}`));
