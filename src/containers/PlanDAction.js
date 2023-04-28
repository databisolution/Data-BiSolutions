import React from "react";
import Header from "../components/Header";
import Title from "../components/Title.js";

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
          titleDesc={
            "Nos réalisations s’appuient sur un process avec un plan d’action pour assurer la réalisation de votre projet BI"
          }
        />
        <div className="h-[400px] mt-64">
          <p className="text-4xl">Page en construction</p>
        </div>
        {/* <div className="w-[500px] h-[400px] bg-orange-400 flex justify-between">
          <div className="w-[200px] h-[200px] bg-lime-500 rounded-md mt-20">
            <p>zsedrf-tgèyhuisedrft-gyhuji</p>
          </div>
          <div className="w-[200px] h-[300px] bg-sky-300 rounded-md mt-10">
            <img className="mx-auto mt-10" src={PlanAction} alt="" />
            <p className="relative top-[50px]">blablablabla</p>
          </div>
        </div>

        <div className="w-[500px] h-[400px] bg-orange-400 flex justify-between">
        <div className="w-[200px] h-[300px] bg-sky-300 rounded-md mt-10">
            <img className="mx-auto mt-10" src={PlanAction} alt="" />
            <p className="relative top-[50px]">blablablabla</p>
          </div>
          <div className="w-[200px] h-[200px] bg-lime-500 rounded-md mt-20">
          <p>zsedrf-tgèyhuisedrft-gyhuji</p>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default PlanDAction;
