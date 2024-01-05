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
        Avant de plonger dans le monde de la tech,
        j'ai travaillé aux côtés de géants de l'industrie financière,
        dans le domaine de la gestion de fonds d'investissement et de la gestion de patrimoine, au Royaume-Uni et en France.
        En 2023, j'ai décidé de me former au développement web avec l'École O'clock.
        J'ai rapidement assimilé de nouveaux concepts et les ai mis en pratique.
        Je porte des idées ambitieuses et j'apporte une attitude positive à chaque défi
        et chaque entreprise avec qui je travaille.
        </p>
        <br />
        <p id="l-about-p" className="text-xl">
        
        </p>
      </div>
    </div>
  );
};

export default About;
