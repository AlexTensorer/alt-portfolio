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
        <p id="l-about-p" className="text-lg mt-20">
          Before tech, I worked with giants of the financial industry in Fund
          and Wealth Management in both the UK and France. In 2023, I took a
          leap and trained in modern app development at Ecole O'clock. I quickly
          absorbed new concepts and put them into practice. I have ambitious
          ideas and bring a positive attitude to every challenge and every
          company I've worked at.
        </p>
        <br />
        <p id="l-about-p" className="text-lg">
          When I'm not coding, I'm usually at the gym, trying out a new recipe
          with my wife, playing punk-rock songs on the guitar, or on the
          trampoline with my daughter.
        </p>
      </div>
    </div>
  );
};

export default About;