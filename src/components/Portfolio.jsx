import React from "react";
import aliskitchen from "../assets/portfolio/alis-kitchen.jpg";
import campadvisor from "../assets/portfolio/camp-advisor.jpg";
import oinvest from "../assets/portfolio/oinvest.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: aliskitchen,
      hrefdemo: "https://alis-kitchen.onrender.com",
      hrefcode: "https://github.com/AlexTensorer/Ali-s-Kitchen",
      desc: "Ali's Kitchen est un site de partage de recettes fait avec JavaScript, Node.js, PostgreSQL, EJS & Bootstrap. Free tier service: veuillez laisser un temps de chargement plus long",
    },
    {
      id: 2,
      src: campadvisor,
      hrefdemo: "https://github.com/AlexTensorer/Camp-Advisor",
      hrefcode: "https://github.com/AlexTensorer/Camp-Advisor",
      desc: "Camp Advisor est un projet d'avis Camping fictif. J'ai changé Postgres pour MongoDB et Bootstrap pour Bulma. Demo arrive bientôt",
    },
    {
      id: 3,
      src: oinvest,
      hrefdemo: "/",
      hrefcode: "/",
      desc: "O'Invest une app pour tracker la performance de vos investissements financier. Demo et source code seront posté mi-septembre",
    },
  ];

  return (
    <div
      id="l-portfolio"
      name="portfolio"
      className="bg-cus-black w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 p-2 border-cus-yellow">
            Portfolio
          </p>
          <p className="py-6"></p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, hrefdemo, hrefcode, desc }) => (
            <div
              key={id}
              className="flex flex-col justify-between shadow-md hover:scale-105 duration-500 shadow-gray-600 rounded-lg"
            >
              <img src={src} alt="" className="rounded-md duration-200 h-fit" />
              <div className="text-md flex items-center justify-center py-4 px-4">
                {desc}
              </div>

              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={hrefdemo} target="_blank" rel="noreferrer">
                    Demo
                  </a>
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={hrefcode} target="_blank" rel="noreferrer">
                    Code
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;