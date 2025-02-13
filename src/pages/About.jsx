import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import trailPic from "@/assets/trail.png";
import ProfileSection from "@/components/ProfileSection";

const About = () => {
  return (
    <>
      <MaxWidthWrapper>
        <div className="p-4 md:p-6 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          {/* Image responsive */}
          <img
            src={trailPic}
            alt="photo trail"
            className="w-full h-auto md:h-full max-h-[300px] md:max-h-[400px] object-cover rounded-lg"
          />

          {/* Texte bien aligné et centré sur mobile */}
          <div className="flex flex-col justify-center text-center md:text-left">
            <p className="text-gray-800 text-justify px-4 md:px-6">
              <strong>
                Vincent Tenret, coach sportif et préparateur physique
              </strong>
              <br />
              <br />
              Passionné de montagne et de sport, je suis coach sportif et
              préparateur physique à Genève depuis plus de 10 ans. Spécialiste
              du{" "}
              <strong>
                Trail running, de l’Ultra Trail et du ski alpinisme
              </strong>
              , j’accompagne des sportifs de tous niveaux avec un{" "}
              <strong>coaching sur mesure</strong>, adapté à votre profil, vos
              objectifs et votre mode de vie.
              <br />
              <br />
              📍 <strong>Coaching individuel et collectif</strong> à Genève, en
              salle, en extérieur ou à domicile.
              <br />
              🏔 <strong>Plans d’entraînement personnalisés</strong>, de la
              remise en forme à la préparation aux compétitions.
              <br />⛰ <strong>Stages en montagne</strong> : Trail, Ultra Trail,
              Randonnée active, en France, Suisse et Italie.
              <br />
              <br />
            </p>
          </div>
        </div>

        {/* Texte sous la section sur mobile, bien centré */}
        <p className="w-full p-4 md:p-6 text-center md:text-left">
          Que vous souhaitiez progresser, vous surpasser ou simplement retrouver
          la forme, je vous guide avec bienveillance et exigence vers votre
          réussite. Mon objectif ? Vous aider à atteindre le vôtre ! 💪
          <br />
          📩 Contactez-moi dès aujourd’hui pour un accompagnement personnalisé.
        </p>
      </MaxWidthWrapper>

      <ProfileSection />
    </>
  );
};

export default About;
