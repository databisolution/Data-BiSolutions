import React from "react";
import Kpi from "../containers/assets/images/KPI.PNG";
import Cursor from "./Cursor";
import '../kpi.css'



const KpiCircle = ({mouseOverEvent, mouseOutEvent}) => {
  return (
    <div className="h-[500px] flex flex-col justify-around z-0 w-[1440px] mx-auto ">
      <Cursor />
      <div onMouseOut={mouseOutEvent} onMouseOver={mouseOverEvent}>
        <p onMouseOut={mouseOutEvent} onMouseOver={mouseOverEvent}>TEMPS DE PRODUCTIONS / EFFECTIF</p>
      </div>
      
      <div className="flex flex-row justify-between">

      <div className="flex flex-col w-[440px] h-[300px] justify-between">
        <p onMouseOut={mouseOutEvent} onMouseOver={mouseOverEvent}>Délai de production / article</p>
        <p onMouseOut={mouseOutEvent} onMouseOver={mouseOverEvent}>MARGE NETTE / COMMERCIAL</p>
        <p onMouseOut={mouseOutEvent} onMouseOver={mouseOverEvent}>TOP 10 Fournisseurs</p>
        <p onMouseOut={mouseOutEvent} onMouseOver={mouseOverEvent}>Taux de conversion</p>
        <p onMouseOut={mouseOutEvent} onMouseOver={mouseOverEvent}>Coût moyen par embauche</p>
      </div>
      <div className="z-0">
            <img
              className="xl:w-[400px]"
              alt="Kpi"
              src={Kpi}
              // data-aos="fade-up"
              // data-aos-duration="1500"
            />
          </div>
      <div className="flex flex-col w-[440px] h-[300px] justify-between">
        <p onMouseOut={mouseOutEvent} onMouseOver={mouseOverEvent}>EVOLUTION MENSUELLE DU RESULTAT</p>
        <p onMouseOut={mouseOutEvent} onMouseOver={mouseOverEvent}>Ticket moyen / dépense frais</p>
        <p onMouseOut={mouseOutEvent} onMouseOver={mouseOverEvent}>MARGE / ARTICLE</p>
        <p onMouseOut={mouseOutEvent} onMouseOver={mouseOverEvent}>Taux de rotation</p>
        <p onMouseOut={mouseOutEvent} onMouseOver={mouseOverEvent}>Age moyen / poste</p>
      </div>

      </div>
      <div className="flex justify-center">
        <p onMouseOut={mouseOutEvent} onMouseOver={mouseOverEvent}>EVOLUTION DE LA TRESORERIE</p>
        <p onMouseOut={mouseOutEvent} onMouseOver={mouseOverEvent}>% répartition des charges</p>
      </div>
    </div>
  );
};

export default KpiCircle;
