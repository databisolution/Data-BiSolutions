import React from "react";
import Guerin from "./assets/images/Guerin.PNG";
import Altis from "./assets/images/altis.PNG";
import Jdc from "./assets/images/jdc.PNG";
import Prefiloc from "./assets/images/Prefiloc.PNG";

const Partenaires = () => {
  return (
    <section id="Partenaires" className="pt-52 mx-auto " data-aos="zoom-in">
      <h1 className="text-4xl font-bold text-blue-800">Partenaires</h1>
      <div className=" h-[800px] flex flex-col justify-around">
        <img src={Guerin} alt="guerin" />
        <img src={Altis} alt="altis" />
        <img src={Jdc} alt="jdc" />
        <img src={Prefiloc} alt="prefiloc" />
      </div>
    </section>
  );
};

export default Partenaires;
