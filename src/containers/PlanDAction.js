import React from "react";
import PlanAction from "./assets/images/PlanAction.PNG";
import MainImage from "../containers/assets/images/accueil.jpg";
import Header from "../components/Header";

const PlanDAction = () => {
  return (
    <section
      id="planDAction"
      className="pt-10"
      data-aos="zoom-in-down"
      data-aos-duration="1800"
    >
       <Header namePage={"Plan D'Action"} MainImage={MainImage}/>
      <div className="w-full mx-auto z-0">
        <h1 className="text-4xl">Plan D'action</h1>
        <div className="border-b-[2px] mx-auto w-52 p-4"></div>
        <h2 className="text-2xl mx-5 my-6">
          Nos réalisations s’appuient sur un process avec un plan d’action pour
          assurer la réalisation de votre projet BI
        </h2>
        <div className="border-b-[2px] mx-auto w-52 px-4"></div>
        <img
          className="mx-auto py-4 w-[800px]"
          src={PlanAction}
          alt="planDAction"
        />
      </div>
    </section>
  );
};

export default PlanDAction;
