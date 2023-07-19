import React from "react";
import { Link } from "react-router-dom";
import linkedin from "./assets/images/linkedin2.png";
import powerBi from "./assets/images/powerBiLogo2.png";
import logo from "./assets/images/logo.PNG";
import mail from "./assets/images/message.png";

const Footer = () => {
  return (
    <section className="w-full smd:h-[700px] h-[915px] md:h-[600px] xlx:h-[440px] bg-black/70 inset-x-0 bottom-0">
      <div className="w-full xlx:w-[950px] md:w-2/3 sm:mx-auto flex flex-wrap justify-evenly pt-20">
        <div className="flex flex-col max-xlx:mb-5 h-[180px]">
          <img
            className="w-28 h-26 rounded-lg max-md:mx-auto"
            src={logo}
            alt="data bi solutions"
            />
            <div className="">
          <img
            className="w-7 h-7 rounded-lg mt-5"
            src={mail}
            alt="mail"
            />
            <span className=" text-white">contact@databisolutions.fr</span>
            </div>
        </div>
        <div className="text-white flex max-md:flex-col sm:mb-10">
          <span className="border-r h-56 max-xl:h-0"></span>
          <ul className="px-10 text-left">
            <li className="mb-5 font-semibold">Plan du site</li>
            <li className="mb-2 transition ease-in-out delay-150 hover:-translate-y-0.5 hover:scale-110 duration-150"><Link to="/">ACCUEIL</Link></li>
            <li className="mb-2 transition ease-in-out delay-150 hover:-translate-y-0.5 hover:scale-110 duration-150"><Link to="/planAction">PLAN D'ACTION</Link></li>
            <li className="mb-2 transition ease-in-out delay-150 hover:-translate-y-0.5 hover:scale-110 duration-150"><Link to="/produit">PRODUITS</Link></li>
            <li className="mb-2 transition ease-in-out delay-150 hover:-translate-y-0.5 hover:scale-110 duration-150"><Link to="/technologies">TECHNOLOGIES</Link></li>
            <li className="mb-2 transition ease-in-out delay-150 hover:-translate-y-0.5 hover:scale-110 duration-150"><Link to="/contact">CONTACT</Link></li>
            <li className="mb-2 transition ease-in-out delay-150 hover:-translate-y-0.5 hover:scale-110 duration-150"><Link to="/aPropos">À PROPOS</Link></li>
          </ul>
          <span className="border-r h-56 max-xl:h-0"></span>

        </div>
          <div className="flex max-slg:flex-col text-white">
          <ul className="px-10">
            <li className="font-semibold">Rapport Global</li>
            <button className="py-6 text-white transition ease-in-out delay-350 hover:-translate-y-0.5 hover:scale-110 hover:text-white duration-500">
              <Link to="https://app.powerbi.com/view?r=eyJrIjoiNGQ4MDYxNzEtMzJlNy00MWYyLTkzMzEtYmRjOTZjZmE3NmM0IiwidCI6IjA5NzZlMzQyLTVjYWQtNDExNi1iZjMzLTY2YjUzZWFjMGIyYiJ9">
                <img className="w-16 h-16" src={powerBi} alt="power BI" />
              </Link>
            </button>
          </ul>
          <span className="border-r h-56 text-left max-xl:h-0"></span>
          <ul className="px-10">
            <li className="font-semibold">Liens Sociaux</li>
            <button className="py-6 text-white transition ease-in-out delay-250 hover:-translate-y-0.5 hover:scale-105 hover:text-white duration-500">
              <Link to="https://www.linkedin.com/company/data-bi-solutions/">
                <img className="w-16 h-16" src={linkedin} alt="linkedin" />
              </Link>
            </button>
          </ul>
          </div>
        <div className="mx-auto bottom-0 border-b pt-10 w-11/12"></div>
        <div className="flex justify-around w-11/12">
          <p className="text-white font-semibold">©2023-Data bi & solutions</p>
          <button className="xl:text-md font-semibold text-white transition ease-in-out delay-350 hover:-translate-y-0.5 hover:scale-110 hover:text-white duration-500">
            <Link to="/mentions">Mentions Legales</Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Footer;
