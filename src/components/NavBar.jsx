import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "technos",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  return (
    <div
    id="l-nav"
    className="flex justify-between items-center w-full h-20 px-4 text-white fixed bg-cus-black">
      <div>
        <Link
          to="home"
          smooth
          duration={500}
          className="text-6xl font-bold font-signature ml-2 text-cus-yellow cursor-pointer"
        >
          ALT
        </Link>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-cus-yellow hover:scale-105 duration-200"
          >
            <Link key={id} to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? (
          <FaTimes size={30} className="text-cus-yellow" />
        ) : (
          <FaBars size={30} className="text-cus-yellow" />
        )}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-cus-light-blue text-cus-black font-bold">
          {links.map(({ id, link }) => (
            <li key={ id } className="px-4 cursor-pointer capitalize py-4">
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;