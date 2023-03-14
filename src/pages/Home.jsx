import React from "react";

import logo from "./../images/logo.png";
import vision from "./../images/vision.PNG";
import mission from "./../images/mission2.PNG";
import values from "./../images/values.PNG";
import ContactForm from "../components/ContactForm";
import Donation from "../components/DonationForm";


const Home = () => {
  return (
    <div className="bg-[#b3ffb3] min-h-[100vh] pt-[10vh] dark:text-white px-[10px]">
      <div className="landing-slides h-[90vh] bg-[#15D1EB] flex justify-center   items-center">
        Insert here slide show of useful images
      </div>
      <div className="landing-body min-h-[40vh] h-[100%]">

        <div className="overview">
          <h1>BCF OVERVIEW  </h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio laborum neque
            ducimus voluptas animi magnam cum ipsa dolorum similique rem, voluptate iure harum nulla fugit, provident aperiam error.
            Mollitia velit aperiam debitis amet nostrum explicabo ullam molestiae quod magnam cum eum natus distinctio dolorem neque animi corporis,
            laboriosam nesciunt quam?
          </p>
        </div>
        <div className="overview-image"> 
        <img src={logo} alt="OVERVIEW images placed here" />
        </div>
      </div>
      <div className="mission-vision-values min-h-[40vh] h-[100%]">

        <div className="mission-vision-title">
          <h1>BCF</h1>
          <p>Vision - Mission - Values</p>
          
        </div>
        <div className="mission-vision-body"> 
           <div className="vision">
          
              <img src={vision} alt="Vision ICON" />
            
            <h2>Vision</h2>
            <p>
              Our Vision Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque quas nobis suscipit? Nostrum animi commodi ea libero ipsa molestiae eaque quas sequi ut ad laudantium, ab voluptates velit. Ratione, aperiam!
            
            </p>
           </div>
           <div className="mission">
            <img src={mission} alt="Mission ICON" />
            <h2>Mission</h2>
            <p>
              Our Mission Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque quas nobis suscipit? Nostrum animi commodi ea libero ipsa molestiae eaque quas sequi ut ad laudantium, ab voluptates velit. Ratione, aperiam!
            
            </p>
           </div>
           <div className="values">
           <img  src={values} alt="Values ICON" />
            <h2>Core Values</h2>
            <p>
              Our Values Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque quas nobis suscipit? Nostrum animi commodi ea libero ipsa molestiae eaque quas sequi ut ad laudantium, ab voluptates velit. Ratione, aperiam!
            </p>
           </div>
        </div>
      </div>

      <div className="contacts-donation min-h-[40vh]">

      <div className="contacts  bg-[blue]">
        <ContactForm/>
      </div>
      <div className="donation bg-[violet]">
        <Donation/>
      </div>
      

      </div>

    </div>
  );
};

export default Home;
