import React from "react";

const About = () => {
  return (
    <div
    id="l-about"
    name="about"
    className="w-full h-screen bg-cus-dark-black text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 p-2 border-cus-yellow">
            About
          </p>
        </div>
        <p id="l-about-p" className="text-xl mt-15">
        Avant de plonger dans le monde de la technologie,
        j'ai œuvré aux côtés de géants de l'industrie financière,
        dans le domaine de la gestion de fonds et du patrimoine, tant au Royaume-Uni qu'en France.
        En 2023, j'ai décidé de me former au développement web avec l'École O'clock.
        J'ai rapidement assimilé de nouveaux concepts et les ai mis en pratique.
        Je porte des idées ambitieuses et j'apporte une attitude positive à chaque défi
        et chaque entreprise avec qui je travaille.
        </p>
        <br />
        <p id="l-about-p" className="text-xl">
        Lorsque je ne suis pas plongé dans le code,
        vous me trouverez généralement à la salle de sport,
        en train d'explorer de nouvelles recettes avec ma femme,
        jouant des morceaux de punk-rock à la guitare,
        ou sur le trampoline avec ma fille.
        </p>
      </div>
    </div>
  );
};

export default About;