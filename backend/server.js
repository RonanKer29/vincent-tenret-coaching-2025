const express = require("express");
const path = require("path");
const cors = require("cors");
const dotenv = require("dotenv");
const sgMail = require("@sendgrid/mail");

dotenv.config({ path: path.resolve(__dirname, ".env") });

const app = express();

// Configuration CORS pour autoriser uniquement ton domaine
const corsOptions = {
  origin: "https://www.vincenttenret.ch",
  methods: "POST",
  allowedHeaders: ["Content-Type"],
};

app.use(cors(corsOptions));
app.use(express.json());

// Clé API SendGrid
if (!process.env.SENDGRID_API_KEY) {
  console.error("❌ Erreur: SENDGRID_API_KEY non défini !");
  process.exit(1); // Arrête le serveur si la clé n'est pas définie
}
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// **API pour gérer les formulaires de contact**
app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Tous les champs sont requis." });
  }

  const msg = {
    to: "info@vincenttenret.ch",
    from: "info@vincenttenret.ch",
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
    console.error("❌ Erreur d'envoi :", error.response?.body || error.message);
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
