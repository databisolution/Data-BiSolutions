import React from "react";
import KpiCircle from "../components/KpiCircle";
import { Link } from "react-router-dom";
import dashlogo from "../containers/assets/images/dashlogo.png";
import rpa from "../containers/assets/images/rpa.png";
import info from "../containers/assets/images/information.png";
import idea from "../containers/assets/images/idea.png";
import arrowL from "../containers/assets/images/arrow-light.png";
import arrowLM from "../containers/assets/images/arrow-light-medium.png";
import arrowM from "../containers/assets/images/arrow-medium.png";
import arrowMH from "../containers/assets/images/arrow-medium-hard.png";
import db from "../containers/assets/images/db.png";
import smart from "../containers/assets/images/intelligence.png";
import board from "../containers/assets/images/board.png";
import auto from "../containers/assets/images/automatisation.png";
import decision from "../containers/assets/images/decision.png";
import Swipers from "../components/Swipers";
import OrgCard from "../components/OrgCard";
import Title from "../components/Title";
import EvolutionLogo from "../components/EvolutionLogo";
import Header from "../components/Header";
import Sources from "../components/Sources";

const MainPage = () => {
  return (
    <main>
      <div className=" mx-auto z-0 w-full px-1 flex flex-col ">
        <Header
          namePage={"Data & BI Solutions"}
          textStyle={
            "header text-slate-100 top-[390px] lg:top-[320px] 2xl:text-3xl xl:text-2xl text-left absolute w-[300px] lg:w-[500px] 2xl:w-[590px] 2xl:h-[268px] -right-[40px] m-10 2xl:leading-[40px] rounded-lg backdrop-blur-[1.5px] bg-black/30"
          }
          desc={
            "Une entreprise créée avec une volonté de répondre aux besoins uniques à chaque activité et d’apporter des solutions dédiées en analyse BI et en applications automatisées pour les dirigeants et leurs équipes."
          }
        />
        <div className="h-[1000px] w-[300px] lg:w-[1020px] lg:h-[320px] mx-auto flex flex-col lg:flex-row justify-between items-center mt-10">
          <OrgCard
            cardLogo={dashlogo}
            cardTitle={"Tableaux de Bords"}
            cardDesc={"Créer des tableaux de bords adaptés à vos besoins."}
          />
          <OrgCard
            cardLogo={rpa}
            cardTitle={"Automatisation"}
            cardDesc={
              "Apporter des outils automatisés pour faciliter la communication dans vos équipes."
            }
          />
          <OrgCard
            cardLogo={info}
            cardTitle={"Fiabilité"}
            cardDesc={"Fiabiliser l’information "}
          />
        </div>
        <Title
          titleStyle={
            "lg:mx-auto lg:w-[1000px] font-semibold 2xl:leading-[40px] 3xl:leading-[60px] relative text-lg leading-[30px] 3xl:w-[550px] lg:text-2xl 2xl:text-lg 3xl:text-3xl top-[10px] sm:top-10 md:top-44 lg:top-44 2xl:right-[550px] 3xl:right-[750px] 2xl:w-[400px] 2xl:-top-[40px] 3xl:top-[10px]"
          }
          titleDesc={
            "Des informations multi-sources, multi-formats collectées et centralisées pour une analyse précise et globale de votre activité"
          }
        />
        <Sources />
        <Title
          titleStyle={
            "lg:mx-auto lg:w-[1000px] font-semibold 2xl:leading-[40px] 3xl:leading-[60px] relative text-lg leading-[30px] 3xl:w-[550px] lg:text-2xl 2xl:text-lg 3xl:text-3xl top-[10px] sm:top-10 md:top-44 lg:top-44 2xl:right-[550px] 3xl:right-[750px] 2xl:w-[400px] 2xl:-top-[60px] 3xl:-top-[25px]"
          }
          titleDesc={
            "Faisons interagir vos données pour vous mettre à disposition des rapports précis. Développons ensemble les outils dédiés à votre activité et vos besoins."
          }
        />
        <div className="evol w-[300px] md:w-[550px] h-[1000px] 3xl:w-[1300px] lg:w-full xl:w-[1100px] xl:h-[400px] lg:h-[600px] flex flex-col lg:flex-row justify-evenly mx-auto relative -top-[250px] sm:-top-[50px] xl:-top-[250px] 3xl:-top-[350px] lg:-mb-44">
          <div
            className="relative lg:top-[50%] lg:left-10"
            data-aos="fade-up-right"
            data-aos-duration="400"
            data-aos-delay="100"
          >
            <EvolutionLogo imgEvo={db} txtEvo={"Centralisation des données"} />
          </div>
          <img
            className="h-[50px] w-[50px] lg:h-[50px] rotate-90 lg:-rotate-45 lg:relative top-[55%] mx-auto"
            src={arrowL}
            alt=""
          />
          <div
            className="relative lg:top-[20%]"
            data-aos="fade-up-right"
            data-aos-duration="800"
            data-aos-delay="100"
          >
            <EvolutionLogo
              imgEvo={auto}
              txtEvo={"Automatisation des données"}
            />
          </div>
          <img
            className="h-[50px] w-[50px] lg:h-[50px] rotate-90 lg:relative lg:top-[25%] lg:right-[2%] lg:-rotate-45 mx-auto"
            src={arrowLM}
            alt="arrow"
          />

          <div className="" data-aos="fade-down-right" data-aos-duration="500">
            <EvolutionLogo
              imgEvo={smart}
              txtEvo={"Transformation des données"}
            />
            <img
              className="relative my-5 lg:top-[-200px] 2xl:top-[-550px] 2xl:left-[600px] 3xl:left-[900px] 3xl:-top-[550px] 3xl:w-24 mx-auto w-20"
              src={idea}
              alt="idea"
            />
            <div className="lg:relative my-5 lg:top-[-170px] 2xl:top-[-550px] 2xl:left-[600px] 3xl:-top-[550px] 3xl:left-[900px] 2xl:text-[14px] 3xl:text-2xl font-semibold text-xl relative">
              <p>une idée</p>
              <p>un besoin</p>
              <p>une solution</p>
            </div>
          </div>
          <img
            className="h-[50px] w-[50px] lg:h-[50px] rotate-90 lg:rotate-45 relative lg:top-[25%] lg:left-[2%] mx-auto"
            src={arrowM}
            alt="arrow"
          />
          <div
            className="relative lg:top-[20%]"
            data-aos="fade-down-right"
            data-aos-duration="1200"
            data-aos-delay="100"
          >
            <EvolutionLogo
              imgEvo={board}
              txtEvo={"Visualisation des données"}
            />
          </div>
          <img
            className="h-[50px] w-[50px] lg:h-[50px] rotate-90 lg:rotate-45 relative lg:top-[55%] mx-auto"
            src={arrowMH}
            alt="arrow"
          />
          <div
            className="relative lg:top-[50%] lg:right-5"
            data-aos="fade-down-right"
            data-aos-duration="1400"
            data-aos-delay="100"
          >
            <EvolutionLogo imgEvo={decision} txtEvo={"Prise de décision"} />
          </div>
        </div>
        <Title
          titleStyle={
            "lg:mx-auto lg:w-[1000px] font-semibold 2xl:leading-[40px] 3xl:leading-[60px] relative text-lg leading-[30px] 3xl:w-[550px] lg:text-2xl 2xl:text-lg 3xl:text-3xl top-[10px] sm:top-10 md:top-44 lg:top-44 2xl:right-[550px] 3xl:right-[750px] 2xl:w-[400px] 2xl:-top-[50px] 3xl:-top-[15px]"
          }
          titleDesc={
            " La centralisation de la donnée offre de grandes possibilités d’analyse. Evolution, répartition et autres indicateurs clés sont accessibles."
          }
        />
        <KpiCircle />
        <div className="w-52 border border-slate-300 mb-32 relative 2xl:-top-16 mx-auto "></div>
        <div className="h-full mx-auto">
          <p className="3xl:text-4xl xm:text-lg lg:text-xl xlx:text-2xl text-md 2xl:-mt-[150px] mx-auto w-[300px] sx:w-[600px] lg:w-[900px] xlx:w-[1300px] font-extrabold"
           data-aos="fade-up"
           data-aos-duration="1100"
          >
            Des entreprises comme la vôtre réalisent chaque jour des projets BI
            pour améliorer leur quotidien
          </p>
          <Swipers />
          <Link to="/contact">
            <button
              className="text-3xl font-semibold buttonContact shadow-2xl shadow-cyan-200/100 my-48 p-8 px-20 transition ease-in-out delay-350 hover:-translate-y-0.5 hover:scale-110 hover:text-white duration-500">
              Réalisons votre projet
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default MainPage;
