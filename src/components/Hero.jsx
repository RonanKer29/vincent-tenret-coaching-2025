import heroPicture from "../assets/trail3.jpg";
import MaxWidthWrapper from "./MaxWidthWrapper";

const Hero = () => {
  return (
    <>
      <MaxWidthWrapper>
        <div>
          <img src={heroPicture} alt="trail picture" className=" mx-auto" />
        </div>

        <h1 className="text-center text-3xl mt-10 uppercase font-extrabold">
          Vincent Tenret, coach sportif sur la région Genevoise.
        </h1>
        <p className="text-center text-xl mt-6 font-light">
          Vincent organise pour vous un entraînement sur mesure qui s’adapte à
          votre condition physique, votre emploi du temps et vos objectifs pour
          des résultats optimaux.
        </p>
      </MaxWidthWrapper>
    </>
  );
};

export default Hero;
