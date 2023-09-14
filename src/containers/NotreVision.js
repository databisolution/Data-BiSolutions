import ergonomic from "./assets/images/ergonomic.jpg";
import VisionLi from "../components/VisionLi";
import Vision4List from "../components/Vision4List";
import rpa from "./assets/images/rpa_concept.jpg";
import security from "./assets/images/security.jpg"
import plateforme from "./assets/images/plateforme.jpg"
import centralised from "./assets/images/centralised.jpg"
import auto from "./assets/images/auto.jpg"
import Header from "../components/Header"


import React from "react";

const NotreVision = () => {
  return (
    <>
    <Header namePage={"Pourquoi Data BI Solutions?"} />
    <section className="h-[3900px]">
      <div className="relative w-full sx:w-[500px] md:w-[600px] lg:w-[800px] 2xl:w-[1000px] h-[1200px] sx:bg-[#d2e0e0] rounded-md sx:mx-auto mt-44">
        <h2 className="max-sx:relative max-sx:top-[-50px] sx:pt-5 font-extrabold text-2xl text-cyan-500">Utilisez une solution dédié pour votre stratégie </h2>
        <div className="sx:absolute max-sx:mt-[-40px] max-sx:mx-auto sx:left-[-45px] sx:mt-[130px] w-[290px] slg:w-[300px] md:w-[350px] lg:w-[500px] 2xl:w-[700px] 2xl:h-[420px] h-[320px] bg-slate-900 rounded-md" data-aos="fade-right" data-aos-duration="1200">
          <img
            className="object-cover w-[290px] slg:w-[300px] md:w-[350px] lg:w-[500px] 2xl:w-[700px] 2xl:h-[420px] h-[320px] rounded-md"
            src={plateforme}
            alt=""
          />
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="1200"
          className="p-12 max-sx:top-[250px] max-xm:mx-auto max-xm:px-10 text-left w-full absolute sx:right-[-40px] sx:mt-[165px] sx:w-[400px] md:w-[500px] 2xl:h-[350px] 2xl:leading-8  sm:leading-4 leading-4 text-sm 2xl:text-md h-[250px] bg-slate-100 rounded-md shadow-xl"
        >
          <h2 className="font-semibold mb-2 md:mb-5">Une plateforme dédiée</h2>
          <Vision4List
            el1={"Dashboard sur-mesure à l'activité"}
            el2={
              "Gestion des rôles pour une présentation de l'information ciblée"
            }
            el3={"Outils de pilotage pour les responsables opérationnels "}
            el4={
              "Des indicateurs pertinents pour votre organisation et votre activité"
            }
          />
        </div>
        <div data-aos="fade-left" data-aos-duration="1200" className="sx:absolute max-sx:mt-48 max-sx:mx-auto sx:right-[-45px] sx:mt-[630px] w-[290px] slg:w-[300px] md:w-[350px] lg:w-[500px] 2xl:w-[700px] 2xl:h-[420px] h-[320px] bg-slate-900 rounded-md">
          <img
            className="object-cover w-[290px] slg:w-[300px] md:w-[350px] lg:w-[500px] 2xl:w-[700px] 2xl:h-[420px] h-[320px] rounded-md"
            src={ergonomic}
            alt=""
          />
        </div>
        <div data-aos="fade-right" data-aos-duration="1200" className="p-12 max-sx:top-[800px] max-xm:mx-auto max-xm:px-10 text-left w-full absolute sx:left-[-40px] sx:mt-[665px] sx:w-[400px] md:w-[500px] 2xl:h-[350px] 2xl:leading-8 sm:leading-4 leading-4 text-sm 2xl:text-md h-[250px] bg-slate-100 rounded-md shadow-xl">
          <h2 className="font-semibold mb-2 md:mb-5">Ergonomique</h2>
          <Vision4List
            el1={"Des filtres applicatifs au choix"}
            el2={"Une navigation adaptée à votre besoin"}
            el3={"Une vision globale et détaillée des indicateurs"}
            el4={"Un interface intuitif"}
          />
        </div>
      </div>
      <h2 className="mt-10 font-extrabold text-2xl text-cyan-500">Pérennisez et sécurisez les flux d'informations au sein de votre structure</h2>
      <div className="relative w-full sx:w-[500px] md:w-[600px] lg:w-[800px] 2xl:w-[1000px] mx-auto">
        <div data-aos="fade-right" data-aos-duration="1200" className="sx:absolute max-sx:mt-10 max-sx:mx-auto sx:left-[-45px] sx:mt-[130px] w-[290px] slg:w-[300px] md:w-[350px] lg:w-[500px] 2xl:w-[700px] 2xl:h-[420px] h-[320px] bg-slate-900 rounded-md">
          <img
            className="object-cover w-[290px] slg:w-[300px] md:w-[350px] lg:w-[500px] 2xl:w-[700px] 2xl:h-[420px] h-[320px] rounded-md"
            src={rpa}
            alt=""
          />
        </div>




        <div data-aos="fade-left" data-aos-duration="1200" className="p-12 max-sx:top-[190px] max-xm:mx-auto max-xm:px-10 text-left w-full absolute sx:right-[-40px] sx:mt-[165px] sx:w-[400px] md:w-[500px] 2xl:h-[350px] 2xl:leading-8 sm:leading-4 leading-4 text-sm 2xl:text-md h-[250px] bg-slate-100 rounded-md shadow-xl">
          <h2 className="font-semibold mb-2 md:mb-5">Automatique</h2>
          <ul className="list-disc">
            <li>
              Une actualisation régulière et ajustée de vos présentations
              (quotidienne ou en temps réel)
            </li>
            <li>
              Le rapatriement de toutes vos sources de données sur un espace
              Cloud unique pour faciliter l'interaction et en faciliter
              l'exploitation
            </li>
          </ul>
        </div>
      </div>

      <div className="relative w-full sx:w-[500px] md:w-[600px] lg:w-[800px] 2xl:w-[1000px] mx-auto mt-36">
        <div data-aos="fade-left" data-aos-duration="1200" className="sx:absolute max-sx:mt-48 max-sx:mx-auto sx:right-[-45px] sx:mt-[630px] w-[290px] slg:w-[300px] md:w-[350px] lg:w-[500px] 2xl:w-[700px] 2xl:h-[420px] h-[320px] bg-slate-900 rounded-md">
          <img
            className="object-cover w-[290px] slg:w-[300px] md:w-[350px] lg:w-[500px] 2xl:w-[700px] 2xl:h-[420px] h-[320px] rounded-md"
            src={security}
            alt=""
          />
        </div>
        <div data-aos="fade-right" data-aos-duration="1200" className="p-12 max-sx:top-[200px] max-xm:mx-auto max-xm:px-10 text-left w-full absolute sx:left-[-40px] mt-[10px] sx:mt-[665px] sx:w-[400px] md:w-[500px] 2xl:h-[350px] 2xl:leading-8 sm:leading-4 leading-4 text-sm 2xl:text-md h-[250px] bg-slate-100 rounded-md shadow-xl">
          <h2 className="font-semibold mb-2 md:mb-5">Sécurité</h2>
          <ul className="list-disc">
            <li>Historisation et archivage des données</li>
            <li>
              Monitoring pour contrôler l'exactitude des sources de données
            </li>
            <li>Protection des données utilisées</li>
          </ul>
        </div>
      </div>


      
      <h2 className="relative top-[180px] sx:top-[1080px]  xl:top-[1080px] 2xl:top-[1130px] font-extrabold text-2xl text-cyan-500">Optimisez le temps de vos équipes et améliorer les process avec des applications métiers</h2>
      <VisionLi
        MainDiv={
          "mt-[200px] sx:mt-[1070px] relative w-full sx:w-[500px] md:w-[600px] lg:w-[800px] 2xl:w-[1000px] mx-auto"
        }
        img={auto}
        title={"Processus automatisés"}
        el1={"Automatisés vos opérations d'entreprise manuels"}
        el2={"Obtenir rapidement des applications spécifiques à votre métier"}
        el3={"Associer les données des applications à vos dashboard"}
        el4={"Créer des editions personnalisées et dédiées"}
      />

      <div className="relative w-full sx:w-[500px] md:w-[600px] lg:w-[800px] 2xl:w-[1000px] mx-auto mt-36">
        <div data-aos="fade-down" data-aos-duration="1200" className="sx:absolute max-sx:mt-72 max-sx:mx-auto sx:right-[-45px] sx:mt-[730px] w-[290px] slg:w-[300px] md:w-[350px] lg:w-[500px] 2xl:w-[700px] 2xl:h-[420px] h-[320px] bg-slate-900 rounded-md">
          <img
            className="object-cover w-[290px] slg:w-[300px] md:w-[350px] lg:w-[500px] 2xl:w-[700px] 2xl:h-[420px] h-[320px] rounded-md"
            src={centralised}
            alt=""
          />
        </div>
        <div data-aos="fade-up" data-aos-duration="1200" className="p-12 max-sx:top-[200px] max-xm:mx-auto max-xm:px-10 text-left w-full absolute sx:left-[-40px] sx:mt-[765px] sx:w-[400px] md:w-[500px] 2xl:h-[350px] 2xl:leading-8 sm:leading-4 leading-4 text-sm 2xl:text-md h-[250px] bg-slate-100 rounded-md shadow-xl">
          <h2 className="font-semibold mb-2 md:mb-5">Un espace unique</h2>
          <ul className="list-disc">
            <li>
              Vos applications, éditions, tableaux de bords, Fiche d'information
              centralisées sur un seul outil
            </li>
            <li>
              Faciliter votre utilisation et votre travail au quotidien pour
              vous concentrer sur la création de valeur
            </li>
          </ul>
        </div>
      </div>
    </section>
    </>
  );
};

export default NotreVision;
