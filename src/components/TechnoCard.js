import React from "react";

const TechnoCard = ({
  techTitle,
  techDesc,
  techLogo,
  classNameTitle,
  techObjectif,
  imgDesc,
  cardTitle,
  classTech,
}) => {
  return (
    <div className="-mb-52 2xl:-mb-72">
      <h1 className={classNameTitle}>{cardTitle}</h1>
      <div className="bgPolygone h-[600px] 2xl:h-[400px] 3xl:h-[600px]"></div>
      <div className="flex 2xl:justify-evenly 2xl:flex-row flex-col relative 3xl:-top-[250px] 2xl:-top-[100px] -top-[250px]">
        <div className="3xl:w-[400px] 3xl:h-[500px] 2xl:w-[300px] 2xl:h-[400px] w-[320px] md:w-[450px] xl:w-[600px] max-2xl:mx-auto relative -top-[150px] border-4 border-none rounded-xl backdrop-blur-2xl bg-white/60 shadow-gray-50 shadow-md">
          <img
            className="w-[300px] lg:w-[300px] xl:w-[240px] mx-auto mt-5 object-fit"
            src={techLogo}
            alt="pbi"
          />
          <h2 className={classTech}>{techTitle}</h2>
          <p className="mt-10 text-2xl 2xl:text-lg 3xl:text-2xl m-2 font-semibold leading-[30px] policeTech lg:leading-[40px] text-slate-600">
            {techDesc}
          </p>
        </div>

        <div>
          <img
            className="mx-auto w-[1000px] 2xl:w-[600px] 3xl:w-[1000px] relative 2xl:-top-[130px] 3xl:top-0 shadow-2xl rounded-xl object-cover mb-10"
            src={imgDesc}
            alt="imgDesc"
          />
          <p className="3xl:w-[1000px] 2xl:w-[600px] 2xl:text-left lg:text-3xl 3xl:text-3xl 2xl:text-xl 2xl:leading-[40px] xl:leading-[60px] relative 2xl:-top-[140px] 3xl:top-0 policeTech">
            {techObjectif}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TechnoCard;
