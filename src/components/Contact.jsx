import React from "react";

const Contact = () => {
  return (
    <div
    name="contact"
    className="w-full h-screen bg-cus-black p-4 text-white">
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-cus-yellow">Contact</p>
          <p className="py-6">N'hésitez pas à me contacter</p>
        </div>

        <div className="flex justify-center items-center">
          <form
          action="https://getform.io/f/ea58c914-148a-458b-934e-c21b82ecb03d"
          method="POST"
          className="flex flex-col w-full md:w-1/2">
            <input
              type="text"
              name="name"
              placeholder="Votre nom/prénom"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Votre email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Entrez votre message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>
            <button className="text-white bg-gradient-to-b from-cus-yellow to-black-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">Parlons!</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
