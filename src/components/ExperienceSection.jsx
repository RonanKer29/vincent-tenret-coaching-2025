import { Medal, Gauge, Lightbulb } from "lucide-react";
import ProfileCard from "./ProfileCard";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Parcours & Expérience",
      description: [
        "Passionné de sport et de performance, Vincent pratique la course à pied et le trail depuis plus de 10 ans.",
        "Il s'est forgé une expertise en préparation physique à travers ses propres défis : ultra-trails, ski de randonnée et entraînements en endurance.",
        "Aujourd'hui, il met son expérience au service des autres pour les aider à atteindre leurs objectifs, du bien-être à la performance.",
      ],
      icon: Medal,
    },
    {
      title: "Spécialités & Domaines d’Expertise",
      description: [
        "Coaching adapté à tous les niveaux, que vous soyez débutant, en reprise ou sportif confirmé.",
        "Préparation physique et endurance (Marathon, Ultra-Trail, Ski Rando).",
        "Renforcement musculaire ciblé pour la performance et la prévention des blessures.",
        "Travail sur la mobilité, la souplesse et la récupération.",
        "Conseils alimentaires pour la performance et la récupération.",
      ],
      icon: Gauge,
    },
    {
      title: "Approche & Méthodologie",
      description: [
        "Plans d'entraînement personnalisés, adaptés à votre niveau et à vos objectifs.",
        "Accompagnement progressif et ajustements réguliers en fonction de vos sensations et performances.",
        "Suivi attentif pour optimiser récupération, motivation et progression.",
      ],
      icon: Lightbulb,
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
      {experiences.map((item, index) => (
        <ProfileCard
          key={index}
          title={item.title}
          description={item.description}
          icon={item.icon}
        />
      ))}
    </div>
  );
};

export default ExperienceSection;
