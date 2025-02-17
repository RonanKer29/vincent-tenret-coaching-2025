import { Medal, Gauge, Captions } from "lucide-react";
import ProfileCard from "./ProfileCard";

const ExperienceSection = () => {
  const experiences = [
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
