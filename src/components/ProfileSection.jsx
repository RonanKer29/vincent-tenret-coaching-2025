import ProfileCard from "./ProfileCard";
import { Medal, Gauge, Captions, CircleSmall } from "lucide-react";
import MaxWidthWrapper from "./MaxWidthWrapper";

const ProfileSection = () => {
  const presentations = {
    experience: [
      {
        title: "Expériences",
        description: [
          "Plus de 9 ans d’expérience dans le coaching sportif personnel.",
          "Passionné de sport et de toutes les méthodes liées au bien-être, Vincent en a fait sa profession depuis 2010.",
          "Du bien-être physique et mental à la performance, c’est dans l’écoute et la bienveillance qu’il saura vous accompagner dans vos entraînements.",
        ],
        icon: Medal,
      },
    ],
    speciality: [
      {
        title: "Spécialités",
        description: [
          "Perte de poids",
          "Remise en forme / Renforcement musculaire / Cardio-Training",
          "Gym douce / Relaxation / Étirement",
          "Préparation physique personnalisée en course à pied (Trail et course de 5km au marathon)",
          "Ski de randonnée",
        ],
        icon: Gauge,
      },
    ],
    qualification: [
      {
        title: "Qualifications",
        description: [
          "Formation nutrition du sportif, équilibre alimentaire et diabète",
          "Certification méthode Pilates",
        ],
        icon: Captions,
      },
    ],
  };

  const races = [
    {
      title: "HOKA UTMB MONT-BLANC - TDS",
      description: ["2024 : 155km - 9'580m D+", "2023 : 158km - 8'900m D+"],
      icon: Medal,
    },
    {
      title: "Ultra Trail Cote d'Azur Mercantour",
      description: ["2020 : 133km - 8'520m D+"],
      icon: Medal,
    },
    {
      title: "Le Grand Raid De La Réunion - La Diagonale Des Fous",
      description: [
        "2019 : 168km - 9'610m D+",
        "2018 : 168km - 9'610m D+",
        "2017 : 164km - 10'000m D+",
      ],
      icon: Medal,
    },
    {
      title: "Montreux Trail Festival",
      description: ["2024 : 76km - 4’211m D+", "2021: 70km - 4’890m D+"],
      icon: Medal,
    },
    {
      title: "MATTERHORN ULTRAKS - EXTREME",
      description: ["2021 : 21km - 2'300m D+"],
      icon: Medal,
    },
    {
      title: "SIERRE-ZINAL",
      description: ["2022 : 31km - 2'190m D+"],
      icon: Medal,
    },
  ];

  return (
    <div>
      <MaxWidthWrapper>
        <section id="qui-suis-je" className="py-10">
          {/* Grid des expériences */}
          <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-3">
            {presentations.experience.map((item, index) => (
              <ProfileCard key={index} {...item} />
            ))}
            {presentations.speciality.map((item, index) => (
              <ProfileCard key={index} {...item} />
            ))}
            {presentations.qualification.map((item, index) => (
              <ProfileCard key={index} {...item} />
            ))}
          </div>

          {/* Texte central */}
          <div>
            <p className="text-center text-xl mt-6 font-light px-6 py-3 rounded-md bg-gray-300 w-2/3 mx-auto">
              Performance / Nutrition / Silhouette : Vincent répond à vos
              objectifs
            </p>
          </div>

          {/* Section des races */}
          <h1 className="text-center text-3xl mt-10 uppercase font-extrabold">
            Ses expériences sportives
          </h1>
          <p className="text-center text-gray-500 mt-2">
            Une sélection des courses auxquelles Vincent a participé
          </p>
          {/* Grid des courses */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-8">
            {races.map((race, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg p-6 flex items-center space-x-4 hover:scale-105 transition-transform duration-300"
              >
                {/* Icône de médaille */}
                <race.icon className="w-12 h-12 text-brand flex-shrink-0" />

                {/* Détails de la course */}
                <div className="max-w-2/3">
                  <h2 className="text-xl font-bold text-gray-800">
                    {race.title}
                  </h2>
                  <ul className="text-gray-600 mt-2 space-y-1">
                    {race.description.map((desc, i) => (
                      <li key={i} className="flex items-center">
                        <CircleSmall className="w-4 h-4 text-brand mr-2" />{" "}
                        {desc}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center  mt-10 gap-10">
            <h1 className="text-3xl uppercase font-extrabold">Il Pratique:</h1>
            <p className="text-xl px-6 py-3 rounded-md bg-gray-300">Le Trail</p>
          </div>
        </section>
      </MaxWidthWrapper>
    </div>
  );
};

export default ProfileSection;
