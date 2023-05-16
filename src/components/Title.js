import React from "react";

const Title = ({ titleDesc, titleStyle }) => {
  return (
    <>
      <div className="title gradient-background w-full h-[500px] md:h-[700px] 2xl:h-[450px] 3xl:h-[700px]">
        <p className={titleStyle}>{titleDesc}</p>
      </div>
    </>
  );
};

export default Title;

// lg:mx-auto lg:w-[1000px] font-semibold 2xl:leading-[45px] 3xl:leading-[60px] relative text-lg leading-[30px] 3xl:w-[550px] lg:text-2xl 2xl:text-lg 3xl:text-3xl top-[10px] sm:top-10 md:top-44 lg:top-44 2xl:right-[550px] 3xl:right-[750px] 2xl:w-[400px] 2xl:-top-[60px] 3xl:-top-[5px]
