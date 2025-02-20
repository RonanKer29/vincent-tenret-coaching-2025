const express = require("express");
const path = require("path");
const cors = require("cors");
const dotenv = require("dotenv");
const sgMail = require("@sendgrid/mail");

dotenv.config({ path: path.resolve(__dirname, ".env") });

const app = express();

app.use(express.json());
app.use(cors());

// Clé API SendGrid
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
console.log(
  "SENDGRID_API_KEY:",
  process.env.SENDGRID_API_KEY ? "OK" : "Non défini !"
);

// **API pour gérer les formulaires de contact**
app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;

  const msg = {
    to: "info@vincenttenret.ch", // Ton email de réception
    from: "info@vincenttenret.ch", // Adresse vérifiée sur SendGrid
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

// **Servir le frontend React en production**
app.use(express.static(path.join(__dirname, "../frontend/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/dist", "index.html"));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Serveur en ligne sur le port ${PORT}`);
});
