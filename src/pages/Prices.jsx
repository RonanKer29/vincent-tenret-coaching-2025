import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPersonRunning,
  faHouse,
  faRankingStar,
} from "@fortawesome/free-solid-svg-icons";
import backgroundImage from "../assets/cervin.jpg";
import { Link } from "react-router-dom";

const Prices = () => {
  const prices = [
    {
      title: "Coaching Individuel",
      description: [
        "Un entraînement personnalisé d'1h, conçu pour s'adapter à ton niveau et à tes objectifs (performance, bien-être, remise en forme).",
        "Au programme : course à pied (fractionné, allure spécifique, etc.), renforcement musculaire, assouplissements, yoga et flexibilité.",
        "Un coaching 100% sur mesure, que tu sois débutant ou athlète confirmé !",
      ],
      price: "80.-/ séance",
      icon: faPersonRunning,
    },
    {
      title: "Coaching à Domicile",
      description: [
        "Un entraînement efficace chez toi, sans besoin de matériel spécifique.",
        "Au programme : renforcement musculaire, souplesse, travail cardio et dynamique.",
        "Idéal si tu veux progresser à ton rythme, sans te déplacer, tout en bénéficiant d'un accompagnement sur mesure !",
      ],
      price: "80.- / séance",
      icon: faHouse,
    },
    {
      title: "Formule Race",
      description: [
        "Un plan d'entraînement 100% personnalisé pour préparer ton prochain défi : Trail, marathon, triathlon, Ultra Trail ou toute autre épreuve d'endurance.",
        "Programme détaillé avec des séances adaptées à ton niveau et tes objectifs.",
      ],
      price: "320.- / mois",
      icon: faRankingStar,
    },
  ];

  return (
    <div className="relative flex items-center justify-center w-full min-h-screen text-center bg-blue-3">
      {/* 🔹 Image en arrière-plan */}

      {/* 🔹 Contenu principal */}
      <MaxWidthWrapper>
        <div className="relative w-full px-8 py-12 mx-auto mb-24 rounded-lg shadow-xl bg-white/90 backdrop-blur-md">
          <h1 className="text-4xl font-extrabold uppercase text-blue-12">
            Coaching sportif à Genève
          </h1>
          <p className="mt-4 text-lg font-light text-blue-11">
            Des séances adaptées à ton niveau, ton emploi du temps et tes
            objectifs pour atteindre tes meilleures performances.
          </p>

          {/* 🔹 Grille des Tarifs */}
          <div className="grid grid-cols-1 gap-8 my-8 md:grid-cols-3">
            {prices.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-6 transition-transform duration-300 border rounded-lg shadow-md bg-blue-1 border-blue-6 "
              >
                <FontAwesomeIcon
                  icon={item.icon}
                  size="2x"
                  className="mb-3 text-blue-9"
                />
                <h3 className="mb-4 text-xl font-semibold text-blue-12">
                  {item.title}
                </h3>
                <ul className="mb-4 space-y-2 text-sm text-left text-blue-11">
                  {item.description.map((point, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="mr-2 text-blue-9">✔</span>
                      <span className="leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto text-lg font-bold text-blue-10">
                  {item.price}
                </div>
              </div>
            ))}
          </div>

          {/* 🔹 Section Pourquoi Choisir Ces Formules */}
          <div className="w-full px-6 py-12 text-center rounded-lg shadow-sm bg-blue-3">
            <h2 className="text-2xl font-semibold tracking-wide uppercase text-blue-12">
              Pourquoi choisir ces formules ?
            </h2>

            <p className="max-w-2xl mx-auto mt-4 text-lg text-blue-11">
              Un accompagnement sur mesure pour t'aider à atteindre tes
              objectifs sportifs avec une approche personnalisée et adaptée à
              ton rythme de vie.
            </p>

            <div className="max-w-3xl mx-auto mt-6 space-y-3 text-left text-blue-12">
              <div className="flex items-start gap-3">
                <span className="text-xl text-blue-9">✔</span>
                <p className="text-lg font-medium">
                  Un coaching et adapté à ton emploi du temps.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-xl text-blue-9">✔</span>
                <p className="text-lg font-medium">
                  Un suivi <strong>structuré et efficace</strong> pour des
                  progrès concrets.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-xl text-blue-9">✔</span>
                <p className="text-lg font-medium">
                  Un entraînement <strong>motivant et dynamique</strong>, que ce
                  soit en solo ou chez toi.
                </p>
              </div>
            </div>
          </div>

          {/* 🔹 Bouton d'Action */}
          <div className="mt-8">
            <Link
              to="/contact"
              className="px-6 py-3 text-lg font-bold text-white uppercase transition rounded-lg shadow-md bg-blue-12 hover:bg-blue-9"
            >
              Réserve ta séance
            </Link>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Prices;
