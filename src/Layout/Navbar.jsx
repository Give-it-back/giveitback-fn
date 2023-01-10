// insert nav links here

import React from "react";
import { Link, Outlet } from "react-router-dom";

import Sidebar from "./Sidebar";

const Navbar = () => {
  return (
    <div>
      <div> Logo</div>
      <div>
        <ul>
          <li> <Link to ='/'>Home</Link></li>
          <li><Link to ='/about'>About</Link></li>
          <li><Link to ='/projects'> Projects </Link> </li>
          <li><Link to ='/team'>Team</Link></li>
          <li><Link to ='/activities'>Activities</Link></li>
          <li><Link to ='/impact'>Impact</Link></li>
          <li><Link to ='/contacts'>Contact US</Link></li>
          <li><Link to ='/donate'>Donate Now </Link></li>
        </ul>
        <Outlet/>
      </div>
      <div> Search bar</div>
      <Sidebar/>
    </div>
  );
};

export default Navbar;
