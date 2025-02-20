import heroPicture from "../assets/trail3.jpg";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative w-full h-[85vh] flex items-center justify-center text-center">
      {/* Image en arrière-plan */}
      <div className="absolute inset-0">
        <img
          src={heroPicture}
          alt="trail picture"
          className="object-cover w-full h-full brightness-75"
        />
      </div>

      {/* Contenu de la Hero Section */}
      <MaxWidthWrapper>
        <div className="relative max-w-3xl px-6 py-12 rounded-lg shadow-xl bg-white/90 backdrop-blur-md">
          <h1 className="text-4xl font-extrabold uppercase text-blue-12">
            Vincent Tenret, coach sportif sur la région Genevoise
          </h1>
          <p className="mt-4 text-lg font-light text-blue-11">
            Vincent organise pour vous un entraînement sur mesure qui s’adapte à
            votre condition physique, votre emploi du temps et vos objectifs
            pour des résultats optimaux.
          </p>

          {/* Bouton d'appel à l'action */}
          <div className="mt-6">
            <Link
              to="/contact"
              className="px-6 py-3 text-lg font-bold text-white uppercase transition shadow-md rounded-xl bg-blue-12 hover:bg-blue-9"
            >
              Prendre rendez-vous
            </Link>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Hero;
