import React from "react";

const OrgCard = ({cardLogo, cardTitle, cardDesc}) => {
  return (
    <div className="w-[280px] h-[480px] lg:mt-[240px]">
      <img className="w-[100px] h-[100px]" src={cardLogo} alt="logo" />
      <div className="logoAccueil mt-2"></div>
      <h1 className="my-5 flex text-2xl font-semibold">{cardTitle}</h1>
      <h2 className="text-start my-5 flex">{cardDesc}</h2>
    </div>
  );
};

export default OrgCard;
