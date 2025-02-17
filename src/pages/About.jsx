import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import trailPic from "@/assets/trail.png";
import backgroundImage from "@/assets/dents-midi.jpg";
import ProfileSection from "@/components/ProfileSection";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const About = () => {
  return (
    <>
      {/* 🔹 Section d'introduction immersive */}
      <div className="relative bg-gray-100">
        {/* Image en arrière-plan */}
        <div className="absolute md:block hidden inset-0 w-[110%] h-full left-[-5%]">
          <img
            src={backgroundImage}
            alt="photo trail"
            className="object-cover w-full h-full opacity-20"
          />
        </div>

        {/* Contenu principal */}
        <MaxWidthWrapper>
          <div className="relative grid items-center grid-cols-1 gap-10 py-24 md:grid-cols-2">
            {/* 🔹 Texte impactant */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="z-10 flex flex-col justify-center text-center md:text-left"
            >
              <h1 className="text-4xl font-extrabold leading-tight text-gray-900 md:text-5xl">
                Transformez votre entraînement avec <br />
                <strong>un coaching expert et sur-mesure !</strong>
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-gray-700">
                Avec <strong>plus de 10 ans d'expérience</strong>, j’accompagne
                <strong> sportifs débutants et confirmés</strong> vers
                <strong> leurs objectifs de performance et bien-être</strong>.
                Spécialiste du{" "}
                <strong>Trail, Ultra Trail et Ski alpinisme</strong>, je vous
                propose un suivi personnalisé
                <strong> adapté à votre niveau et à votre quotidien</strong>.
              </p>
            </motion.div>

            {/* 🔹 Image principale */}
            <motion.img
              src={trailPic}
              alt="photo trail"
              className="relative z-10 object-cover w-full shadow-xl rounded-xl"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            />
          </div>
        </MaxWidthWrapper>
      </div>

      {/* 🔹 Présentation détaillée en structure fluide */}
      <MaxWidthWrapper>
        <div className="py-16 text-center md:text-left">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            Pourquoi choisir mon accompagnement ?
          </h2>

          {/* Points forts organisés */}
          <div className="grid gap-6 mt-8 md:grid-cols-2">
            <div>
              <h3 className="text-xl font-semibold text-blue-9">
                🏆 Expertise & Personnalisation
              </h3>
              <p className="mt-2 text-gray-700">
                Chaque programme est conçu sur mesure en fonction de{" "}
                <strong>vos besoins spécifiques</strong> : remise en forme,
                préparation à une course, renforcement musculaire, endurance.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-blue-9">
                🔥 Des résultats concrets
              </h3>
              <p className="mt-2 text-gray-700">
                Progression mesurable, performances améliorées,
                <strong> un encadrement précis et motivant</strong>
                pour vous aider à{" "}
                <strong>atteindre vos objectifs efficacement</strong>.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-blue-9">
                ⛰️ Stages et Coaching Outdoor
              </h3>
              <p className="mt-2 text-gray-700">
                Entraînements en extérieur ou en montagne pour une immersion
                totale dans votre discipline et une expérience unique.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-blue-9">
                📍 Coaching en présentiel et à distance
              </h3>
              <p className="mt-2 text-gray-700">
                <strong>Séances en salle, en extérieur ou en ligne</strong>{" "}
                selon vos préférences. Un suivi détaillé pour rester motivé où
                que vous soyez.
              </p>
            </div>
          </div>

          {/* 🔹 CTA Contact */}
          <div className="mt-20 text-center">
            <h3 className="text-2xl font-semibold text-gray-900">
              Prêt à atteindre vos objectifs ?
            </h3>
            <p className="mt-3 text-gray-700">
              <strong>Contactez-moi dès aujourd’hui</strong> pour un programme
              adapté et un suivi efficace.
            </p>
            <Button className="px-6 py-4 mt-6 text-lg font-semibold text-white transition bg-blue-9 hover:bg-blue-10 rounded-xl">
              📩 Me contacter
            </Button>
          </div>
        </div>
      </MaxWidthWrapper>

      {/* 🔹 Section Profil */}
      <ProfileSection />
    </>
  );
};

export default About;
