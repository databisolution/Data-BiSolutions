import React from "react";

const TechnoCard = ({techTitle, techDesc, techLogo}) => {
  return (
    <div className="flex flex-col w-full lg:flex-row justify-center bgPbi h-[1150px] xm:h-[900px] md:h-[700px] lg:h-[400px] shadow-xl pb-20 pt-5 mt-20">
      <div className="my-auto max-lg:mx-auto">
        <img className="w-[300px] lg:w-[300px] lg:pl-24 object-fit" src={techLogo} alt="pbi" />
        <h3 className="text-2xl text-yellow-400 font-semibold py-4 w-[300px] lg:w-[400px]">
          {techTitle}
        </h3>
      </div>
      <p
        className="titleText px-1 text-slate-200 font-semibold lg:py-4 text-2xl lg:text-3xl 2xl:text-3xl lg:text-left leading-[60px] 2xl:leading-[50px] lg:w-[800px] 2xl:left-0"
      >
        {techDesc}
      </p>
    </div>
  );
};

export default TechnoCard;
