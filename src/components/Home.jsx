import React from "react";
import HomeSlider from "./HomeSlider";
// import About from './About'
// import Contacts from './Contacts'
// import Donation from './Donation'
// import Impact from './Impact'
// import Projects from './Projects'
// import Team from './Team'

const Home = () => {
  return (
    <div className="bg-[#b3ffb3] min-h-[100vh] pt-[10vh] dark:text-white">
      {/* <div className="flex bg-[#F9F9FB] min-h-[100vh] dark:bg-dark-bg dark:text-white"> */}
      Home page for Landing Page

      <HomeSlider/>
    </div>
  );
};

export default Home;
