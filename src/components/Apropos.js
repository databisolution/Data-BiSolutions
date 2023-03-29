import React from "react";
import Gramu from "./assets/images/gRamu.jpg";
import Jgriet from "./assets/images/jGriet.jpg";

const Apropos = () => {
  return (
    <section id="aPropos" className="pt-52 mx-auto">
      <div className=" mx-auto">
        <h1 className="text-3xl font-bold text-blue-800 pb-10">À propos</h1>
        <div className="border-t-[1px] mx-auto w-52 p-4"></div>
        <p className="my-10 mx-2 text-2xl">
          Notre entreprise est le résultat d’une association de compétences et
          d’une approche commune. Notre objectif est de développer une solution
          optimale en dépit des difficultés rencontrées.
        </p>
        <div className="flex flex-col justify-evenly my-20">
          <div className="card my-20">
            <img src={Jgriet} alt="Jérémy Griet" />
            <p>
              Jérémy Griet « Ancien directeur de cabinet comptable et directeur
              d’une société de financement, mon approche des besoins économiques
              et financiers de mes clients m’ont conduit à prendre de la hauteur
              sur les solutions existantes du marché. Rompu au traitement de la
              donnée, je souhaitais apporter aux entreprises des solutions
              dédiées, adaptées et dimensionnées à leur besoins. »
            </p>
          </div>
          <div className="card my-20">
            <img src={Gramu} alt="Grégory Ramu" />
            <p>
              Grégory Ramu « Des expériences accomplies dans le pilotage de la
              trésorerie et l’analyse de gestion m’ont permis de développer mes
              facultés dans la maitrise de l’information. Comprendre les
              particularités de chaque activité et environnement sont pour moi
              primordiales. Associer cela à l’analyse de données me permettent
              d’accompagner les entreprises et les orienter dans leurs choix
              stratégiques»
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Apropos;
