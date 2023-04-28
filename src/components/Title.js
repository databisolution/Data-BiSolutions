import React from "react";

const Title = ({titleDesc}) => {
  return (
    <>
      <div className="title gradient-background w-[300px] sm:w-[320px] xm:w-[500px] h-[500px] md:w-[700px] lg:w-full md:h-[250px] mx-auto mt-10">
        <p className="lg:w-[1000px] font-semibold 2xl:leading-[50px] relative text-lg leading-[40px] lg:text-2xl top-32 md:top-20 xl:top-10 mx-auto text-slate-200 ">{titleDesc}</p>
      </div>
    </>
  );
};

export default Title;
