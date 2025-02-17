import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPersonRunning,
  faHouse,
  faRankingStar,
} from "@fortawesome/free-solid-svg-icons";

const Prices = () => {
  const prices = [
    {
      title: "Coaching Individuel",
      description: [
        "Un entraînement personnalisé d'1h, conçu pour s'adapter à ton niveau et à tes objectifs (performance, bien-être, remise en forme).",
        "Au programme : course à pied (fractionné, allure spécifique, etc.), renforcement musculaire, assouplissements, yoga et flexibilité.",
        "Un coaching 100% sur mesure, que tu sois débutant ou athlète confirmé !",
      ],
      price: "80 CHF / séance",
      icon: faPersonRunning,
    },
    {
      title: "Coaching à Domicile",
      description: [
        "Un entraînement efficace chez toi, sans besoin de matériel spécifique.",
        "Au programme : renforcement musculaire, souplesse, travail cardio et dynamique.",
        "Idéal si tu veux progresser à ton rythme, sans te déplacer, tout en bénéficiant d'un accompagnement sur mesure !",
      ],
      price: "80 CHF / séance",
      icon: faHouse,
    },
    {
      title: "Formule Race",
      description: [
        "Un plan d'entraînement 100% personnalisé pour préparer ton prochain défi : Trail, marathon, triathlon, Ultra Trail ou toute autre épreuve d'endurance.",
        "Programme détaillé avec des séances adaptées à ton niveau et tes objectifs.",
      ],
      price: "320 CHF / mois",
      icon: faRankingStar,
    },
  ];

  return (
    <>
      {/* 🔹 Section Titre */}
      <div className="w-full p-16 text-center bg-blue-2">
        <h1 className="text-4xl font-extrabold uppercase text-blue-12">
          Coaching sportif à Genève
        </h1>
      </div>

      <MaxWidthWrapper>
        <section className="py-16">
          {/* 🔹 Sous-titre */}
          <h2 className="mb-8 text-2xl font-bold text-center text-blue-11">
            Mes Tarifs
          </h2>

          {/* 🔹 Grille des Tarifs */}
          <div className="grid grid-cols-1 gap-8 mb-4 md:grid-cols-3">
            {prices.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-start p-6 transition-transform duration-300 border rounded-lg shadow-md bg-blue-1 border-blue-6 "
              >
                <div className="flex items-center mx-auto mb-4">
                  <FontAwesomeIcon
                    icon={item.icon}
                    size="2x"
                    className="mr-3 text-blue-9"
                  />
                </div>
                <h3 className="mb-4 text-xl font-semibold text-blue-12">
                  {item.title}
                </h3>
                <ul className="mb-4 space-y-2 text-sm text-blue-11">
                  {item.description.map((point, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="mr-2 text-blue-9">🔹</span>
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

          {/* 🔹 Section Arguments */}
          <div className="p-6 mt-12 text-center rounded-lg shadow-sm bg-blue-2">
            <h2 className="text-lg font-semibold text-blue-12">
              🎯 Pourquoi choisir ces formules ?
            </h2>
            <p className="mt-4 text-blue-11">
              ✅ Un coaching adapté à ton emploi du temps et ton niveau
              <br />
              ✅ Un suivi sur mesure pour progresser efficacement
              <br />
              ✅ Un entraînement motivant et structuré, que ce soit en solo ou
              chez toi
              <br />
              👉 Prêt à te dépasser ? Réserve ta séance dès maintenant ! 💪🔥
            </p>
          </div>
        </section>
      </MaxWidthWrapper>
    </>
  );
};

export default Prices;
