import React from "react";
import javascript from "../assets/javascript.png";
import node from "../assets/node.png";
import postgres from "../assets/postgres.png";
import mongo from "../assets/mongo.png";
import reactImage from "../assets/react.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import bootstrap from "../assets/bootstrap.png"
import agile from "../assets/agile.png"

const Technos = () => {
  const technos = [
    {
      id: 1,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 2,
      src: node,
      title: "Node.js",
      style: "shadow-green-500",
    },
    {
      id: 3,
      src: reactImage,
      title: "React",
      style: "shadow-blue-500",
    },
    {
      id: 4,
      src: postgres,
      title: "PostgreSQL",
      style: "shadow-blue-500",
    },
    {
      id: 5,
      src: mongo,
      title: "MongoDB",
      style: "shadow-green-500",
    },
    {
      id: 6,
      src: bootstrap,
      title: "Bootstrap",
      style: "shadow-purple-500",
    },
    {
      id: 7,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-500",
    },
    {
      id: 8,
      src: github,
      title: "Github",
      style: "shadow-gray-500",
    },
    {
      id: 9,
      src: agile,
      title: "Agile",
      style: "shadow-blue-500",
    },
  ];

  return (
    <div name="skills" className="bg-cus-dark-black w-full h-screen">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div className="pb-8">
          <p className="text-4xl font-bold border-b-4 border-cus-yellow p-2 inline">
            Skills
          </p>
          <p className="py-6">
            Before you say anything, I know HTML & CSS. I know them very well. However, it's self-evident, so why waste a grid-col on them?<span className="text-center text-2xl"> &#128521;</span></p>
        </div>

        <div className=" grid grid-cols-3 sm:grid-cols-3 gap-6 text-center py-4 px-8 sm:px-0">
          {technos.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={
                "shadow-sm hover:scale-105 duration-500 py-2 rounded-lg flex flex-col gap-2 justify-evenly" +
                " " +
                style
              }
            >
              <img
                src={src}
                alt=""
                className="mx-auto rounded-lg w-10 sm:w-20"
              />
              <p className="mt-4 text-[0.8rem] sm:text-base">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Technos;
