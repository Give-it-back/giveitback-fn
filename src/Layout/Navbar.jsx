// insert nav links here
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiMenu } from 'react-icons/fi';
import { TfiClose } from 'react-icons/tfi';
import "./../navbar.css"
import { links } from "./navlinks";
import logo from "./logo.png";
const Navbar = () => {

  const [isMobile, setIsMobile] = useState(true);
const navigate = useNavigate()
const navigateHome = ()=>{
  navigate ('/');
}

  return (
    <div className="top-0 z-90 h-[10vh] fixed bg-[#fff] font-sans  w-screen flex justify-around drop-shadow">
      <div className="logo  font-signature flex-[1] bg-[#5499C7] items-center flex justify-around cursor-pointer" >
        
        <img src={logo} alt="Logo" className="h-[90%] rounded mr-[10px] ml-[10px] "  onClick={ navigateHome}/>
        <h1 className="font-bold" onClick={ navigateHome}>BUILD CAREER FOUNDATION</h1>
      </div>
      <div className="bg-[#16A085] flex-[2] flex justify-around items-center">
        <ul className={isMobile ? "nav-links":"nav-links-mobile" } onClick ={()=> setIsMobile(true)}>
          {links.map(({ id, link }) => (
           
            <li
              key={id}
              className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200 "
            >
              <Link to={link==="home"?'/': link}>{link}</Link>
            </li>
          ))}

          <li className="px-4 cursor-pointer capitalize font-medium text-[#D5D51B] bg-[#1007BF] hover:scale-105 hover:text-[#1007BF] duration-200 mb-[3px] rounded"> 
          <Link to="/donate">donate</Link>
          </li>
          {/* <li className="inline bg-[#f0f0f5] "> Search bar </li> */}
        </ul>
        <button className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
          {isMobile ? <FiMenu /> : <TfiClose />}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
