import { Facebook, Instagram } from "lucide-react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import signature from "../assets/Vincent-Tenret-signature.png";

const Footer = () => {
  return (
    <>
      {/* 🔹 Section Réseaux Sociaux */}
      <div className="flex items-center justify-center h-20 text-white bg-blue-9">
        <div className="flex mr-6 font-bold uppercase">Suivez-moi sur :</div>
        <Facebook className="w-8 h-8 mr-6 text-white transition hover:text-blue-2" />
        <Instagram className="w-8 h-8 text-white transition hover:text-blue-2" />
      </div>

      {/* 🔹 Section Informations */}
      <div className="flex items-center justify-center h-auto py-8 text-blue-12 bg-blue-2">
        <MaxWidthWrapper>
          <div className="flex flex-col items-center justify-between space-y-6 md:flex-row md:space-y-0 md:space-x-8">
            <img src={signature} alt="Vincent Tenret" className="h-12" />

            <div className="hidden md:block w-[1px] h-16 bg-blue-6 md:h-24 md:w-[1px]"></div>

            <p className="w-full px-4 text-sm text-justify md:w-2/3 md:text-left text-blue-11">
              Votre coach sportif à Genève - Que vous soyez débutant ou athlète
              confirmé, je vous propose un coaching sportif sur mesure, adapté à
              votre niveau, vos objectifs et votre emploi du temps. Passionné de
              montagne et sportif de haut niveau en Trail running et ski
              alpinisme, j’accompagne mes clients depuis plus de 10 ans vers
              leurs réussites sportives et personnelles. 🚀 Ensemble, atteignons
              vos objectifs avec motivation et bienveillance. 📩 Contactez-moi
              dès aujourd’hui pour un accompagnement personnalisé !
            </p>
          </div>
        </MaxWidthWrapper>
      </div>

      {/* 🔹 Section Mentions Légales */}
      <div className="flex items-center justify-center h-auto text-center text-blue-12 bg-blue-1">
        <MaxWidthWrapper>
          <p className="py-4 text-sm">
            Coach Vincent | Mentions légales | Conception et réalisation : Ronan
            Kervella
          </p>
        </MaxWidthWrapper>
      </div>
    </>
  );
};

export default Footer;
