import React from "react";
import Header from "../components/Header";
import SwiperProduct from "../components/SwiperProduct";

const Produit = () => {
  return (
    <section className="pt-10" data-aos="zoom-in-out">
       <Header namePage={"Produits"} />
        <button className="bg-black/30 backdrop-blur-xl p-10 mt-10 text-xl leading-[30px] font-semibold w-[300px] rounded-lg drop-shadow-2xl transition ease-in-out delay-350 hover:-translate-y-0.5 hover:scale-110 hover:text-white duration-500">
          <a
            className="w-full"
            target="_blank"
            rel="noreferrer"
            href="https://app.powerbi.com/view?r=eyJrIjoiNGQ4MDYxNzEtMzJlNy00MWYyLTkzMzEtYmRjOTZjZmE3NmM0IiwidCI6IjA5NzZlMzQyLTVjYWQtNDExNi1iZjMzLTY2YjUzZWFjMGIyYiJ9"
          >
           Cliquez ici pour consulter notre rapport interactif
          </a>
          </button>
      <SwiperProduct />
    </section>
  );
};

export default Produit;
// shadow-green-200/50