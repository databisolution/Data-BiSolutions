import React from "react";
import MainImage from "../containers/assets/images/accueil.jpg";

const Header = ({ namePage,desc,textStyle }) => {
  return (
    <div className="pt-32 flex flex-col" 
    data-aos="fade-down" data-aos-duration="700"
    >
      <img
        src={MainImage}
        alt="mainImage"
        className=" mx-auto sm:h-[500px] w-full md:w-full object-cover shadow-2xl shadow-cyan-300/50"
      />
      <h1 className="absolute top-[250px] w-44 lg:top-[300px] 3xl:left-[600px] 2xl:left-[200px] xl:left-[200px] lg:w-96 3xl:text-6xl xl:text-4xl lg:text-6xl text-3xl text-white font-semibold backdrop-blur-[0.5px]">
       {namePage}
      </h1>
      <p className={textStyle}>{desc}</p>
    </div>
  );
};

export default Header;
