import React from "react";
import Header from "../components/Header";
import Title from "../components/Title.js";
import { Helmet } from "react-helmet-async";
//image
// import planAction from "./assets/images/PlanAction.PNG";
import solutionDef from "./assets/images/report.jpg";
import devisDef from "./assets/images/devis.jpg";
import solution from "./assets/images/solution.jpg";

//icon
import readaptation from "./assets/images/readaption.png";
import adaptation from "./assets/images/adaptation.png";
import customer from "./assets/images/customer.jpg";
import search from "./assets/images/search.png";
import devis from "./assets/images/devis.png";
import prod from "./assets/images/prod.png";
import report from "./assets/images/report.png";

const PlanDAction = () => {
  return (
    <>
      <Helmet>
        <title>Plan d'Action</title>
        <meta
          name="description"
          content="Notre expérience nous permet de vous conseiller et vous proposer le modèle adapté à votre structure."
        />
        <link rel="canonical" href="/planAction" />
      </Helmet>
      <section id="planDAction">
        <Header namePage={"Plan D'Action"} />
        <div className="w-full mx-auto z-0 mt-28">
          <Title
            titleStyle={
              "lg:mx-auto lg:w-[1000px] font-semibold 2xl:leading-[40px] 3xl:leading-[60px] relative text-lg leading-[30px] 3xl:w-[550px] lg:text-2xl 2xl:text-lg 3xl:text-3xl top-[10px] sm:top-10 md:top-44 lg:top-44 2xl:right-[550px] 3xl:right-[750px] 2xl:w-[400px] 2xl:-top-[-10px] 3xl:-top-[-25px]"
            }
            titleDesc={
              "Notre expérience nous permet de vous conseiller et vous proposer le modèle adapté à votre structure"
            }
          />
        </div>
        <div className="3xl:w-[2000px] lg:h-[4000px] max-lg:h-[3700px] xl:h-[2500px] lg:visible lg:w-[1000px] xl:w-[1200px] w-[320px] xm:w-[600px] sm:w-[320px] smd:w-[430px] mx-auto rounded-xl py-10 mb-10 bgImg">
          <div className="flex justify-end">
            <div className="w-[800px] h-[200px] flex justify-around mb-44 font-bold ">
              <div
                data-aos="fade-down-right"
                className="relative max-smd:w-[300px] max-smd:left-[240px] max-smd:right-[30px] max-xm:left-[290px] max-md:left-[200px] max-lg:left-[190px] 2xl:right-[120px] max-xl:top-[150px] max-xl:left-[90px] max-3xl:left-[200px] w-[410px] h-[300px] bg-slate-200 rounded-md my-auto xl:text-left shadow-xl"
              >
                <ul className="list-disc list-inside xl:ml-2 max-xl:mt-[160px]">
                  <li className="mt-3 titleText">
                    Récurrence de l'actualisation des données
                  </li>
                  <li className="mt-3 titleText">
                    KPI / Métriques / Fiche Spécifique
                  </li>
                  <li className="mt-3 titleText">Gestion des rôles</li>
                </ul>
              </div>
              <div
                data-aos="fade-up-left"
                className="relative max-smd:w-[250px] max-smd:right-[30px] max-xm:right-[70px] max-md:right-[150px] max-lg:right-[160px] 3xl:right-[290px] 2xl:top-[120px] max-2xl:top-[120px] max-xl:right-[310px] max-xl:top-[50px] w-[300px] h-[250px] expClient rounded-md my-auto shadow-xl"
              >
                <img
                  className="mx-auto mt-10 w-[70px] h-[70px]"
                  src={customer}
                  alt="customer"
                />
                <p className="mt-12 text-white">
                  1. Expression du besoin client
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center relative left-[40px]">
            <div className="w-[800px] h-[200px] flex justify-around mb-44 font-bold">
              <div
                data-aos="fade-up-right"
                className="relative z-10 max-smd:w-[250px] max-smd:left-[105px] max-xm:left-[170px] max-md:left-[160px] max-lg:left-[160px] max-2xl:top-[100px] max-2xl:right-[240px] 2xl:top-[90px] 3xl:right-[350px] 2xl:right-[230px] max-xl:top-[120px] max-xl:left-[200px] w-[300px] h-[250px] diagData rounded-md my-auto shadow-xl"
              >
                <img
                  className="mx-auto mt-10 w-[70px] h-[70px]"
                  src={search}
                  alt=""
                />
                <p className="mt-10 text-white">
                  2. Diagnostic des données et des irritants
                </p>
              </div>
              <div
                data-aos="fade-down-left"
                className="relative max-smd:w-[300px] max-smd:left-[-170px] max-xm:left-[-190px] max-md:left-[-200px] max-lg:left-[-190px] 2xl:top-[-60px] 2xl:right-[450px] 3xl:right-[500px] max-xl:top-[250px] max-xl:right-[190px] max-2xl:top-[-70px] max-2xl:right-[430px] w-[410px] h-[320px] rounded-md my-auto text-left backdrop-blur-sm bg-white/50 shadow-gray-50 shadow-md"
              >
                <ul className="list-disc list-inside xl:ml-2 max-xl:mt-[160px] max-xl:text-center">
                  <li className="titleText mt-3">
                    Etude de la structure de la base de données
                  </li>
                  <li className="titleText mt-3">
                    Identification des sources externes et des intervenants
                  </li>
                  <li className="titleText mt-3">Gestion des rôles</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <div className="w-[800px] h-[200px] flex justify-around mb-44 font-bold">
              <div
                data-aos="fade-down-right"
                className="relative max-smd:w-[300px] max-smd:left-[240px] max-smd:right-[30px] max-xm:left-[290px] max-md:left-[200px] max-lg:left-[190px] 3xl:left-[-120px] 2xl:left-[200px] max-2xl:left-[200px] max-2xl:top-[-125px] 2xl:top-[-100px] max-xl:top-[400px] max-xl:left-[100px] w-[410px] h-[320px] bg-slate-200 rounded-md my-auto text-left shadow-xl"
              >
                <ul className="leading-7 list-disc list-inside xl:ml-3 max-xl:mt-[130px] max-xl:text-center">
                  <li className="titleText mt-3">
                    Définition des conditions de réalisation
                  </li>
                  <li className="titleText mt-3">
                    Définition de l'architecture adaptée
                  </li>
                  <li className="titleText mt-3">
                    Proposition des présentations
                  </li>
                  <li className="titleText mt-3">Délai de mise en oeuvre</li>
                </ul>
              </div>
              <div
                data-aos="fade-up-left"
                className="relative max-smd:w-[250px] max-smd:right-[35px] max-xm:right-[60px] max-md:right-[150px] max-lg:right-[160px] 2xl:right-[10px] 3xl:right-[270px] max-2xl:top-[50px] 2xl:top-[90px] max-xl:top-[250px] max-xl:right-[300px] w-[300px] h-[250px] propSolution rounded-md my-auto shadow-xl"
              >
                <img
                  className="mx-auto mt-10 w-[70px] h-[70px]"
                  src={adaptation}
                  alt=""
                />
                <p className="mt-12 text-white">
                  3. Proposition d'une solution adaptée
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-start">
            <div className="w-[800px] h-[200px] flex justify-around mb-44 font-bold">
              <div
                data-aos="fade-up-right"
                className="z-10 relative max-smd:w-[250px] max-smd:left-[40px] max-xm:left-[70px] max-md:left-[160px] max-lg:left-[160px] 2xl:top-[50px] 2xl:left-[10px] 3xl:left-[320px] max-xl:top-[400px] max-xl:left-[360px] w-[300px] h-[250px] readapt rounded-md my-auto shadow-xl"
              >
                <img
                  className="mx-auto mt-10 w-[70px] h-[70px]"
                  src={readaptation}
                  alt="intelligence"
                />
                <p className="mt-12 text-white">
                  3.2 Réadaptation de la solution
                </p>
              </div>
              <div
                data-aos="fade-down-left"
                className="relative max-smd:w-[300px] max-smd:left-[-240px] max-xm:left-[-290px] max-md:left-[-200px] max-lg:left-[-190px] 2xl:right-[210px] 3xl:left-[150px] 2xl:top-[-150px] max-2xl:right-[190px] max-2xl:top-[-180px] max-xl:top-[550px] max-xl:right-[50px] w-[410px] h-[320px] my-auto text-left shadow-xl"
              >
                <img
                  className="w-[410px] h-[320px] md:object-fill object-cover rounded-md"
                  src={solution}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="flex justify-end relative left-[70px]">
            <div className="w-[800px] h-[200px] flex justify-around mb-44 font-bold">
              <div
                data-aos="fade-down-right"
                className="relative max-smd:w-[300px] max-smd:left-[170px] max-xm:left-[230px] max-md:left-[140px] max-lg:left-[150px] 2xl:left-[130px] 3xl:left-[-180px] max-2xl:top-[-235px] max-2xl:left-[130px] 2xl:top-[-200px] max-xl:top-[700px] max-xl:left-[30px] w-[410px] h-[320px] bg-slate-200 rounded-md my-auto text-left shadow-xl"
              >
                <img
                  className="w-[410px] h-[320px] md:object-fill object-cover rounded-md"
                  src={devisDef}
                  alt=""
                />
              </div>
              <div
                data-aos="fade-up-left"
                className="relative max-smd:w-[250px] max-smd:right-[105px] max-xm:right-[130px] max-md:right-[220px] max-lg:right-[210px] 3xl:right-[380px] 2xl:right-[80px] max-2xl:right-[70px] max-2xl:top-[-50px] max-xl:top-[550px] max-xl:right-[365px] w-[300px] h-[250px] propDevis rounded-md my-auto shadow-xl"
              >
                <img
                  className="mx-auto mt-10 w-[70px] h-[70px]"
                  src={devis}
                  alt="devis"
                />
                <p className="mt-10 text-white">
                  4. Proposition du devis et de l'architecture
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-start relative left-[70px] ">
            <div className="w-[800px] h-[200px] flex justify-around mb-44 font-bold">
              <div
                data-aos="fade-up-right"
                className="z-10 relative  max-smd:w-[250px] max-smd:left-[-30px] max-xm:left-[0px] max-md:left-[90px] max-lg:left-[100px] 2xl:left-[10px] 2xl:top-[-60px] 2xl:right-[60px] 3xl:left-[250px] max-xl:left-[280px] max-xl:top-[700px] max-2xl:top-[-110px] max-2xl:right-[70px] w-[300px] h-[250px] prod rounded-md my-auto shadow-xl"
              >
                <img
                  className="w-[70px] h-[70px] mx-auto mt-10"
                  src={prod}
                  alt="production"
                />
                <p className="mt-16 text-white">5. Production</p>
              </div>
              <div
                data-aos="fade-down-left"
                className="relative max-smd:w-[300px] max-smd:left-[-310px] max-xm:left-[-350px] max-md:left-[-265px] max-lg:left-[-260px] 2xl:right-[280px] 3xl:left-[100px] 2xl:top-[-250px] max-2xl:top-[-291px] max-2xl:right-[260px] max-xl:top-[850px] max-xl:right-[120px] w-[410px] h-[320px] backdrop-blur-sm bg-white/50 shadow-gray-50 rounded-sm my-auto text-left shadow-xl"
              >
                <ul className="list-disc list-inside xl:ml-3 max-xl:mt-[130px] max-xl:text-center text-sm">
                  <li className="titleText mt-3">
                    Communication avec les intervenants
                  </li>
                  <li className="titleText mt-3">
                    Création de l'environnement adapté
                  </li>
                  <li className="titleText mt-3">Création des rôles</li>
                  <li className="titleText mt-3">Création des passerelles</li>
                  <li className="titleText mt-3">
                    Création des tableaux de bords et de son ergonomie
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex justify-center relative left-[200px]">
            <div className="w-[800px] h-[200px] flex justify-evenly mb-44 font-bold">
              <div
                data-aos="fade-down-right"
                className="relative max-smd:w-[300px] max-smd:left-[-75px] max-xm:left-[-50px] max-md:left-[-40px] max-lg:left-[-30px] xl:left-[200px] 3xl:left-[280px] 2xl:right-[380px] 2xl:top-[-300px] max-xl:right-[110px] max-xl:top-[1000px] max-2xl:top-[-350px] max-2xl:left-[0px] w-[410px] h-[320px] bg-slate-200 rounded-md my-auto text-left shadow-xl"
              >
                <img
                  className="w-[410px] h-[320px] md:object-fill object-cover rounded-md"
                  src={solutionDef}
                  alt="solution"
                />
              </div>
              <div
                data-aos="fade-up-left"
                className="relative max-smd:w-[250px] max-smd:right-[350px] max-xm:right-[400px] max-md:right-[390px] max-lg:right-[380px] 3xl:left-[100px] 2xl:left-[-10px] 2xl:top-[-100px] max-xl:right-[390px] max-xl:top-[860px] max-2xl:top-[-160px] w-[300px] h-[250px] def rounded-md my-auto shadow-xl"
              >
                <img
                  className="mx-auto mt-10 w-[70px] h-[70px]"
                  src={report}
                  alt="report"
                />
                <p className="mt-10 text-white">
                  6. Présentations définitive de la solution
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PlanDAction;
