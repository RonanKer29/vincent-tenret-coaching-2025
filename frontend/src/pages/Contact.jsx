import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import MaxWidthWrapper from "../components/MaxWidthWrapper";

const Contact = () => {
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

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
        mode: "cors",
        credentials: "include",
      });

      const data = await res.json();

      if (res.ok) {
        alert("Merci pour votre message ! Je vous répondrai bientôt.");
        setFormData({ name: "", email: "", message: "" }); // Réinitialiser le formulaire
      } else {
        alert(
          "Erreur : " + (data.error || "Une erreur inconnue s'est produite.")
        );
      }
    } catch (error) {
      console.error("Erreur d'envoi :", error);
      alert("Une erreur est survenue. Vérifiez votre connexion et réessayez.");
    } finally {
      setLoading(false);
    }
  };

  return (
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
  );
};

export default Contact;
