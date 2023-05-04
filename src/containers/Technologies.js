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
// import TechDescription from "../components/TechDescription";
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
          techLogo={pbi}
          classNameTitle={
            "text-2xl text-yellow-500 font-semibold mt-20 xl:py-4 xl:mt-20 relative xl:top-[100px] xl:w-[300px] xl:w-[400px] z-10"
          }
          techDesc={
            // "Les avantages de Power BI sont nombreux pour aider les équipes de direction à faire des choix rapides sans compromettre la rentabilité de leur entreprise. Power BI facilite la visualisation des données."
           "Power bi permet d’accompagner le corps dirigeant et les équipes de production dans leurs choix stratégiques"
          }
          techObjectif={
            "Une palette variée et étoffée de tableaux, diagrammes, jauges ou cartes permettront une présentation optimale des données de l’entreprise et une prise de décision adaptée"
          }
          imgDesc={PowerBi}
        />
        {/* <p className="mx-auto py-4 text-3xl">
            Grâce à l’accessibilité et la présentation visuelle, Power BI est un
            outil de taille d’aide à la décision qui fera la différence pour
            votre entreprise . La BI permettra une plus grande agilité et réactivité.
          </p> */}
        {/* <div>
          <TechDescription
            imgDesc={PowerBi}
            techObjectif={
              "Avec ces options de présentation sous forme de tableaux, de diagrammes ou encore de jauges ou de cartes, ils donnent une vision complète des données de l’entreprise sous forme visuelle pour faciliter l’utilisation des données en équipe."
            }
          />
          <p className="mx-auto py-4 text-3xl">
            Power BI est une plateforme unique disponible depuis l’ensemble de
            ces appareils avec une seule connexion.
          </p>
          
        </div> */}
        <div>
          <TechnoCard
            cardTitle={"Microsoft AZURE SYNAPSE ANALYTICS"}
            
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
              "Des connexions sécurisées à vos sources de données (SAP, SALES FORCES, Oracle, Sharepoint, Google…), une architecture adaptée et une actualisation a intervalle régulier en fonction des besoins utilisateurs permettront un traitement optimisé de vos informations"
            }
          />

          {/* <p
            className="mx-auto py-6 text-3xl"
            data-aos="zoom-in-down"
            data-aos-duration="1800"
          >
            Il n’existe pas de méthode unique pour réaliser un projet BI. Le
            choix des outils et de l’architecture à mettre en place repose sur
            un diagnostic de l’Organisation. Notre expérience nous permet de
            vous conseiller et vous proposer le modèle adapté à votre structure.
          </p> */}
        </div>
        <div>
          <TechnoCard
            techTitle={"POWER Automate"}
            classNameTitle={
              "text-2xl text-blue-500 font-semibold mt-20 xl:py-4 xl:mt-20 relative xl:top-[150px] xl:w-[300px] xl:w-[400px] z-10"
            }
            cardTitle={"Microsoft Power Automate"}
            techLogo={Automate}
            techDesc={
              "Fiabiliser l'information et optimiser le temps de ses équipes est primordial. Power automate est une Solution pour automatiser les processus métier et les tâches récurrentes du quotidien."
            }
            imgDesc={Mpa}
            techObjectif={
              "Microsoft Power Automate permet à vos collaborateurs de se concentrer sur un travail à plus forte valeur ajoutée en automatisant des processus manuels chronophages grâce à des flux. Il propose une palette limportante de connecteurs d'intégration et vous pourrez automatiser selon votre besoin : Flux automatisé, instantané ou planifié..."
            }
          />
        </div>
        <div>
          <TechnoCard
            techTitle={"Report Builder"}
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
              "Consacré aux rapports personnalisés pour le partage et l'impression des données. Report Builder présente également d'autres atouts pour vous permettre de concevoir et d'éditer tout types de documents indisponibles et nécessaires à l'organisation (Courrier de relance, Echeancier, Factures avec détail dynamique, formulaires...). Allié à Power Automate, il vous permettra d'historiser vos opérations et de transférer rapidement vos flux documentaires."
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
