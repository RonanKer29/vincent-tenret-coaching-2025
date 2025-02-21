import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import { useToast } from "../hooks/use-toast"; // ✅ Import du toast
import { Toaster } from "../components/ui/toaster"; // ✅ Toaster

const Contact = () => {
  const { toast } = useToast(); // ✅ Hook pour afficher les toasts
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const API_URL =
    process.env.NODE_ENV === "production"
      ? "https://www.vincenttenret.ch/api/contact"
      : "http://localhost:5000/api/contact";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // 🔹 Vérification côté client
    if (!/^[a-zA-ZÀ-ÿ '-]{2,50}$/.test(formData.name)) {
      toast({
        title: "❌ Erreur",
        description:
          "Le nom doit contenir uniquement des lettres et espaces (2-50 caractères).",
        variant: "destructive",
      });
      setLoading(false);
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      toast({
        title: "❌ Erreur",
        description: "Adresse email invalide.",
        variant: "destructive",
      });
      setLoading(false);
      return;
    }
    if (formData.message.length < 10 || formData.message.length > 1000) {
      toast({
        title: "❌ Erreur",
        description: "Le message doit contenir entre 10 et 1000 caractères.",
        variant: "destructive",
      });
      setLoading(false);
      return;
    }

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
        mode: "cors",
      });

      const data = await res.json();

      if (res.ok) {
        toast({
          title: "✅ Message envoyé !",
          description: "Merci pour votre message, je vous répondrai bientôt.",
          variant: "success",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast({
          title: "❌ Erreur",
          description:
            data?.errors?.map((e) => e.msg).join(", ") ||
            "Une erreur inconnue s'est produite.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Erreur d'envoi :", error);
      toast({
        title: "❌ Erreur réseau",
        description: "Vérifiez votre connexion et réessayez.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* ✅ Toaster pour afficher les notifications */}
      <Toaster />

      <MaxWidthWrapper>
        <div className="flex flex-col items-center max-w-4xl gap-12 p-10 mx-auto my-20 border shadow-md bg-blue-3 rounded-xl border-blue-6 md:flex-row">
          {/* Section gauche : Infos de contact */}
          <div className="w-full md:w-1/2 text-blue-12">
            <h2 className="text-3xl font-bold uppercase">Contact</h2>
            <p className="mt-3 text-lg text-blue-11">
              Échangeons sur tes objectifs ! Je suis à ton écoute pour t’aider à
              progresser et atteindre tes ambitions.
            </p>

            <div className="mt-6 space-y-5">
              <div className="flex items-center gap-3">
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  className="text-2xl text-blue-9"
                />
                <div>
                  <h3 className="text-lg font-semibold">Zone de coaching</h3>
                  <p className="text-blue-11">Genève et sa région</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="text-2xl text-blue-9"
                />
                <div>
                  <h3 className="text-lg font-semibold">Téléphone</h3>
                  <p className="text-blue-11">(+33) 07 82 91 68 84</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-2xl text-blue-9"
                />
                <div>
                  <h3 className="text-lg font-semibold">E-mail</h3>
                  <p className="text-blue-11">info@vincenttenret.ch</p>
                </div>
              </div>
            </div>
          </div>

          {/* Section droite : Formulaire */}
          <form onSubmit={handleSubmit} className="w-full space-y-4 md:w-1/2">
            <div>
              <label className="block text-sm font-medium text-blue-12">
                Nom
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 mt-1 border rounded-md shadow-sm border-blue-6 focus:ring-2 focus:ring-blue-9 focus:outline-none"
                placeholder="Votre nom"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-blue-12">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 mt-1 border rounded-md shadow-sm border-blue-6 focus:ring-2 focus:ring-blue-9 focus:outline-none"
                placeholder="Votre email"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-blue-12">
                Message
              </label>
              <textarea
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 mt-1 border rounded-md shadow-sm border-blue-6 focus:ring-2 focus:ring-blue-9 focus:outline-none"
                placeholder="Votre message"
              />
            </div>

            <button
              type="submit"
              className="w-full px-4 py-3 font-semibold text-white transition shadow-md rounded-xl bg-blue-9 hover:bg-blue-10 disabled:opacity-50"
              disabled={loading}
            >
              {loading ? "Envoi en cours..." : "Envoyer le message"}
            </button>
          </form>
        </div>
      </MaxWidthWrapper>
    </>
  );
};

export default Contact;
