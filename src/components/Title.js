import React from "react";

const Title = ({titleDesc}) => {
  return (
    <>
      <div className="title gradient-background w-[300px] sm:w-[320px] xm:w-[500px] h-[500px] md:w-[700px] lg:w-full md:h-[350px] mx-auto">
        <p className="lg:w-[1000px] font-semibold 2xl:leading-[50px] relative text-3xl top-32 mx-auto">{titleDesc}</p>
      </div>
    </>
  );
};

export default Title;
