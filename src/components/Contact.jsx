import React from "react";

const Contact = () => {
  return (
    <div
    id="l-contact"
    name="contact"
    className="w-full h-screen bg-cus-black p-4 text-white">
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-cus-yellow">
            Contact
          </p>
          <p className="py-6 text-xl">
            N'hésitez pas à me contacter. <br /> Nous pourrons parler de mon expérience,
            mes compétences, votre entreprise, vos collègues, vos projets,
            et la pluie et le beau temps
          </p>
        </div>

        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/ea58c914-148a-458b-934e-c21b82ecb03d"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              required
              type="text"
              name="name"
              placeholder="Votre nom et prénom"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              required
              type="text"
              name="email"
              placeholder="Email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              required
              name="message"
              placeholder="Quand êtes-vous disponible pour un entretien?"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>
            <button className="text-white bg-gradient-to-b from-cus-yellow to-black-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              A bientôt !
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;