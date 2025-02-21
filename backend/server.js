const express = require("express");
const path = require("path");
const cors = require("cors");
const dotenv = require("dotenv");
const sgMail = require("@sendgrid/mail");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const { body, validationResult } = require("express-validator");
const sanitizeHtml = require("sanitize-html");

dotenv.config({ path: path.resolve(__dirname, ".env") });

const app = express();

// ✅ Protection avec Helmet
app.use(helmet());

// ✅ Limite le nombre de requêtes pour éviter le spam (5 requêtes/min)
const limiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 5, // Limite à 5 requêtes par minute
  message: "Trop de requêtes, veuillez réessayer plus tard.",
});
app.use("/api/contact", limiter);

// ✅ Middleware pour bloquer les accès interdits
app.use((req, res, next) => {
  const blockedPaths = ["/.env", "/phpinfo.php", "/shell.php"];
  if (blockedPaths.includes(req.path.toLowerCase())) {
    return res.status(403).send("Access forbidden 🚫");
  }
  next();
});

// ✅ Configuration CORS
const corsOptions = {
  origin:
    process.env.NODE_ENV === "production"
      ? "https://www.vincenttenret.ch"
      : "http://localhost:5173", // Autoriser localhost en développement
  methods: "POST",
  allowedHeaders: ["Content-Type"],
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(express.json());

// ✅ Vérification et configuration de SendGrid
if (
  !process.env.SENDGRID_API_KEY ||
  !process.env.SENDGRID_API_KEY.startsWith("SG.")
) {
  console.error("❌ Erreur: Clé API SendGrid invalide ou absente !");
  process.exit(1);
}
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// ✅ Route API pour formulaire de contact avec validation et email de confirmation
app.post(
  "/api/contact",
  [
    body("name")
      .trim()
      .isLength({ min: 2, max: 50 })
      .withMessage("Le nom doit contenir entre 2 et 50 caractères.")
      .matches(/^[a-zA-ZÀ-ÿ '-]+$/)
      .withMessage("Le nom ne doit contenir que des lettres et des espaces."),
    body("email").isEmail().withMessage("Adresse email invalide."),
    body("message")
      .trim()
      .isLength({ min: 10, max: 1000 })
      .withMessage("Le message doit contenir entre 10 et 1000 caractères.")
      .customSanitizer((value) => sanitizeHtml(value)),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, message } = req.body;

    // ✅ Email de notification pour toi
    const notificationEmail = {
      to: "info@vincenttenret.ch",
      from: "info@vincenttenret.ch", // Doit être un email validé par SendGrid
      subject: `Nouveau message de ${name}`,
      html: `
        <p><strong>Nom:</strong> ${sanitizeHtml(name)}</p>
        <p><strong>Email:</strong> ${sanitizeHtml(email)}</p>
        <p><strong>Message:</strong></p>
        <p>${sanitizeHtml(message)}</p>
      `,
    };

    // ✅ Email de confirmation pour l'utilisateur
    const confirmationEmail = {
      to: email, // L'email de l'utilisateur
      from: "info@vincenttenret.ch", // Ton email vérifié
      subject: "Confirmation de votre message",
      html: `
        <p>Bonjour ${sanitizeHtml(name)},</p>
        <p>Merci pour votre message ! J'ai bien reçu votre demande et je vous répondrai dès que possible.</p>
        <p><strong>Votre message :</strong></p>
        <blockquote style="background:#f4f4f4;padding:10px;border-left:5px solid #ccc;">
          ${sanitizeHtml(message)}
        </blockquote>
        <p>À bientôt !</p>
        <p><strong>Vincent Tenret</strong></p>
      `,
    };

    try {
      // Envoi des emails en parallèle
      await Promise.all([
        sgMail.send(notificationEmail),
        sgMail.send(confirmationEmail),
      ]);

      console.log("✅ Emails envoyés avec succès !");
      res.status(200).json({ message: "Emails envoyés avec succès !" });
    } catch (error) {
      console.error(
        "❌ Erreur SendGrid :",
        error.response?.body || error.message
      );
      res.status(500).json({
        error: "Erreur lors de l'envoi du message.",
        details: error.response?.body || error.message,
      });
    }
  }
);

// ✅ Servir le frontend React en production
app.use(express.static(path.join(__dirname, "../frontend/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/dist", "index.html"));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Serveur en ligne sur le port ${PORT}`);
});
