import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-cus-dark-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 p-2 border-cus-yellow">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore
          tempora reiciendis a obcaecati ipsa, deleniti eum ullam, quis magni
          dignissimos reprehenderit accusantium optio harum explicabo eius sequi
          corrupti ab culpa amet, doloribus possimus dolor et atque! Molestias
          consequuntur facilis earum magni possimus aliquam maxime, maiores
          beatae eveniet numquam eos dignissimos?
        </p>
        <br />
        <p className="text-xl">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae
          mollitia unde doloribus rerum nobis error veritatis corrupti enim
          quos, fugiat quis perferendis totam?
        </p>
      </div>
    </div>
  );
};

export default About;
