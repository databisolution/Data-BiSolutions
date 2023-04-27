import React from "react";
// import MainImage from "../containers/assets/images/accueil.jpg";

const Header = ({namePage,MainImage,desc}) => {
  return (
    <div className="pt-32 flex flex-col" 
    // data-aos="zoom-in" data-aos-duration="1000"
    >
      <img
        src={MainImage}
        alt="mainImage"
        className=" mx-auto sm:h-[500px] w-full md:w-full object-cover shadow-2xl"
      />
      <h1 className="absolute top-[150px] w-44 lg:top-[300px] 3xl:left-[800px] 2xl:left-[600px] lg:w-96 lg:text-6xl text-3xl text-white font-semibold backdrop-blur-[3px]">
       {namePage}
      </h1>
      <p className="text-white top-[400px] lg:top-[120px] 2xl:text-3xl absolute w-[300px] lg:w-[500px] text-right right-0 m-3 2xl:leading-[50px] rounded-lg backdrop-blur-sm">{desc}</p>
    </div>
  );
};

export default Header;
