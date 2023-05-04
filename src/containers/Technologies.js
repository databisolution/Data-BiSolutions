import { React } from "react";
import { Link } from "react-router-dom";
import Techno from "./assets/images/technologies.PNG";
import pbi from "./assets/images/Pbi.png";
import PowerBi from "./assets/images/PowerBi.png";
import TechnoCard from "../components/TechnoCard";
import Automate from "./assets/images/powerAutomate.png";
import Azure from "./assets/images/Azure.png";
import Rbuilder from "./assets/images/reportBuilder.png";
import TechnoGroup from "../components/TechnoGroup";
import Asa from "./assets/images/asa.png";
import Mpa from "./assets/images/mpa.png";
import Rpb from "./assets/images/rpb.png";
import Header from "../components/Header";

const Technologies = () => {
  return (
    <section className="pt-10" data-aos="">
      <Header namePage={"TECHNOLOGIES"} />
      <div className=" mx-auto z-0">
        <img
          className="mx-auto py-4 xlx:w-0 xlx:p-0"
          src={Techno}
          alt="technologies"
          data-aos="zoom-in-down"
          data-aos-duration="1800"
        />
        <TechnoGroup />
        <h2
          className="text-3xl"
          data-aos="zoom-in-down"
          data-aos-duration="2100"
        >
          Les technologies clés que nous utilisons :
        </h2>

        <TechnoCard
          cardTitle={"Microsoft Power BI"}
          techTitle={"POWER BI"}
          classTech={"text-3xl mt-5 font-extrabold text-yellow-500"}
          techLogo={pbi}
          classNameTitle={
            "text-2xl text-yellow-500 font-semibold mt-20 xl:py-4 xl:mt-20 relative xl:top-[100px] xl:w-[300px] xl:w-[400px] z-10"
          }
          techDesc={
            "Power bi permet d’accompagner le corps dirigeant et les équipes de production dans leurs choix stratégiques"
          }
          techObjectif={
            "Une palette variée et étoffée de tableaux, diagrammes, jauges ou cartes permettront une présentation optimale des données de l’entreprise et une prise de décision adaptée"
          }
          imgDesc={PowerBi}
        />
        <div>
          <TechnoCard
            cardTitle={"Microsoft AZURE SYNAPSE ANALYTICS"}
            classTech={"text-3xl mt-5 font-extrabold text-blue-400"}
            classNameTitle={
              "text-2xl text-blue-500 font-semibold mt-20 xl:py-4 xl:mt-20 relative xl:top-[140px] xl:w-[300px] xl:w-[400px] z-10"
            }
            techLogo={Azure}
            techTitle={"AZURE"}
            techDesc={
              "Azure synapse permet d’organiser les données et de flexibiliser leurs traitements afin de faciliter leurs présentations dans Power BI"
            }
            imgDesc={Asa}
            techObjectif={
              "Des connexions sécurisées à vos sources de données (SAP, SALES FORCES, Oracle, Sharepoint, Google…), une architecture adaptée et une actualisation à intervalle régulier en fonction des besoins utilisateurs permettront un traitement optimisé de vos informations"
            }
          />
        </div>
        <div>
          <TechnoCard
            techTitle={"POWER Automate"}
            classTech={"text-3xl mt-5 font-extrabold text-blue-400"}
            classNameTitle={
              "text-2xl text-blue-500 font-semibold mt-20 xl:py-4 xl:mt-20 relative xl:top-[150px] xl:w-[300px] xl:w-[400px] z-10"
            }
            cardTitle={"Microsoft Power Automate"}
            techLogo={Automate}
            techDesc={
              "Power Automate permet d’automatiser des processus métier et faciliter le travail des utilisateurs"
            }
            imgDesc={Mpa}
            techObjectif={
              "L’automatisation des taches chronophages et l’envoi sécurisé des données sur l’environnement Azure Synapse permettra à l’utilisateur de se focaliser sur des éléments à plus forte valeur ajoutée en s’appuyant sur des visuels dédiés, actualisés en temps réel dans Power BI"
            }
          />
        </div>
        <div>
          <TechnoCard
            techTitle={"Report Builder"}
            classTech={"text-3xl mt-5 font-extrabold text-yellow-500"}
            classNameTitle={
              "text-2xl text-yellow-500 font-semibold mt-20 xl:py-4 xl:mt-20 relative xl:top-[150px] xl:w-[300px] xl:w-[400px] z-10"
            }
            cardTitle={"Power BI Report Builder"}
            techLogo={Rbuilder}
            techDesc={
              "Power Bi Report Builder est un outil qui permet de créer des rapports et des tableaux de bords paginés concus pour être imprimés ou partagés avec une mise en page définie au besoin."
            }
            imgDesc={Rpb}
            techObjectif={
              "Consacré aux rapports personnalisés pour le partage et l'impression des données. Report Builder présente également d'autres atouts pour vous permettre de concevoir et d'éditer tout types de documents indisponibles et nécessaires à l'organisation (Courrier de relance, Echéancier, Factures avec détail dynamique, formulaires...). Allié à Power Automate, il vous permettra d'historiser vos opérations et de transférer rapidement vos flux documentaires."
            }
          />
        </div>
        <Link to="/contact">
          <button
            className="text-3xl buttonContact font-semibold bg-blue-500 shadow-lg shadow-blue-500/50 mb-10 p-8 px-20 transition ease-in-out delay-350 hover:-translate-y-0.5 hover:scale-110 hover:text-white duration-500"
            data-aos="zoom-out"
            data-aos-duration="1200"
          >
            Contactez-nous
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Technologies;
