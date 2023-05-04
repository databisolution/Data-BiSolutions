import React from "react";

const TechnoCard = ({
  techTitle,
  techDesc,
  techLogo,
  classNameTitle,
  techObjectif,
  imgDesc,
  cardTitle,
}) => {
  return (
    <>
      <h1 className={classNameTitle}>{cardTitle}</h1>
      <div className="bgPolygone h-[600px]"></div>
      <div className="flex 2xl:justify-evenly 2xl:flex-row flex-col relative -top-[250px]">
        <div className="2xl:w-[400px] 2xl:h-[550px] w-[320px] md:w-[450px] xl:w-[600px] max-2xl:mx-auto relative -top-[150px] border-4 border-none rounded-xl backdrop-blur-2xl bg-white/60 shadow-gray-50 shadow-md">
          <img
            className="w-[300px] lg:w-[300px] mx-auto mt-5 object-fit"
            src={techLogo}
            alt="pbi"
          />
          <h2 className="text-xl mt-5 font-extrabold text-yellow-300">
            {techTitle}
          </h2>
          <p className="mt-10 text-xl m-2 font-semibold leading-[30px] policeTech lg:leading-[40px]">
            {techDesc}
          </p>
        </div>

        <div className="">
          <img
            className="mx-auto w-[1000px] shadow-2xl rounded-xl object-cover mb-20"
            src={imgDesc}
            alt="imgDesc"
            data-aos="zoom-in-down"
            data-aos-duration="1800"
          />
          <p className="2xl:w-[1000px] 2xl:text-left lg:text-2xl font-semibold leading-[50px]">
            {techObjectif}
          </p>
        </div>
      </div>
    </>
  );
};

export default TechnoCard;
