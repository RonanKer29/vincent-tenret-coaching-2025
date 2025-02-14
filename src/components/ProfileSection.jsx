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

  const sportsList = [
    "Trail",
    "Ski de randonnée",
    "Vélo de route",
    "Course à pied",
    "Natation",
  ];

  return (
    <div className="bg-blue-1">
      <MaxWidthWrapper>
        <section id="qui-suis-je" className="py-10">
          {/* 🔹 Section Présentation */}
          <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-3">
            {Object.values(presentations)
              .flat()
              .map((item, index) => (
                <ProfileCard key={index} {...item} />
              ))}
          </div>

          {/* 🔹 Section Information */}
          <div>
            <p className="w-2/3 px-6 py-3 mx-auto mt-6 text-xl font-light text-center rounded-md bg-blue-3 text-blue-11">
              Performance / Nutrition / Silhouette : Vincent répond à vos
              objectifs
            </p>
          </div>

          {/* 🔹 Section Expériences Sportives */}
          <h1 className="mt-10 text-3xl font-extrabold text-center uppercase text-blue-12">
            Ses expériences sportives
          </h1>
          <p className="mt-2 text-center text-blue-11">
            Une sélection des courses auxquelles Vincent a participé
          </p>

          {/* 🔹 Liste des courses */}
          <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2 lg:grid-cols-2">
            {races.map((race, index) => (
              <div
                key={index}
                className="flex items-center p-6 space-x-4 transition-transform duration-300 border rounded-lg shadow-lg bg-blue-2 border-blue-6 hover:scale-105"
              >
                <race.icon className="flex-shrink-0 w-12 h-12 text-blue-9" />

                <div className="max-w-2/3">
                  <h2 className="text-xl font-bold text-blue-12">
                    {race.title}
                  </h2>
                  <ul className="mt-2 space-y-1 text-blue-11">
                    {race.description.map((desc, i) => (
                      <li key={i} className="flex items-center">
                        <CircleSmall className="w-4 h-4 mr-2 text-blue-8" />{" "}
                        {desc}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* 🔹 Liste des sports pratiqués */}
          <div className="flex flex-col items-center gap-6 mt-10 text-center md:flex-row md:gap-10 md:text-left">
            <h1 className="text-2xl font-extrabold uppercase md:text-3xl text-blue-12">
              Je Pratique :
            </h1>

            <div className="flex flex-wrap justify-center gap-6 md:justify-start">
              {sportsList.map((sport, index) => (
                <div
                  key={index}
                  className="flex items-center w-full px-6 py-4 space-x-4 transition-transform duration-300 border rounded-lg shadow-lg bg-blue-2 border-blue-6 hover:scale-105 md:w-auto"
                >
                  <div className="max-w-2/3">
                    <h2 className="text-lg font-bold text-blue-12 md:text-xl">
                      {sport}
                    </h2>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </MaxWidthWrapper>
    </div>
  );
};

export default ProfileSection;
