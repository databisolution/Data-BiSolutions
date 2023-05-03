import React from "react";

const Title = ({titleDesc}) => {
  return (
    <>
      <div className="title gradient-background w-full h-[500px] md:h-[700px]">
        <p className="lg:mx-auto lg:w-[1000px] font-semibold 2xl:leading-[50px] relative text-lg leading-[30px] 3xl:w-[550px] lg:text-3xl top-[10px] sm:top-10 md:top-44 lg:top-44 2xl:right-[550px] 2xl:w-[400px] 2xl:-top-[60px] 3xl:top-[20px]">{titleDesc}</p>
      </div>
    </>
  );
};

export default Title;
