import { Facebook, Instagram } from "lucide-react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import signature from "../assets/Vincent-Tenret-signature.png";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <>
      {/* 🔹 Section Réseaux Sociaux */}
      <div className="flex flex-col items-center justify-center h-24 text-white bg-blue-8">
        <span className="mb-2 text-lg font-bold uppercase">
          Suivez-moi sur :
        </span>
        <div className="flex space-x-6">
          <Facebook className="w-8 h-8 transition cursor-pointer hover:text-blue-2" />
          <Instagram className="w-8 h-8 transition cursor-pointer hover:text-blue-2" />
        </div>
      </div>

      {/* 🔹 Section Informations */}
      <div className="py-12 bg-blue-2 text-blue-12">
        <MaxWidthWrapper>
          <div className="flex flex-col items-center md:flex-row md:justify-between md:space-x-8">
            {/* 🔹 Signature */}
            <img
              src={signature}
              alt="Vincent Tenret"
              className="mb-6 h-14 md:mb-0"
            />

            {/* 🔹 Séparateur Vertical */}
            <div className="hidden md:block w-[2px] h-20 bg-blue-6"></div>

            {/* 🔹 Texte d'info */}
            <div className="max-w-2xl text-sm leading-relaxed text-center md:text-left text-blue-11">
              <p>
                <strong>Votre coach sportif à Genève</strong> - Que vous soyez{" "}
                <strong>débutant</strong> ou <strong>athlète confirmé</strong>,
                je vous propose un <strong>coaching sportif sur mesure</strong>,
                adapté à votre niveau, vos objectifs et votre emploi du temps.
              </p>
              <p className="mt-4">
                Passionné de montagne et pratiquant de{" "}
                <strong>Trail running</strong> et{" "}
                <strong>ski de randonnée</strong>, j’ai développé une expertise
                en{" "}
                <strong>
                  préparation physique et entraînement en endurance
                </strong>
                . Mon objectif est d’accompagner chacun, qu’il soit sportif
                aguerri ou en reprise, vers ses propres réussites sportives et
                personnelles.
              </p>
              <p className="mt-4 font-semibold text-blue-12">
                Ensemble, atteignons vos objectifs avec{" "}
                <strong>motivation</strong> et <strong>bienveillance</strong>.
              </p>
              <p className="mt-4 font-semibold text-blue-10">
                Contactez-moi dès aujourd’hui pour un{" "}
                <strong>accompagnement personnalisé</strong> !
              </p>
              <Button className="px-6 py-4 mt-6 text-lg font-semibold text-white transition bg-blue-9 hover:bg-blue-10 rounded-xl">
                <a href="/contact" className="">
                  📩 Me contacter
                </a>
              </Button>
            </div>
          </div>
        </MaxWidthWrapper>
      </div>

      {/* 🔹 Section Mentions Légales */}
      <div className="py-4 text-sm text-center bg-blue-1 text-blue-12">
        <MaxWidthWrapper>
          <p>
            <strong>Coach Vincent</strong> |{" "}
            <a href="/" className="hover:underline">
              Mentions légales
            </a>{" "}
            | Conception et réalisation : <strong>Ronan Kervella</strong>
          </p>
        </MaxWidthWrapper>
      </div>
    </>
  );
};

export default Footer;
