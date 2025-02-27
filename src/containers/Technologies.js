import { React } from "react";
import { Link } from "react-router-dom";
import Techno from "./assets/images/technologies.PNG";
import pbi from "./assets/images/Pbi.png";
import PowerBi from "./assets/images/PowerBi.png";
import pApps from "./assets/images/microsoft-power-apps.png";
import TechnoCard from "../components/TechnoCard";
import Automate from "./assets/images/powerAutomate.png";
import PowerAppsExemple from "./assets/images/powerAppExemple.png";
import Azure from "./assets/images/Azure.png";
import Rbuilder from "./assets/images/reportBuilder.png";
import TechnoGroup from "../components/TechnoGroup";
import Asa from "./assets/images/asa.png";
import Mpa from "./assets/images/mpa.png";
import Rpb from "./assets/images/rpb.png";
import Header from "../components/Header";
import { Helmet } from "react-helmet-async";
const Technologies = () => {
  return (
    <>
      <Helmet>
        <title>Technologies</title>
        <meta
          name="description"
          content="Les technologies clés que nous utilisons: Azure, Power BI, Power Automate, Report Builder."
        />
        <link rel="canonical" href="/technologies" />
      </Helmet>
      <section className="pt-10" data-aos="">
        <Header namePage={"TECHNOLOGIES"} />
        <div className=" mx-auto z-0">
          <img
            className="mx-auto py-4 xlx:w-0 xlx:p-0"
            src={Techno}
            alt="technologies"
            data-aos="zoom-in-down"
            data-aos-duration="1810"
          />
          <TechnoGroup />
          <h2
            className="text-3xl font-semibold"
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
              "text-2xl text-yellow-500 font-semibold mt-20 xl:py-4 xl:mt-20 relative xl:top-[130px] xl:w-[300px] 2xl:xl:top-[110px] 2xl:w-[200px] 3xl:xl:top-[130px] 3xl:w-[300px] xl:ml-7 z-10"
            }
            techDesc={
              "Power bi permet d’accompagner le corps dirigeant et les équipes de production dans leurs choix stratégiques"
            }
            techObjectif={
              "Une palette variée et étoffée de tableaux, diagrammes, jauges ou cartes permettront une présentation optimale des données de l’entreprise et une prise de décision adaptée"
            }
            imgDesc={PowerBi}
            classObj="3xl:w-[600px] 2xl:w-[420px] xl:h-[300px] sm:w-[290px] 2xl:h-[200px] sm:h-[200px] xm:w-[400px] lg:w-[600px] xl:w-[600px] h-[250px] 2xl:w-[500px] mx-auto relative 3xl:-top-[100px] 2xl:-top-[200px] 3xl:left-[380px] sm:-top-[60px] rounded-lg backdrop-blur-2xl bg-white/60 shadow-gray-50 shadow-md"
          />
          <TechnoCard
            cardTitle={"Microsoft Power Apps"}
            techTitle={"POWER Apps"}
            classTech={"text-3xl mt-5 font-extrabold text-pink-400"}
            techLogo={pApps}
            classNameTitle={
              "text-2xl text-pink-400 font-semibold mt-20 xl:py-4 xl:mt-20 relative xl:top-[130px] xl:w-[300px] 2xl:top-[110px] 2xl:w-[200px] 3xl:xl:top-[130px] 3xl:w-[300px] xl:ml-7 z-10"
            }
            techDesc={
              "PowerApps permet de concevoir des applications métiers connectées"
            }
            techObjectif={
              "Une liberté de conception et un environnement de développement rapide pour concevoir des applications personnalisées et adaptées à vos besoins métier. Toutes vos idées pourront être mise en oeuvre et isolées ou intégrées à votre rapport PowerBI (formulaire de saisie d'intervention, plateforme de ticketing, application pour la gestion des CP, Plateforme pour la gestion des stocks...)"
            }
            imgDesc={PowerAppsExemple}
            classObj="3xl:w-[600px] 2xl:w-[380px] xl:h-[370px] sm:w-[290px] 2xl:h-[430px] lg:h-[400px] sm:h-[270px] xm:w-[400px] lg:w-[600px] xl:w-[700px] h-[250px] 2xl:w-[600px] mx-auto relative 3xl:-top-[100px] 2xl:-top-[200px] 3xl:left-[380px] sm:-top-[60px] rounded-lg backdrop-blur-2xl bg-white/60 shadow-gray-50 shadow-md"
          />
          <div>
            <TechnoCard
              cardTitle={"Microsoft AZURE SYNAPSE ANALYTICS"}
              classTech={"text-3xl mt-5 font-extrabold text-blue-400"}
              classNameTitle={
                "text-2xl text-blue-500 font-semibold mt-20 xl:py-4 xl:mt-20 relative 2xl:xl:top-[140px] 2xl:w-[200px] 3xl:xl:top-[130px] 3xl:w-[300px] xl:top-[150px] xl:w-[300px] xl:ml-3 z-10"
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
              classObj="3xl:w-[600px] 2xl:w-[380px] xl:h-[410px] sm:w-[290px] 2xl:h-[290px] sm:h-[200px] xm:w-[400px] lg:h-[230px] lg:w-[700px] xl:w-[600px] h-[250px] 2xl:w-[600px] mx-auto relative 3xl:-top-[100px] 2xl:-top-[200px] 3xl:left-[380px] sm:-top-[60px] rounded-lg backdrop-blur-2xl bg-white/60 shadow-gray-50 shadow-md"
            />
          </div>
          <div>
            <TechnoCard
              techTitle={"POWER Automate"}
              classTech={"text-3xl mt-5 font-extrabold text-blue-400"}
              classNameTitle={
                "text-2xl text-blue-500 font-semibold mt-20 xl:py-4 xl:mt-20 relative 2xl:xl:top-[140px] 2xl:w-[200px] 3xl:xl:top-[130px] 3xl:w-[300px] xl:top-[150px] xl:w-[300px] xl:ml-3 z-10"
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
              classObj="3xl:w-[600px] 2xl:w-[380px] xl:h-[410px] sm:w-[290px] 2xl:h-[300px] sm:h-[200px] xm:w-[400px] lg:h-[230px] lg:w-[700px] xl:w-[600px] h-[250px] 2xl:w-[600px] mx-auto relative 3xl:-top-[100px] 2xl:-top-[200px] 3xl:left-[380px] sm:-top-[60px] rounded-lg backdrop-blur-2xl bg-white/60 shadow-gray-50 shadow-md"
            />
          </div>
          <div>
            <TechnoCard
              techTitle={"Report Builder"}
              classTech={"text-3xl mt-5 font-extrabold text-yellow-500"}
              classNameTitle={
                "text-2xl text-yellow-500 font-semibold mt-20 xl:py-4 xl:mt-20 relative 2xl:xl:top-[140px] 2xl:w-[200px] 3xl:xl:top-[130px] 3xl:w-[300px] xl:top-[150px] xl:w-[400px] xl:ml-2 z-10"
              }
              cardTitle={"Power BI Report Builder"}
              techLogo={Rbuilder}
              techDesc={
                "Report Builder permet de créer et imprimer des mises en pages dédiées"
              }
              imgDesc={Rpb}
              techObjectif={
                "En plus de la conception et l’édition de tous types de documents nécessaires à l’entreprise (Courrier de relance, Echéanciers, Factures, formulaires, tableaux...), il pourra s’allier à Power Automate et Azure Synapse afin d’historiser les opérations, les traiter et les afficher en temps réel dans Power BI"
              }
              classObj="3xl:w-[600px] 2xl:w-[380px] xl:h-[480px] sm:w-[290px] 2xl:h-[320px] sm:h-[200px] xm:w-[400px] lg:h-[230px] lg:w-[700px] xl:w-[600px] h-[250px] 2xl:w-[600px] mx-auto relative 3xl:-top-[100px] 2xl:-top-[200px] 3xl:left-[380px] sm:-top-[60px] rounded-lg backdrop-blur-2xl bg-white/60 shadow-gray-50 shadow-md"
            />
          </div>
          <Link to="/contact">
            <button className="text-3xl buttonContact font-semibold shadow-2xl shadow-cyan-200/100 my-44 p-8 px-20 transition ease-in-out delay-350 hover:-translate-y-0.5 hover:scale-110 hover:text-white duration-500">
              Contactez-nous
            </button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Technologies;
