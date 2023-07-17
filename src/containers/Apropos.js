import React, { useState } from "react";
import user from "./assets/images/user.png";
import Up from "./assets/images/up.png";
import { Helmet } from "react-helmet-async";
import Header from "../components/Header";
import Title from "../components/Title";

const Apropos = () => {
  const [slide, setSlide] = useState(false);
  const [slide2, setSlide2] = useState(false);

  return (
    <>
      <Helmet>
        <title>À Propos</title>
        <meta name="description" content="Notre objectif est de développer une solution optimale en dépit des difficultés rencontrées."/>
        <link rel="canonical" href="/aPropos"/>
      </Helmet>
      <section id="aPropos" className="mx-auto">
        <div className=" mx-auto">
          <Header namePage={"À PROPOS"} />
          <div className="my-10">
            <Title
              titleStyle={
                "lg:mx-auto lg:w-[1000px] font-semibold 2xl:leading-[45px] 3xl:leading-[60px] relative text-lg leading-[30px] 3xl:w-[550px] lg:text-2xl 2xl:text-lg 3xl:text-3xl top-[10px] sm:top-10 md:top-44 lg:top-44 2xl:right-[550px] 3xl:right-[750px] 2xl:w-[400px] 2xl:-top-[20px] 3xl:top-[10px]"
              }
              titleDesc={
                "Notre entreprise est le résultat d’une association de compétences et d’une approche commune."
              }
            />
          </div>
          <div className="h-[1200px] md:h-[600px] flex flex-col justify-evenly mt-20 md:flex-row lg:w-[800px] mx-auto md:justify-around relative -top-[200px]">
            <div className="card mt-20">
              {!slide ? (
                <>
                  <img
                    className="absolute mt-72 ml-32 block transition ease-in-out delay-100 duration-1000"
                    alt="up"
                    src={Up}
                    onClick={() => setSlide(!slide)}
                  />
                  <div className="w-[320px] h-[300px] bg-gray-300">
                    <img
                      className="z-0 mx-auto pt-20"
                      src={user}
                      alt="Jérémy Griet"
                    />
                  </div>
                  <h3 className="mt-5 font-bold text-lg translate-y-1 transition duration-[1500ms] delay-100 py-6">
                    Jérémy Griet
                  </h3>
                  <p className="translate-y-1 transition duration-[1500ms] delay-100 h-[358px] titleText text-lg">
                    « Ancien directeur de cabinet comptable et directeur d’une{" "}
                    société de financement, mon approche des
                    <span className="blur-[2px] titleText">
                      {" "}
                      besoins économiques et financiers de mes clients m’ont
                      conduit à prendre de la hauteur sur les solutions
                      existantes du marché. Rompu au traitement de la donnée, je
                      souhaitais apporter aux entreprises des solutions dédiées,
                      adaptées et dimensionnées à leur besoins. »
                    </span>
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
                  <div className="w-[320px] h-[300px] bg-gray-300">
                    <img
                      className="z-0 mx-auto pt-20"
                      src={user}
                      alt="Jérémy Griet"
                    />
                  </div>
                  <h3 className=" py-14 font-bold text-lg -translate-y-72 transition duration-[1500ms] delay-100 bg-black/80 text-white">
                    Jérémy Griet
                  </h3>
                  <p className=" -translate-y-72 transition duration-[1500ms] h-[358px] delay-100 bg-black/80 text-white titleText text-lg">
                    « Ancien directeur de cabinet comptable et directeur d’une
                    société de financement, mon approche des besoins économiques
                    et financiers de mes clients m’ont conduit à prendre de la
                    hauteur sur les solutions existantes du marché. Rompu au
                    traitement de la donnée, je souhaitais apporter aux
                    entreprises des solutions dédiées, adaptées et dimensionnées
                    à leur besoins. »
                  </p>
                </>
              )}
            </div>
            <div className="card mt-20">
              {!slide2 ? (
                <>
                  <img
                    className="absolute mt-72 ml-32 block transition ease-in-out delay-100 duration-1000"
                    alt="up"
                    src={Up}
                    onClick={() => setSlide2(!slide2)}
                  />
                  <div className="w-[320px] h-[300px] bg-gray-300">
                    <img
                      className="mx-auto pt-20"
                      src={user}
                      alt="Grégory Ramu"
                    />
                  </div>
                  <h3 className="mt-5 font-bold text-lg translate-y-1 transition duration-[1500ms] delay-100 py-6">
                    Grégory Ramu
                  </h3>
                  <p className="translate-y-1 transition duration-[1500ms] delay-100 h-[358px] titleText text-lg">
                    « Des expériences accomplies dans le pilotage de la
                    trésorerie et l’analyse de gestion m’ont permis de
                    développer
                    <span className="blur-[2px] titleText">
                      {" "}
                      mes facultés dans la maitrise de l’information. Comprendre
                      les particularités de chaque activité et environnement
                      sont pour moi primordiales. Associer cela à l’analyse de
                      données me permettent d’accompagner les entreprises et les
                      orienter dans leurs choix stratégiques»
                    </span>
                  </p>
                </>
              ) : (
                <>
                  <img
                    className="absolute mt-[-25px] ml-32 block rotate-180 delay-100 transition ease-in-out duration-1000 z-10"
                    alt="up"
                    src={Up}
                    onClick={() => setSlide2(!slide2)}
                  />
                  <div className="w-[320px] h-[300px] bg-gray-300">
                    <img
                      className="z-0 mx-auto pt-20"
                      src={user}
                      alt="Grégory Ramu"
                    />
                  </div>
                  <h3 className="py-14 font-bold text-lg -translate-y-72 transition duration-[1500ms] delay-100 bg-black/80 text-white">
                    Grégory Ramu
                  </h3>
                  <p className="-translate-y-72 transition duration-[1500ms] h-[358px] delay-100 bg-black/80 text-white titleText text-lg">
                    « Des expériences accomplies dans le pilotage de la
                    trésorerie et l’analyse de gestion m’ont permis de
                    développer mes facultés dans la maitrise de l’information.
                    Comprendre les particularités de chaque activité et
                    environnement sont pour moi primordiales. Associer cela à
                    l’analyse de données me permettent d’accompagner les
                    entreprises et les orienter dans leurs choix stratégiques»
                  </p>
                </>
              )}
            </div>
          </div>
          <p className="mb-10 font-bold text-xl relative -top-40">
            Notre objectif est de développer une solution optimale en dépit des
            difficultés rencontrées.
          </p>
        </div>
      </section>
    </>
  );
};

export default Apropos;
