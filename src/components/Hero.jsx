import heroPicture from "../assets/trail3.jpg";
import MaxWidthWrapper from "./MaxWidthWrapper";

const Hero = () => {
  return (
    <>
      <MaxWidthWrapper>
        <div>
          <img
            src={heroPicture}
            alt="trail picture"
            className="mx-auto rounded-lg shadow-lg"
          />
        </div>

        <h1 className="mt-10 text-3xl font-extrabold text-center uppercase text-blue-12">
          Vincent Tenret, coach sportif sur la région Genevoise.
        </h1>
        <p className="mt-6 text-xl font-light text-center text-blue-11">
          Vincent organise pour vous un entraînement sur mesure qui s’adapte à
          votre condition physique, votre emploi du temps et vos objectifs pour
          des résultats optimaux.
        </p>
      </MaxWidthWrapper>
    </>
  );
};

export default Hero;
