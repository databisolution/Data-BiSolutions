import React from "react";
import Header from "../components/Header";
import Risque from "./assets/images/Risque financier et recouvrement.png"
import Ressources from "./assets/images/RESSOURCES HUMAINE MASSE SAL.png"
import Details from "./assets/images/détail des charges.png"
import Fiche from "./assets/images/Fiche salarié.png"
import Rapport from "./assets/images/Rapport Frais du personnel.png"

const Produit = () => {
  return (
    <section className="pt-10" data-aos="zoom-in-out">
       <Header namePage={"Produits"} />
        <button className="productBanner p-10 mt-10 text-xl leading-[30px] font-semibold w-[300px] shadow-lg shadow-blue-300/100 transition ease-in-out delay-350 hover:-translate-y-0.5 hover:scale-110 hover:text-white duration-500">
          <a
            className="w-full"
            target="_blank"
            rel="noreferrer"
            href="https://app.powerbi.com/view?r=eyJrIjoiNGQ4MDYxNzEtMzJlNy00MWYyLTkzMzEtYmRjOTZjZmE3NmM0IiwidCI6IjA5NzZlMzQyLTVjYWQtNDExNi1iZjMzLTY2YjUzZWFjMGIyYiJ9"
          >
           Cliquez ici pour consulter notre rapport intercatif.
          </a>
          </button>
      
      <div className="flex flex-col justify-evenly 2xl:h-[2500px] ">
        <div className="flex flex-col 2xl:flex-row justify-evenly sm:my-20">
          <img className="3xl:w-[1000px] 3xl:h-[600px] 2xl:w-[700px] 2xl:h-[500px]  xlx:w-full sm:my-5" src={Risque} alt="" />
          <img className="3xl:w-[1000px] 3xl:h-[600px] 2xl:w-[700px] 2xl:h-[500px] xlx:w-full sm:my-5" src={Ressources} alt="" />
        </div>
        <div className="flex justify-center sm:my-20">
          <img className="3xl:w-[1000px] 3xl:h-[600px] 2xl:w-[700px] 2xl:h-[500px] xlx:w-full" src={Details} alt="" />
        </div>
        <div className="flex flex-col 2xl:flex-row justify-evenly sm:my-20 2xl:h-[2500px] ">
          <img className="3xl:w-[1000px] 3xl:h-[600px] 2xl:w-[700px] 2xl:h-[500px] xlx:w-full sm:my-5" src={Fiche} alt="" />
          <img className="3xl:w-[1000px] 3xl:h-[600px] 2xl:w-[700px] 2xl:h-[500px] xlx:w-full sm:my-5" src={Rapport} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Produit;
