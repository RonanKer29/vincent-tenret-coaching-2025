import { Facebook, Instagram } from "lucide-react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import signature from "../assets/Vincent-Tenret-signature.png";

const Footer = () => {
  return (
    <>
      <div className="flex justify-center items-center h-20 bg-gray-800 text-white">
        <div className="uppercase flex mr-6 font-bold">Suivez moi sur :</div>
        <Facebook className="w-8 h-8 mr-6 text-white" />
        <Instagram className="w-8 h-8 text-white" />
      </div>

      <div className="flex justify-center items-center bg-gray-200 text-gray-800 py-4 h-auto">
        <MaxWidthWrapper>
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-8 mt-8 md:mt-1">
            <img src={signature} alt="Vincent Tenret" className="h-12" />

            <div className="hidden md:block w-[1px] h-16 bg-black/30 md:h-24 md:w-[1px]"></div>

            <p className="w-full md:w-2/3 px-4 text-sm  md:text-left text-justify">
              Votre coach sportif à Genève Que vous soyez débutant ou athlète
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

      <div className="flex justify-center text-center items-center h-auto bg-gray-100 text-gray-800">
        <MaxWidthWrapper>
          <p className="text-sm py-4">
            Coach Vincent | Mentions légales | Conception et réalisation : Ronan
            Kervella
          </p>
        </MaxWidthWrapper>
      </div>
    </>
  );
};

export default Footer;
