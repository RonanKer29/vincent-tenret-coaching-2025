import { useState } from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import ExperienceSection from "./ExperienceSection";
import RaceItem from "./RaceItem";
import { Button } from "@/components/ui/button";
import SportsSection from "./SportsList";

const ProfileSection = () => {
  const [activeSection, setActiveSection] = useState("experiences");

  const races = [
    {
      title: "HOKA UTMB MONT-BLANC - TDS",
      year: "2024 & 2023",
      distance: "155km & 158km",
      elevation: "9'580m D+ & 8'900m D+",
    },
    {
      title: "Ultra Trail Cote d'Azur Mercantour",
      year: "2020",
      distance: "133km",
      elevation: "8'520m D+",
    },
    {
      title: "La Diagonale Des Fous - La Réunion",
      year: "2019-2018-2017",
      distance: "168km",
      elevation: "9'610m D+",
    },
    {
      title: "Montreux Trail Festival",
      year: "2024 & 2021",
      distance: "76km & 70km",
      elevation: "4'211m D+ & 4'890m D+",
    },
  ];

  return (
    <div className="pt-16 bg-gray-50">
      <MaxWidthWrapper>
        {/* 🔹 Section Expériences */}
        <ExperienceSection />

        <div className="w-full my-24 border border-gray-300"></div>

        {/* 🔹 Boutons pour basculer entre Expériences Sportives & Sports Pratiqués */}
        <div className="flex justify-center mt-16 space-x-2">
          <Button
            variant={activeSection === "experiences" ? "default" : "outline"}
            onClick={() => setActiveSection("experiences")}
            className={`px-6 py-2 font-semibold ${
              activeSection === "experiences"
                ? "bg-blue-700 text-white"
                : "bg-blue-2 text-gray-900"
            }`}
          >
            🏆 Expériences Sportives
          </Button>
          <Button
            variant={activeSection === "sports" ? "default" : "outline"}
            onClick={() => setActiveSection("sports")}
            className={`px-6 py-2 font-semibold ${
              activeSection === "sports"
                ? "bg-blue-700 text-white"
                : "bg-blue-2 text-gray-900"
            }`}
          >
            💪 Sports Pratiqués
          </Button>
        </div>

        {/* 🔹 Contenu affiché selon la section active */}
        <div className="mt-8">
          {activeSection === "experiences" && (
            <section className="mt-8 text-center">
              <h1 className="font-semibold text-left text-gray-900">
                Quelques-unes de mes courses :
              </h1>
              <div className="grid gap-6 mt-10 sm:grid-cols-2 ">
                {races.map((race, index) => (
                  <RaceItem key={index} {...race} />
                ))}
              </div>
              {/* Lien vers le profil ITRA */}
              <p className="mt-16 text-lg font-semibold text-blue-12">
                📌 Consultez mon profil ITRA :
              </p>
              <a
                href="https://itra.run/api/RunnerSpace/GetRunnerSpace?memberString=EZZf%2BXnR4ENACH1Y5KthaQ%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 mt-4 font-semibold text-white transition rounded-lg bg-blue-9 hover:bg-blue-10"
              >
                Voir mon profil ITRA
              </a>
            </section>
          )}

          {activeSection === "sports" && <SportsSection />}
        </div>

        <div className="w-full my-24 border border-gray-300"></div>
      </MaxWidthWrapper>
    </div>
  );
};

export default ProfileSection;
