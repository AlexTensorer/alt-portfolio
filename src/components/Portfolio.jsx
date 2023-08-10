import React from "react";
import aliskitchen from "../assets/portfolio/alis-kitchen.jpg";
import campadvisor from "../assets/portfolio/camp-advisor.jpg";
import altport from "../assets/portfolio/alt-port.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: aliskitchen,
      hrefdemo: "https://alis-kitchen.onrender.com",
      hrefcode: "https://github.com/AlexTensorer/Ali-s-Kitchen",
      desc: "Ali's Kitchen is a recipe sharing website made with JavaScript, Node.js, PostgreSQL, EJS & Bootstrap. As a free tier service, please allow for a longer load time",
    },
    {
      id: 2,
      src: campadvisor,
      hrefdemo: "https://github.com/AlexTensorer/Camp-Advisor",
      hrefcode: "https://github.com/AlexTensorer/Camp-Advisor",
      desc: "Camp Advisor is a campground review project from my Bootcamp. It's the same stack as Ali's Kitchen but I swapped out Postgres for MongoDB and Bulma for Bootstrap. Demo is coming soon.",
    },
    {
      id: 3,
      src: altport,
      hrefdemo: "https://alex-t.netlify.app/",
      hrefcode: "https://github.com/AlexTensorer/alt-portfolio",
      desc: "Indeed ! Even my portfolio is a project. After my Bootcamp, I wanted to futher explore React and couple it with Tailwind CSS",
    },
  ];

  return (
    <div
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
            <div className="flex flex-col justify-between shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105 h-fit"
              />
              <div className="flex items-center justify-self-center py-4 px-4">
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
