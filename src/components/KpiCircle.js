import React from "react";
import Kpi from "../containers/assets/images/KPI.PNG";



const KpiCircle = () => {
  return (
    <div className="h-[500px] flex flex-col justify-around z-10 w-[1440px] mx-auto">
      <div>
        <p>TEMPS DE PRODUCTIONS / EFFECTIF</p>
      </div>
      
      <div className="flex flex-row justify-between">

      <div className="flex flex-col w-[440px] h-[300px] justify-between">
        <p>Délai de production / article</p>
        <p>MARGE NETTE / COMMERCIAL</p>
        <p>TOP 10 Fournisseurs</p>
        <p>Taux de conversion</p>
        <p>Coût moyen par embauche</p>
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
        <p>EVOLUTION MENSUELLE DU RESULTAT</p>
        <p>Ticket moyen / dépense frais</p>
        <p>MARGE / ARTICLE</p>
        <p>Taux de rotation</p>
        <p>Age moyen / poste</p>
      </div>

      </div>
      <div className="flex justify-center">
        <p>EVOLUTION DE LA TRESORERIE</p>
        <p>% répartition des charges</p>
      </div>
    </div>
  );
};

export default KpiCircle;
