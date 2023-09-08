import React from "react";
import altPhoto from "../assets/alt-photo.png";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-tech-img bg-contain bg-center opacity-1 pt-20 pb-8"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 sm:flex-row self-center	">
        <div
          id="home-animate-text"
          className="flex flex-col justify-center h-fit"
        >
          <h1
            id="l-home-h1"
            className="text-4xl mt-8 sm:text-6xl font-bold text-cus-black"
          >
            I'm AlexTensorer
            <br />
            Web Developer
          </h1>
          <h2 className="text-md sm:text-2xl py-4 tracking-[0.2em]">
            Fullstack Developer <span className="text-3xl">&#128187;</span>{" "}
            <br />{" "}
            <span className="line-through tracking-[0] font-light text-[12px]">
              Michelin-starred
            </span>{" "}
            Home Chef <span className="text-3xl">&#127859;</span> <br />{" "}
            Guitarist & Singer <span className="text-3xl">&#127928;</span>
          </h2>
        
          <div>
            <Link
              id="l-home-contact"
              to="contact"
              smooth
              duration={500}
              className="tracking-widest text-base cursor-pointer group text-black w-fit px-6 py-3 my-2 flex items-center rounded-md bg-cus-yellow"
            >
              Contact
              <span className="group-hover:rotate-90 duration-300">
                <MdKeyboardArrowRight className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div id="home-animate-img">
          <img
            id="l-home-img"
            src={altPhoto}
            alt="my profile"
            className="rounded-2xl mx-auto w-[220px] sm:w-[300px] sm:ml-5 lg:w-[450px] mt-4"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
