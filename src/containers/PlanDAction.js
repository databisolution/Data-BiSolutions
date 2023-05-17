import React from "react";
import Header from "../components/Header";
import Title from "../components/Title.js";

//image
import planAction from "./assets/images/PlanAction.PNG"

//icon
import customer from "./assets/images/customer.jpg";
import search from "./assets/images/search.png";
import solution from "./assets/images/solution.png";
import antenna from "./assets/images/antenna.png";
import intelligence from "./assets/images/intelligence.png";
import devis from "./assets/images/devis.png";
import prod from "./assets/images/prod.png";
import report from "./assets/images/report.png";
import checked from "./assets/images/checked.png";
import arrow from "./assets/images/arrow-light-medium.png";

const PlanDAction = () => {
  return (
    <section
      id="planDAction"
      className="pt-10"
      data-aos="zoom-in-down"
      data-aos-duration="1800"
    >
      <Header namePage={"Plan D'Action"} />
      <div className="w-full mx-auto z-0 mt-28">
        <Title
          titleStyle={
            "lg:mx-auto lg:w-[1000px] font-semibold 2xl:leading-[40px] 3xl:leading-[60px] relative text-lg leading-[30px] 3xl:w-[550px] lg:text-2xl 2xl:text-lg 3xl:text-3xl top-[10px] sm:top-10 md:top-44 lg:top-44 2xl:right-[550px] 3xl:right-[750px] 2xl:w-[400px] 2xl:-top-[50px] 3xl:-top-[15px]"
          }
          titleDesc={
            "Notre expérience nous permet de vous conseiller et vous proposer le modèle adapté à votre structure"
          }
        />
      </div>
      <div>
        <img className="mx-auto lg:collapse lg:h-0 my-32" src={planAction} alt="plan d'action"/>
      </div>
      <div className="3xl:w-[2000px] w-0 h-0 lg:h-[2800px] collapse lg:visible lg:w-[1000px] xl:w-[1500px] mx-auto">
        <div className="flex justify-center">
          <div className="w-[800px] h-[200px] flex justify-around mb-44 font-bold ">
            <div className="w-[210px] h-[200px] bg-slate-200 rounded-md my-auto text-left border-sky-300 border-2 shadow-xl">
              <ul className="list-decimal list-inside ml-2">
                <li className="mt-3 titleText">
                  Récurrence de l'actualisation des données
                </li>
                <li className="mt-3 titleText">
                  KPI / Métriques / Fiche Spécifique
                </li>
                <li className="mt-3 titleText">Gestion des rôles</li>
              </ul>
            </div>
            <div className="my-auto">
              <img
                className="mx-auto mt-10 w-[70px] h-[70px] rotate-180"
                src={arrow}
                alt=""
              />
            </div>
            <div className="w-[200px] h-[150px] bg-sky-300 rounded-md my-auto shadow-xl">
              <p className="mt-12 text-white">1. Expression du besoin client</p>
            </div>

            <div className="my-auto">
              <img
                className="mx-auto mt-10 w-[70px] h-[70px]"
                src={arrow}
                alt=""
              />
            </div>

            <div className="my-auto">
              <img
                className="mx-auto mt-10 w-[70px] h-[70px]"
                src={customer}
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="flex justify-start relative left-[40px]">
          <div className="w-[800px] h-[200px] flex justify-around mb-44 font-bold">
            <div className="my-auto">
              <img
                className="mx-auto mt-10 w-[70px] h-[70px]"
                src={search}
                alt=""
              />
            </div>

            <div className="my-auto">
              <img
                className="mx-auto mt-10 w-[70px] h-[70px] rotate-180"
                src={arrow}
                alt=""
              />
            </div>

            <div className="w-[200px] h-[150px] bg-sky-400 rounded-md my-auto shadow-xl">
              <p className="mt-10 text-white">
                2. Diagnostic des données et des irritants
              </p>
            </div>

            <div className="my-auto">
              <img
                className="mx-auto mt-10 w-[70px] h-[70px]"
                src={arrow}
                alt="fleche"
              />
            </div>
            <div className="w-[210px] h-[220px] border-sky-300 border-2 bg-slate-200 rounded-md my-auto text-left shadow-xl">
              <ul className=" list-decimal list-inside ml-2">
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

        <div className="flex justify-center">
          <div className="w-[800px] h-[200px] flex justify-around mb-44 font-bold">
            <div className="w-[200px] h-[300px] border-sky-300 border-2 bg-slate-200 rounded-md my-auto text-left shadow-xl">
              <ul className="leading-7 list-decimal list-inside ml-3">
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
            <div className="my-auto">
              <img
                className="mx-auto mt-10 w-[70px] h-[70px] rotate-180"
                src={arrow}
                alt="fleche"
              />
            </div>
            <div className="w-[200px] h-[150px] bg-sky-500 rounded-md my-auto shadow-xl">
              <p className="mt-12 text-white">
                3. Proposition d'une solution adaptée
              </p>
            </div>
            <div className="my-auto">
              <img
                className="mx-auto mt-10 w-[70px] h-[70px]"
                src={arrow}
                alt="fleche"
              />
            </div>
            <div className="my-auto">
              <img
                className="mx-auto mt-10 w-[70px] h-[70px]"
                src={solution}
                alt="solution"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-start">
          <div className="w-[800px] h-[200px] flex justify-around mb-44 font-bold">
            <div className="my-auto">
              <img
                className="mx-auto mt-10 w-[70px] h-[70px]"
                src={antenna}
                alt="réseau"
              />
            </div>
            <div className="my-auto">
              <img
                className="mx-auto mt-10 w-[70px] h-[70px] rotate-180"
                src={arrow}
                alt=""
              />
            </div>
            <div className="w-[200px] h-[150px] bg-sky-600 rounded-md my-auto shadow-xl">
              <p className="mt-12 text-white">
                3.2 Réadaptation de la solution
              </p>
            </div>
            <div className="my-auto">
              <img
                className="mx-auto mt-10 w-[70px] h-[70px]"
                src={arrow}
                alt="fleche"
              />
            </div>
            <div className="my-auto">
              <img
                className="mx-auto mt-10 w-[70px] h-[70px]"
                src={intelligence}
                alt="intelligence"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center relative left-[70px]">
          <div className="w-[800px] h-[200px] flex justify-around mb-44 font-bold">
            <div className="my-auto">
              <img
                className="mx-auto mt-10 w-[70px] h-[70px]"
                src={checked}
                alt="validate"
              />
            </div>
            <div className="my-auto">
              <img
                className="mx-auto mt-10 w-[70px] h-[70px] rotate-180"
                src={arrow}
                alt="fleche"
              />
            </div>
            <div className="w-[200px] h-[150px] bg-sky-700 rounded-md my-auto shadow-xl">
              <p className="mt-10 text-white">
                4. Proposition du devis et de l'architecture
              </p>
            </div>
            <div className="my-auto">
              <img
                className="mx-auto mt-10 w-[70px] h-[70px]"
                src={arrow}
                alt="fleche"
              />
            </div>
            <div className=" my-auto">
              <img
                className="mx-auto mt-10 w-[70px] h-[70px]"
                src={devis}
                alt="devis"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-start relative left-[70px]">
          <div className="w-[800px] h-[200px] flex justify-around mb-44 font-bold">
            <div className=" my-auto">
              <img
                className="w-[70px] h-[70px] mx-auto mt-10"
                src={prod}
                alt="production"
              />
            </div>
            <div className="my-auto">
              <img
                className="mx-auto mt-10 w-[70px] h-[70px] rotate-180"
                src={arrow}
                alt="fleche"
              />
            </div>
            <div className="w-[200px] h-[150px] bg-sky-800 rounded-md my-auto shadow-xl">
              <p className="mt-16 text-white">5. Production</p>
            </div>
            <div className="my-auto">
              <img
                className="mx-auto mt-10 w-[70px] h-[70px]"
                src={arrow}
                alt="fleche"
              />
            </div>
            <div className="w-[200px] h-[250px] border-sky-300 border-2 bg-slate-200 rounded-md my-auto text-left shadow-xl">
              <ul className=" list-decimal list-inside ml-3 text-sm">
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
            <div className="w-[200px] h-[150px] bg-sky-900 rounded-md my-auto shadow-xl">
              <p className="mt-10 text-white">
                6. Présentations définitive de la solution
              </p>
            </div>
            <div className="my-auto">
              <img
                className="mx-auto mt-10 w-[70px] h-[70px]"
                src={arrow}
                alt="fleche"
              />
            </div>
            <div className="my-auto">
              <img
                className="mx-auto mt-10 w-[70px] h-[70px]"
                src={report}
                alt="report"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlanDAction;
