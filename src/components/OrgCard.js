import React from "react";

const OrgCard = ({ cardLogo, cardTitle, cardDesc }) => {
  return (
    <div className="w-[280px] h-[480px] lg:mt-[150px] 3xl:mt-[300px] 3xl:mb-20">
      <img className="w-[60px] h-[60px] 3xl:w-[100px] 3xl:h-[100px]" src={cardLogo} alt="logo" />
      <div className="logoAccueil bg-white h-[25px] w-[60px] mt-2 3xl:w-[100px]"></div>
      <h2 className="my-5 flex text-xl font-semibold 3xl:text-2xl">{cardTitle}</h2>
      <h3 className="text-start my-5 flex 3xl:text-lg">{cardDesc}</h3>
    </div>
  );
};

export default OrgCard;
