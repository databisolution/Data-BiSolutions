import React from "react";
// import MainImage from "../containers/assets/images/accueil.jpg";

const Header = ({namePage,MainImage}) => {
  return (
    <div className="pt-32 " data-aos="zoom-in" data-aos-duration="1000">
      <img
        src={MainImage}
        alt="mainImage"
        className=" mx-auto sm:h-[300px] w-full md:w-full object-cover shadow-2xl"
      />
      <h1 className="absolute top-[150px] lg:top-[250px] 3xl:left-[500px] 2xl:left-[600px] w-96 lg:text-6xl text-3xl text-white font-semibold backdrop-blur-[3px]">
       {namePage}
      </h1>
    </div>
  );
};

export default Header;
