import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="pt-52">
      <h1 className="text-6xl py-5">Oops! Vous semblez être perdu.</h1>
      <p className="py-10 text-2xl">Voici quelques liens utiles:</p>
      <div className="flex justify-evenly pb-56">
        <Link to="/">Page D'accueil</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
};

export default NotFound;
