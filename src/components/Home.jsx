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
      <div className="max-w-screen-xl mx-auto flex flex-col items-center justify-center h-full px-4 lg:flex-row">
          <div
            id="home-animate-text"
            className="flex flex-col justify-center h-fit"
          >
            <h1 className="text-4xl sm:text-6xl font-bold text-cus-black">
              I'm AlexTensorer
              <br />
              Web Developer
            </h1>
            <h2 className="text-sm sm:text-md py-4 tracking-[0.3em] font-semibold">
              Fullstack Developer <span className="text-2xl">&#128187;</span>{" "}
              <br />{" "}
              <span className="line-through font-light text-sm">
                Michelin-starred
              </span>{" "}
              Home Chef <span className="text-2xl">&#127859;</span> <br />{" "}
              Guitarist & Singer <span className="text-2xl">&#127928;</span>
            </h2>
            <p className="text-cus-light-black py-2 max-w-fit hidden lg:block">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quibusdam, incidunt reprehenderit earum minus necessitatibus
              obcaecati. Eos ipsa ipsum, recusandae totam delectus molestiae
              illo eaque, quos possimus saepe fugit quisquam accusamus animi
              nisi sed vero, facere quae et consectetur dicta quia?
            </p>
            <div>
              <Link
                id="contact-animate"
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
              src={altPhoto}
              alt="my profile"
              className="rounded-2xl mx-auto w-[230px] sm:w-[30%] lg:w-[55%] mt-4"
            />
          </div>
      </div>
    </div>
  );
};

export default Home;
