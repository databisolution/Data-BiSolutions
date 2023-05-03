import React from "react";
import MainImage from "../containers/assets/images/accueil.jpg";

const Header = ({namePage,desc}) => {
  return (
    <div className="pt-32 flex flex-col" 
    data-aos="zoom-in" data-aos-duration="1000"
    >
      <img
        src={MainImage}
        alt="mainImage"
        className=" mx-auto sm:h-[500px] w-full md:w-full object-cover shadow-2xl shadow-cyan-300/50"
      />
      <h1 className="absolute top-[250px] w-44 lg:top-[300px] 3xl:left-[600px] 2xl:left-[300px] xl:left-[200px] lg:w-96 3xl:text-6xl xl:text-4xl lg:text-6xl text-3xl text-white font-semibold backdrop-blur-[1px]">
       {namePage}
      </h1>
      <p className="header text-white top-[390px] mr-2 lg:top-[300px] 2xl:text-4xl xl:text-2xl text-left absolute w-[300px] lg:w-[500px] 2xl:w-[750px] right-[1px] m-10 2xl:leading-[50px] rounded-lg backdrop-blur-[3px]">{desc}</p>
    </div>
  );
};

export default Header;
