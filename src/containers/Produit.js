import React from "react";
import MainImage from "../containers/assets/images/accueil.jpg";
import Header from "../components/Header";

const Produit = () => {
  return (
    <section className="pt-10" data-aos="zoom-in-out">
       <Header namePage={"Produits"} MainImage={MainImage}/>
      <div>
        <p>rapport global</p>
        <button>
          <a
            className="w-full h-[1000px] "
            target="_blank"
            rel="noreferrer"
            href="https://app.powerbi.com/view?r=eyJrIjoiNGQ4MDYxNzEtMzJlNy00MWYyLTkzMzEtYmRjOTZjZmE3NmM0IiwidCI6IjA5NzZlMzQyLTVjYWQtNDExNi1iZjMzLTY2YjUzZWFjMGIyYiJ9"
          >
            ici
          </a>
          </button>
        
      </div>
    </section>
  );
};

export default Produit;
