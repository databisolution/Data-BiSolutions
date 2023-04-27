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
        className=" mx-auto sm:h-[500px] w-full md:w-full object-cover shadow-2xl shadow-cyan-200/50"
      />
      <h1 className="absolute top-[150px] w-44 lg:top-[300px] 3xl:left-[600px] 2xl:left-[300px] xl:left-[200px] lg:w-96 3xl:text-6xl xl:text-4xl lg:text-6xl text-3xl text-white font-semibold backdrop-blur-[1px]">
       {namePage}
      </h1>
      <p className="text-white top-[400px] lg:top-[200px] 2xl:text-4xl xl:text-2xl text-justify absolute w-[300px] lg:w-[500px] 2xl:w-[800px] right-[20px] m-10 2xl:leading-[50px] rounded-lg backdrop-blur-[3px]">{desc}</p>
    </div>
  );
};

export default Header;
