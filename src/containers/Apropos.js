import React, { useState } from "react";
import user from "./assets/images/user.png"
import Up from "./assets/images/up.png";

import Header from "../components/Header";
import Title from "../components/Title";

const Apropos = () => {
  const [slide, setSlide] = useState(false);
  const [slide2, setSlide2] = useState(false);

  return (
    <section id="aPropos" className="mx-auto">
      <div className=" mx-auto">
      <Header namePage={"À PROPOS"}/>
    
        {/* <p className="my-10 mx-2 text-2xl">
          Notre entreprise est le résultat d’une association de compétences et
          d’une approche commune. Notre objectif est de développer une solution
          optimale en dépit des difficultés rencontrées.
        </p> */}
        <Title titleDesc={"Notre entreprise est le résultat d’une association de compétences et d’une approche commune. Notre objectif est de développer une solution optimale en dépit des difficultés rencontrées."}/>
        <div className="h-[1200px] md:h-[600px] flex flex-col justify-evenly my-20 md:flex-row lg:w-[800px] mx-auto md:justify-around">
          <div className="card my-20">
            {!slide ? (
              <>
                <img
                  className="absolute mt-72 ml-32 block transition ease-in-out delay-100 duration-1000"
                  alt="up"
                  src={Up}
                  onClick={() => setSlide(!slide)}
                />
                <img className="w-[400px] z-0" src={user} alt="Jérémy Griet" />
                <h3 className="mt-5 font-bold text-lg translate-y-1 transition duration-[1500ms] delay-100 py-6">Jérémy Griet</h3>
                <p className="translate-y-1 transition duration-[1500ms] delay-100 h-[358px]">
                  « Ancien directeur de cabinet comptable et directeur d’une
                  société de financement, <span className="blur-[1px]">mon approche des besoins économiques
                  et financiers de mes clients m’ont conduit à prendre de la
                  hauteur sur les solutions existantes du marché. Rompu au
                  traitement de la donnée, je souhaitais apporter aux
                  entreprises des solutions dédiées, adaptées et dimensionnées à
                  leur besoins. »</span>
                </p>
              </>
            ) : (
              <>
                <img
                  className="absolute mt-[-25px] ml-32 block rotate-180 delay-100 transition ease-in-out duration-1000 z-10"
                  alt="up"
                  src={Up}
                  onClick={() => setSlide(!slide)}
                />
                <img className="z-0 w-[400px]" src={user} alt="Jérémy Griet" />
                <h3 className=" py-14 font-bold text-lg -translate-y-72 transition duration-[1500ms] delay-100 bg-black/80 text-white">Jérémy Griet </h3>
                <p className=" -translate-y-72 transition duration-[1500ms] h-[358px] delay-100 bg-black/80 text-white">
                  « Ancien directeur de cabinet comptable et directeur d’une
                  société de financement, mon approche des besoins économiques
                  et financiers de mes clients m’ont conduit à prendre de la
                  hauteur sur les solutions existantes du marché. Rompu au
                  traitement de la donnée, je souhaitais apporter aux
                  entreprises des solutions dédiées, adaptées et dimensionnées à
                  leur besoins. »
                </p>
              </>
            )}
          </div>
          <div className="card my-20">
            {!slide2 ? (
              <>
              
            <img className="absolute mt-72 ml-32 block transition ease-in-out delay-100 duration-1000"
             alt="up"
             src={Up}
             onClick={() => setSlide2(!slide2)}
            />
            <img className="w-[400px]" src={user} alt="Grégory Ramu" />
            <h3 className="mt-5 font-bold text-lg translate-y-1 transition duration-[1500ms] delay-100 py-6">Grégory Ramu</h3>
            <p className="translate-y-1 transition duration-[1500ms] delay-100 h-[358px]">
              « Des expériences accomplies dans le pilotage de la trésorerie et
              l’analyse de<span className="blur-[1px]"> gestion m’ont permis de développer mes facultés dans
              la maitrise de l’information.  Comprendre les particularités de
              chaque activité et environnement sont pour moi primordiales.
              Associer cela à l’analyse de données me permettent d’accompagner
              les entreprises et les orienter dans leurs choix stratégiques»</span>
            </p>
            </>
            ):(
              <>
              
              <img className="absolute mt-[-25px] ml-32 block rotate-180 delay-100 transition ease-in-out duration-1000 z-10"
               alt="up"
               src={Up}
               onClick={() => setSlide2(!slide2)}
              />
              <img className="z-0 w-[400px]" src={user} alt="Grégory Ramu" />
              <h3 className="py-14 font-bold text-lg -translate-y-72 transition duration-[1500ms] delay-100 bg-black/80 text-white">Grégory Ramu</h3>
              <p className="-translate-y-72 transition duration-[1500ms] h-[358px] delay-100 bg-black/80 text-white">
                « Des expériences accomplies dans le pilotage de la trésorerie et
                l’analyse de gestion m’ont permis de développer mes facultés dans
                la maitrise de l’information.  Comprendre les particularités de
                chaque activité et environnement sont pour moi primordiales.
                Associer cela à l’analyse de données me permettent d’accompagner
                les entreprises et les orienter dans leurs choix stratégiques»
              </p>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Apropos;
