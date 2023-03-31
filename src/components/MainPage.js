import React from "react";
// import MultiSecteurs from "./assets/images/MultiSecteurs.PNG"
import Indicateurs from "./assets/images/INDICATEURS.PNG";
import MainImage from "./assets/images/accueil.png";
import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <main>
      <div className=" mx-auto z-0 w-full px-1">
        <div className="pt-32" data-aos="zoom-in" data-aos-duration="1000">
          <img
            src={MainImage}
            alt="mainImage"
            className=" mx-auto pb-8  sm:h-[250px] w-full md:w-full object-cover"
          />
          {/*py-32 h-[600px] w-[1400px] object-cover*/}
          <h1 className="absolute top-[220px] left-[100px] text-2xl text-blue-500">Data & BI Solutions</h1>
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
          ></div>
          <div className="" data-aos="zoom-in-down" data-aos-duration="2000">
            {/* <img className='mx-auto py-4' alt='multiSecteurs' src={MultiSecteurs}/> */}
            <div className="flex flex-wrap h-[1250px] lg:h-[600px] xl:w-[1100px] border-2 mx-auto my-5 p-10 bg-cyan-100 z-0">
              <div className="h-[230px] w-[600px] md:w-[750px] lg:w-[450px] border-5 mt-5 bg-red-500 mx-auto rounded relative">
                <p className="mt-24">Finance</p>
                <p className=" mt-10">Trésorerie</p>
                <p className="mb-20">Charges</p>
                <p className="mb-32">Rentabilité</p>
                
              </div>
              <div className="h-[230px] w-[600px] md:w-[750px] lg:w-[450px] border-5 mt-5 bg-green-300 mx-auto rounded"></div>
              <div className="h-[230px] w-[600px] md:w-[750px] lg:w-[450px] border-5 mt-5 bg-gray-300 mx-auto rounded"></div>
              <div className="h-[230px] w-[600px] md:w-[750px] lg:w-[450px] border-5 mt-5  bg-yellow-300 mx-auto rounded"></div>
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
          <img
            className="mx-auto py-4 w-full xl:w-[1100px]"
            alt="multiSecteurs"
            src={Indicateurs}
            data-aos="fade-up"
            data-aos-duration="1500"
          />
        </div>

        <div
          className="h-full mx-auto mb-10"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          {" "}
          {/*h-full w-[1200px] border-2 mx-auto mb-10*/}
          <p className="text-4xl">Réaliser votre projet</p>
          <div className="border-b-[2px] mx-auto w-52 p-4"></div>
          <p className="text-xl py-5">
            Des entreprises comme la vôtre réalise chaque jour des projets BI
            pour améliorer leur quotidien
          </p>
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
