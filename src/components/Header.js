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
      <h1 className="absolute top-[250px] w-44 lg:top-[300px] 3xl:left-[600px] 2xl:left-[200px] xl:left-[200px] lg:w-96 3xl:text-6xl xl:text-4xl lg:text-6xl text-3xl text-white font-semibold backdrop-blur-[0.5px]">
       {namePage}
      </h1>
      <p className="header text-slate-100 top-[390px] lg:top-[320px] 2xl:text-3xl xl:text-2xl text-left absolute w-[300px] lg:w-[500px] 2xl:w-[590px] 2xl:h-[268px] -right-[40px] m-10 2xl:leading-[40px] rounded-lg backdrop-blur-[1.5px] bg-black/30">{desc}</p>
    </div>
  );
};

export default Header;
