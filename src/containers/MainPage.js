import React from "react";
// import Indicateurs from "./assets/images/INDICATEURS.PNG";7
import KpiCircle from "../components/KpiCircle";
// import Kpi from "./assets/images/KPI.PNG";
import MainImage from "./assets/images/accueil.jpg";
import { Link } from "react-router-dom";
import logo from "./assets/images/logo.PNG";
import Swipers from "../components/Swipers";

const MainPage = () => {
  return (
    <main>
      <div className=" mx-auto z-0 w-full px-1">
        <div className="py-32 " data-aos="zoom-in" data-aos-duration="1000">
          <img
            src={MainImage}
            alt="mainImage"
            className=" mx-auto sm:h-[300px] w-full md:w-full object-cover shadow-lg"
          />
          {/*py-32 h-[600px] w-[1400px] object-cover*/}
          <h1 className="absolute top-[250px] left-[130px] text-4xl text-white font-semibold backdrop-blur-[.5px]">
            Data & BI Solutions
          </h1>
        </div>
        <div className="h-full mx-auto mb-10 ">
          {" "}
          {/*h-full w-[1200px] mx-auto mb-10*/}
          <p className="text-xl" data-aos="zoom-in" data-aos-duration="1500">
            Des informations multi-sources, multi-formats collectées et
            centralisées pour une analyse précise et globale de votre activité
          </p>
          <div
            className="border-b-[2px] mx-auto w-52 p-4"
            data-aos="zoom-in-down"
            data-aos-duration="1800"
            // data-aos="zoom-in" data-aos-delay="800" data-aos-duration="500"
          ></div>
          <div className="" data-aos="zoom-in-down" data-aos-duration="2000">
            {/* <img className='mx-auto py-4' alt='multiSecteurs' src={MultiSecteurs}/> */}
            <div className="flex flex-wrap h-[1250px] lg:h-[600px] xl:w-[1100px] mx-auto my-5 p-10 shadow-lg rounded-md">
              <div className="h-[230px] w-[600px] md:w-[750px] lg:w-[450px] border-5 mt-5 bg-slate-100 opacity-75 mx-auto rounded z-20 shadow-md">
                <p className="mt-10 relative bottom-5  text-zinc-600 text-2xl font-bold">
                  Trésorerie
                </p>
                <p
                  className=" relative mr-[120px] text-2xl text-zinc-600 font-bold"
                  data-aos="zoom-in"
                  data-aos-delay="1200"
                  data-aos-duration="500"
                >
                  Fournisseurs
                </p>
                <p
                  className=" relative mt-[20px] text-blue-900 text-2xl font-bold"
                  data-aos="zoom-in"
                  data-aos-delay="500"
                  data-aos-duration="500"
                >
                  Clients
                </p>
                <p
                  className=" relative ml-[70px] mt-[30px] text-zinc-600 text-2xl font-bold"
                  data-aos="zoom-in"
                  data-aos-delay="1500"
                  data-aos-duration="500"
                >
                  Financement
                </p>
              </div>
              <div className="h-[230px] w-[600px] md:w-[750px] lg:w-[450px] border-5 mt-5 bg-slate-100 opacity-75 mx-auto rounded z-20 shadow-md">
                <p
                  className=" mt-10 relative bottom-5 right-10 text-zinc-600 text-2xl font-bold"
                  data-aos="zoom-in"
                  data-aos-delay="900"
                  data-aos-duration="500"
                >
                  Achats
                </p>
                <p
                  className=" relative mr-[100px] text-2xl text-zinc-600 font-bold"
                  data-aos="zoom-in"
                  data-aos-delay="1300"
                  data-aos-duration="500"
                >
                  Stocks
                </p>
                <p
                  className=" relative mt-[20px] text-blue-900 text-2xl font-bold"
                  data-aos="zoom-in"
                  data-aos-delay="600"
                  data-aos-duration="500"
                >
                  Charges
                </p>
                <p
                  className=" relative ml-[70px] mt-[30px] text-zinc-600 text-2xl font-bold"
                  data-aos="zoom-in"
                  data-aos-delay="1600"
                  data-aos-duration="500"
                >
                  Délais de Rotation
                </p>
              </div>
              <div className="h-[230px] w-[600px] md:w-[750px] lg:w-[450px] border-5 mt-5 bg-slate-100 opacity-75 mx-auto rounded z-20 shadow-md">
                <p
                  className=" mt-10 relative bottom-5 left-8 text-zinc-600 text-2xl font-bold"
                  data-aos="zoom-in"
                  data-aos-delay="1000"
                  data-aos-duration="500"
                >
                  CA
                </p>
                <p
                  className=" relative mr-[120px] text-2xl text-zinc-600 font-bold"
                  data-aos="zoom-in"
                  data-aos-delay="1400"
                  data-aos-duration="500"
                >
                  Marge
                </p>
                <p
                  className=" relative mt-[20px] text-blue-900 text-2xl font-bold"
                  data-aos="zoom-in"
                  data-aos-delay="700"
                  data-aos-duration="500"
                >
                  Résultats
                </p>
                <p
                  className=" relative ml-[20px] mt-[30px] xm:ml-[150px] text-zinc-600 text-2xl font-bold"
                  data-aos="zoom-in"
                  data-aos-delay="1700"
                  data-aos-duration="500"
                >
                  Part de marché
                </p>
              </div>
              <div className="h-[230px] w-[600px] md:w-[750px] lg:w-[450px] border-5 mt-5  bg-slate-100 opacity-75 mx-auto rounded z-20 backdrop-blur/10 shadow-md">
                <p
                  className=" mt-10 relative bottom-5 right-8 text-zinc-600 text-2xl font-bold"
                  data-aos="zoom-in"
                  data-aos-delay="1100"
                  data-aos-duration="500"
                >
                  Frais
                </p>
                <p
                  className=" relative ml-[120px] text-2xl text-zinc-600 font-bold"
                  data-aos="zoom-in"
                  data-aos-delay="1500"
                  data-aos-duration="500"
                >
                  Salaires
                </p>
                <p
                  className=" relative mt-[20px] text-blue-900 text-2xl font-bold"
                  data-aos="zoom-in"
                  data-aos-delay="800"
                  data-aos-duration="500"
                >
                  Social
                </p>
                <p
                  className=" relative mr-[90px] mt-[30px] text-zinc-600 text-2xl font-bold"
                  data-aos-delay="1800"
                  data-aos-duration="500"
                >
                  Turn-Over
                </p>
              </div>
              <img
                alt="logo"
                src={logo}
                className=" collapse xl:visible z-0 w-[100px] h-[100px] absolute lg:ml-[460px] lg:mt-[210px]"
              />
            </div>
          </div>
          <div
            className="border-b-[2px] mx-auto w-52 p-4"
            data-aos="zoom-in-down"
            data-aos-duration="1800"
          ></div>
          <p className="text-xl">
            La centralisation de la donnée offre de grandes possibilités
            d’analyse
          </p>
        </div>
        <div className="h-full  mx-auto mb-10">
          {" "}
          {/*h-full w-[1200px] border-2 mx-auto mb-10*/}
          <p className="text-xl" data-aos="fade-up" data-aos-duration="1000">
            Evolution, répartition et autres indicateurs clés sont accessibles.
            Nous nous chargeons de faire interagir vos données pour vous mettre
            à disposition des rapports précis. Développons ensemble les outils
            dédiés à votre activité et vos besoins pour vous accompagner dans
            votre stratégie et vos décisions.
          </p>
          <div
            className="border-b-[2px] mx-auto w-52 p-4"
            data-aos="zoom-in-down"
            data-aos-duration="1800"
          ></div>
        </div>
        <div className="flex flex-row">
          <KpiCircle />
         
        </div>
        <div
          className="h-full mx-auto mb-10"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          {" "}
          {/*h-full w-[1200px] border-2 mx-auto mb-10*/}
          <p className="text-4xl mt-[200px]" data-loc="imagetest">
            Réaliser votre projet
          </p>
          <div className="border-b-[2px] mx-auto w-52 p-4"></div>
          <p className="text-xl py-5">
            Des entreprises comme la vôtre réalise chaque jour des projets BI
            pour améliorer leur quotidien
          </p>
          <Swipers />
          <Link to="/contact">
            <button
              className=" text-3xl bg-blue-400 rounded-full my-10 p-8 px-20 transition ease-in-out delay-150 hover:-translate-y-0.5 hover:scale-110 hover:text-white duration-300"
              data-aos="zoom-out"
              data-aos-duration="1200"
            >
              Allons-Y
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default MainPage;
