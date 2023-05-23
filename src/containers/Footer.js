import React from "react";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <section className="w-full h-[100px] bg-black/70 inset-x-0 bottom-0">
     <button className="xl:text-xl font-semibold mt-10 text-white transition ease-in-out delay-350 hover:-translate-y-0.5 hover:scale-110 hover:text-white duration-500">
            <Link to="/mentions">Mentions Legales</Link>
          </button>
    </section>
  );
};

export default Footer;
