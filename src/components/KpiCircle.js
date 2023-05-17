import React, { useEffect, useState } from "react";
import Kpi from "../containers/assets/images/KPI.PNG";
import { Paraph } from "../fakeData/fakeData.js";
import kpi from "../containers/assets/images/INDICATEURS.PNG";
import "../kpi.css";

const KpiCircle = () => {
  const [position, setPosition] = useState({
    x: "",
    y: "",
  });

  const handleMouseMove = (e) => {
    setPosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  });

  return (
    <>
      <div
        className="h-0 2xl:h-[350px] flex flex-col justify-evenly 2xl:w-[1300px] mx-auto z-30 w-0 collapse 2xl:visible 2xl:mt-20 relative -top-[380px] left-[200px]"
      >
        <div
          style={{ left: `${position.x}px`, top: `${position.y}px` }}
          className="cursor"
        ></div>
        <Paraph>
          <div className="titleText text-xl font-extrabold collapse 2xl:visible relative -top-5 3xl:-top-10 3xl:left-[320px] 3xl:text-3xl text-cyan-800"
          //  data-aos="zoom-in-down"
          //  data-aos-duration="300"
           
          >
            Temps De Productions par Effectif
          </div>
          <div className="img-cont">
            {/* <img
              className="imgHover pl-[430px]"
              alt="Peugeot 508"
              src="https://picsum.photos/600/900?random=1"
            /> */}
          </div>
        </Paraph>
        <div className="flex flex-row justify-between">
          <div className="flex flex-col w-0 2xl:w-[440px] h-[300px] 3xl:h-[400px] 3xl:relative 3xl:left-[180px] justify-between collapse 2xl:visible">
            <Paraph>
              <div className="titleText text-xl 3xl:text-3xl font-extrabold relative left-52 text-cyan-700"
              data-aos="zoom-out-right"
              data-aos-duration="300"
              >
                Délai de production par article
              </div>
              <div className="img-cont">
                {/* <img
                  className="imgHover pl-[430px] -mt-[100px]"
                  alt="lorem picsum"
                  src="https://picsum.photos/600/900?random=2"
                /> */}
              </div>
            </Paraph>
            <Paraph>
              <div className="titleText text-xl 3xl:text-3xl font-extrabold relative left-36 text-cyan-600"
               data-aos="zoom-out-right"
               data-aos-duration="300"
               
              >
                Marge Nette par Commercial
              </div>
              <div className="img-cont">
                {/* <img
                  className="imgHover pl-[430px] -mt-[200px]"
                  alt="lorem picsum"
                  src="https://picsum.photos/600/900?random=3"
                /> */}
              </div>
            </Paraph>
            <Paraph>
              <div className="titleText text-xl 3xl:text-3xl font-extrabold relative left-24 text-cyan-500"
               data-aos="zoom-out-right"
               data-aos-duration="300"
              >
                Top 10 Fournisseurs
              </div>
              <div className="img-cont">
                {/* <img
                  className="imgHover pl-[430px] -mt-[200px]"
                  alt="lorem picsum"
                  src="https://picsum.photos/600/900?random=4"
                /> */}
              </div>
            </Paraph>
            <Paraph>
              <div className="titleText text-xl 3xl:text-3xl font-extrabold relative left-36 text-cyan-400"
               data-aos="zoom-out-right"
               data-aos-duration="300"
              >
                Taux de conversion
              </div>
              <div className="img-cont">
                {/* <img
                  className="imgHover pl-[430px] -mt-[300px]"
                  alt="lorem picsum"
                  src="https://picsum.photos/600/900?random=5"
                /> */}
              </div>
            </Paraph>
            <Paraph>
              <div className="titleText text-xl 3xl:text-3xl font-extrabold relative left-52 text-cyan-400"
               data-aos="zoom-out-right"
               data-aos-duration="300"
              >
                Coût moyen par embauche
              </div>
              <div className="img-cont">
                {/* <img
                  className="imgHover pl-[430px] -mt-[400px]"
                  alt="lorem picsum"
                  src="https://picsum.photos/600/900?random=6"
                /> */}
              </div>
            </Paraph>
          </div>
          <div
           data-aos="zoom-in"
           data-aos-duration="500"
          >
            <img
              className="xl:w-[230px] 3xl:w-[350px] z-0 w-0 rounded-3xl relative top-10 left-5 3xl:left-80 shadow-2xl"
              alt="Kpi"
              src={Kpi}
            />
          </div>
          <div className="flex flex-col w-0 xl:w-[440px] h-[300px] 3xl:h-[400px] 3xl:relative 3xl:left-[430px] justify-between collapse 2xl:visible">
            <Paraph>
              <div className="titleText text-xl 3xl:text-3xl font-extrabold relative right-44 text-cyan-700"
               data-aos="zoom-out-left"
               data-aos-duration="300"
              >
                Evolution mensuelle du résultat
              </div>
              <div className="img-cont">
                {/* <img
                  className="imgHover -mt-[200px]"
                  alt="lorem picsum"
                  src="https://picsum.photos/600/900?random=7"
                /> */}
              </div>
            </Paraph>
            <Paraph>
              <div className="titleText text-xl 3xl:text-3xl font-extrabold relative right-28 text-cyan-600"
              data-aos="zoom-out-left"
              data-aos-duration="300"
              >
                Ticket moyen par dépense
              </div>
              <div className="img-cont">
                {/* <img
                  className="imgHover -mt-[300px]"
                  alt="lorem picsum"
                  src="https://picsum.photos/600/900?random=8"
                /> */}
              </div>
            </Paraph>
            <Paraph>
              <div className="titleText text-xl 3xl:text-3xl font-extrabold relative right-20 text-cyan-500"
              data-aos="zoom-out-left"
              data-aos-duration="300"          
              >Marge par Article</div>
              <div className="img-cont">
                {/* <img
                  className="imgHover -mt-[300px]"
                  alt="lorem picsum"
                  src="https://picsum.photos/600/900?random=9"
                /> */}
              </div>
            </Paraph>
            <Paraph>
              <div className="titleText text-xl 3xl:text-3xl font-extrabold relative right-32 text-cyan-400"
              data-aos="zoom-out-left"
              data-aos-duration="300"
              >Taux de rotation</div>
              <div className="img-cont">
                {/* <img
                  className="imgHover -mt-[300px]"
                  alt="lorem picsum"
                  src="https://picsum.photos/600/900?random=10"
                /> */}
              </div>
            </Paraph>
            <Paraph>
              <div className="titleText text-xl 3xl:text-3xl font-extrabold relative right-44 text-cyan-400"
              data-aos="zoom-out-left"
              data-aos-duration="300"

              >Age moyen par poste</div>
              <div className="img-cont">
                {/* <img
                  className="imgHover -mt-[300px]"
                  alt="lorem picsum"
                  src="https://picsum.photos/600/900?random=11"
                /> */}
              </div>
            </Paraph>
          </div>
        </div>
        <div className="flex justify-around w-0 2xl:w-[800px] xl:mx-auto collapse 2xl:visible relative top-10">
          {/* <Paraph>
            <span className="text-2xl font-extrabold">
             Evolution de la trésorerie
            </span>
            <div className="img-cont">
              <img
                className="imgHover -mt-[800px]"
                alt="lorem picsum"
                src="https://picsum.photos/600/900?random=15"
              />
            </div>
          </Paraph> */}
          <Paraph>
            <div className="titleText text-xl 3xl:text-3xl font-extrabold relative left-6 -top-7 3xl:-top-2 3xl:left-80 text-cyan-300"
            data-aos="zoom-in-up"
            data-aos-duration="300"

            >
              % Répartition des Charges
            </div>
            <div className="img-cont">
              {/* <img
                className="imgHover -mt-[600px]"
                alt="lorem picsum"
                src="https://picsum.photos/600/900?random=15"
              /> */}
            </div>
          </Paraph>
        </div>
      </div>
      <div>
        <img
          className="visible 2xl:collapse my-20 2xl:my-0 mx-auto 2xl:h-0"
          src={kpi}
          alt="kpi"
        />
      </div>
    </>
  );
};

export default KpiCircle;
