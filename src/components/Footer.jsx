import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { GrDocumentPdf } from "react-icons/gr";

const Footer = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/alexandretensorer/",
    },
    {
      id: 2,
      child: (
        <>
          <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/alextensorer",
    },
    {
      id: 3,
      child: (
        <>
          <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:alex.letensorer@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          <GrDocumentPdf size={30} />
        </>
      ),
      href: "/cv-tensorer-alexandre.pdf",
      download: true,
    },
  ];

  return (
    <div className="flex items-center justify-evenly h-20 bg-cus-yellow mb-0 xl:hidden">
      {links.map(({ id, child, href, download }) => (
        <div key={id}>
          <a
            href={href}
            className="flex flex-row w-full text-black font-bold pl-4"
            download={download}
            target="_blank"
            rel="noreferrer"
          >
            {child}
          </a>
        </div>
      ))}
    </div>
  );
};

export default Footer;