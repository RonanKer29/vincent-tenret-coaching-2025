"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import MaxWidthWrapper from "./MaxWidthWrapper";
import TestimonialCard from "./TestimonialCard";

// Données des témoignages
const testimonials = [
  {
    title: "Julien – 34 ans – Consultant en entreprise",
    boost: "« J’ai retrouvé mon énergie et une vraie discipline sportive ! »",
    description:
      "Après des années passées à enchaîner les journées de travail sans vraiment prendre soin de mon corps, j’ai décidé de me reprendre en main. Dès les premières séances, j’ai senti une vraie différence : des exercices adaptés à mon niveau, un coaching motivant et une approche bienveillante qui m’a poussé à me surpasser sans jamais me sentir jugé. Aujourd’hui, je me sens plus fort, plus en forme et surtout plus motivé que jamais pour continuer cette routine ! Je recommande sans hésiter à tous ceux qui veulent retrouver une condition physique optimale avec un accompagnement pro et dynamique.",
  },
  {
    title: "Camille – 29 ans – Maman et entrepreneuse",
    boost: "« Des séances sur-mesure qui m’ont redonné confiance en moi »",
    description:
      "Avec deux jeunes enfants et un travail prenant, je n’avais plus vraiment de temps pour moi. J’ai longtemps repoussé l’idée de me remettre au sport, par peur de ne pas tenir le rythme ou de ne pas savoir par où commencer. Grâce au coaching personnalisé, j’ai repris goût à l’effort, sans pression, avec des séances parfaitement adaptées à mon niveau et à mes objectifs. Résultat ? Une meilleure posture, plus d’énergie au quotidien et une confiance en moi retrouvée ! Merci pour cet accompagnement bienveillant et motivant.",
  },
  {
    title: "Thomas – 42 ans – Passionné de randonnée",
    boost:
      "« Un entraînement structuré qui m’a préparé pour mon plus grand défi »",
    description:
      "J’avais un objectif clair : préparer une expédition de plusieurs jours en montagne. Je savais que ma condition physique n’était pas suffisante, mais je ne savais pas comment l’améliorer efficacement. Grâce à un programme ciblé, j’ai pu renforcer mon endurance, améliorer ma récupération et apprendre à mieux gérer mon effort. Le jour J, j’étais au top de ma forme, capable de repousser mes limites sans me blesser. Une expérience incroyable rendue possible grâce à ce coaching !",
  },
];

const Testimonials = () => {
  return (
    <div className="relative py-12 bg-blue-1">
      <MaxWidthWrapper>
        <h1 className="text-3xl font-extrabold text-center uppercase text-blue-12">
          Témoignages
        </h1>

        {/* Conteneur du carrousel */}
        <div className="relative w-full max-w-4xl mx-auto mt-10 mb-20">
          {/* Swiper avec pagination externalisée */}
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ el: ".custom-pagination", clickable: true }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            spaceBetween={30}
            slidesPerView={1}
            className="w-full"
          >
            {testimonials.map((user, index) => (
              <SwiperSlide key={index} className="relative">
                {/* Assurer que chaque témoignage a la même hauteur */}
                <div className="relative flex flex-col items-center h-auto">
                  <TestimonialCard user={user} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Pagination placée sous chaque témoignage */}
          <div className="flex justify-center custom-pagination"></div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Testimonials;
