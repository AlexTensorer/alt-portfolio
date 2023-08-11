import React from "react";
import altPhoto from "../assets/alt-photo.png";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-tech-img bg-contain bg-center opacity-1"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 sm:flex-row self-center	">
        <div
          id="home-animate-text"
          className="flex flex-col justify-center h-fit"
        >
          <h1
            id="l-home-h1"
            className="text-4xl sm:text-6xl font-bold text-cus-black"
          >
            I'm AlexTensorer
            <br />
            Web Developer
          </h1>
          <h2 className="text-sm sm:text-md py-4 tracking-[0.2em] font-semibold">
            Fullstack Developer <span className="text-2xl">&#128187;</span>{" "}
            <br />{" "}
            <span className="line-through tracking-[0.15m] font-light text-[9px]">
              Michelin-starred
            </span>{" "}
            Home Chef <span className="text-2xl">&#127859;</span> <br />{" "}
            Guitarist & Singer <span className="text-2xl">&#127928;</span>
          </h2>
          <p className="text-cus-light-black py-2 max-w-fit hidden lg:block font-medium">
            I love to code. I love sitting at my desk, and pulling out what is
            left of my hair, figuring out why my varible is{" "}
            <span className="font-light">undefined</span>, why my code runs
            without throwing errors but doesn't produce the expected output, and
            realising... I never actually called my function(). <br /> <br /> I{" "}
            <strong className="underline underline-offset-4">love</strong> what
            I do.
          </p>
          <div>
            <Link
              to="contact"
              smooth
              duration={500}
              className="tracking-widest cursor-pointer group text-black w-fit px-6 py-3 my-2 flex items-center rounded-md bg-cus-yellow"
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
            className="rounded-2xl mx-auto w-[230px] sm:w-[300px] sm:ml-5 lg:w-[900px] mt-4"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
