import MaxWidthWrapper from "./MaxWidthWrapper";
import { Medal, Gauge, Captions } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const ProfileSection = () => {
  const [activeSection, setActiveSection] = useState("experiences");

  const presentations = [
    {
      title: "Expériences",
      description: [
        "Plus de 9 ans d’expérience dans le coaching sportif personnel.",
        "Passionné de sport et de bien-être, Vincent en a fait sa profession depuis 2010.",
        "Du bien-être physique et mental à la performance, il saura vous accompagner avec bienveillance.",
      ],
      icon: Medal,
    },
    {
      title: "Spécialités",
      description: [
        "Perte de poids",
        "Renforcement musculaire / Cardio-Training",
        "Gym douce / Relaxation / Étirement",
        "Préparation physique personnalisée pour le Trail, marathon et ski de randonnée",
      ],
      icon: Gauge,
    },
    {
      title: "Qualifications",
      description: [
        "Formation nutrition du sportif, équilibre alimentaire et diabète",
        "Certification méthode Pilates",
      ],
      icon: Captions,
    },
  ];

  const races = [
    {
      title: "HOKA UTMB MONT-BLANC - TDS",
      details: "2024 : 155km - 9'580m D+ | 2023 : 158km - 8'900m D+",
    },
    {
      title: "Ultra Trail Cote d'Azur Mercantour",
      details: "2020 : 133km - 8'520m D+",
    },
    {
      title: "Le Grand Raid De La Réunion - La Diagonale Des Fous",
      details: "2019-2018-2017 : 168km - 9'610m D+",
    },
    {
      title: "Montreux Trail Festival",
      details: "2024 : 76km - 4’211m D+ | 2021: 70km - 4’890m D+",
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
    <div className="pt-16 bg-blue-1">
      <MaxWidthWrapper>
        {/* 🔹 Présentation avec Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {presentations.map((item, index) => (
            <Card
              key={index}
              className="shadow-md border border-blue-6 bg-blue-2 transition-transform hover:scale-[1.02]"
            >
              <CardHeader className="flex flex-col items-center text-center">
                <item.icon className="w-10 h-10 text-blue-9" />
                <CardTitle className="mt-4 text-xl font-semibold text-blue-12">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-blue-11">
                  {item.description.map((desc, i) => (
                    <li key={i} className="flex items-start">
                      <span className="mr-2 text-blue-9">✔</span> {desc}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="w-full my-24 border border-blue-4"></div>
        {/* 🔹 Boutons pour basculer entre Expériences Sportives & Sports Pratiqués */}
        <div className="flex justify-center mt-16 space-x-4">
          <Button
            variant={activeSection === "experiences" ? "default" : "outline"}
            onClick={() => setActiveSection("experiences")}
          >
            🏆 Expériences Sportives
          </Button>
          <Button
            variant={activeSection === "sports" ? "default" : "outline"}
            onClick={() => setActiveSection("sports")}
          >
            💪 Sports Pratiqués
          </Button>
        </div>

        {/* 🔹 Contenu affiché selon la section active */}
        <div className="mt-8">
          {activeSection === "experiences" && (
            <Accordion type="single" collapsible className="mt-6">
              {races.map((race, index) => (
                <AccordionItem
                  key={index}
                  value={`race-${index}`}
                  className="mb-2 rounded-lg shadow-md border-blue-6 bg-blue-2"
                >
                  <AccordionTrigger className="p-4 text-lg font-bold text-blue-12">
                    {race.title}
                  </AccordionTrigger>
                  <AccordionContent className="p-4 text-blue-11">
                    {race.details}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          )}

          {activeSection === "sports" && (
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              {sportsList.map((sport, index) => (
                <Badge
                  key={index}
                  className="px-4 py-2 text-lg border shadow-sm bg-blue-2 text-blue-12 border-blue-6"
                >
                  {sport}
                </Badge>
              ))}
            </div>
          )}
        </div>
        <div className="w-full my-24 border border-blue-4"></div>
      </MaxWidthWrapper>
    </div>
  );
};

export default ProfileSection;
