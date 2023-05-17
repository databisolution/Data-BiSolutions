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
