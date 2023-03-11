// insert nav links here
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
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
      link: "projects",
    },
    {
      id: 4,
      link: "team",
    },
    {
      id: 5,
      link: "activities",
    },
    {
      id: 6,
      link: "impact",
    },
    {
      id: 7,
      link: "contacts",
    },
    {
      id: 8,
      link: "donate",
    },
  ];
  return (
    <div className="top-0 z-90 h-[10vh] fixed bg-[#fff] font-sans border-b border-[#979797] w-screen flex justify-around">
      <div className=" font-signature flex-[1] bg-[#5499C7] items-center flex justify-around" > 
        <h1 className="font-[700]">LOGO</h1>
        <h1 className="font-bold">BUILD CAREER FOUNDATION</h1>
      </div>
      <div className="bg-[#16A085] flex-[2] flex justify-around items-center">
        <ul className=" md:flex ">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
            >
              <Link to={link}>{link}</Link>
            </li>
          ))}
          {/* <li className="inline bg-[#f0f0f5] "> Search bar </li> */}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
