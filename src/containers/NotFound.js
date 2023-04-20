import React from "react";
import notFound from './assets/images/notFound.jpg'
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="">
      <div className="">
      <img className="w-full h-[1200px] object-cover" src={notFound} alt="" />
      </div>
      <div className="flex flex-col justify-between pb-56 absolute top-32 left-10 text-white">
      <h1 className="text-6xl py-5">Oops! Vous semblez être perdu.</h1>
      <p className="py-10 text-5xl">Voici quelques liens utiles:</p>
        <Link className="py-10 text-3xl underlined underlinedNf" to="/">Page D'accueil</Link>
        <Link className="py-10 text-3xl underlined underlinedNf" to="/contact">Contact</Link>
      </div>
    </div>
  );
};

export default NotFound;
