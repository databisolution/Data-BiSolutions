import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./assets/images/logo.PNG";
import MenuItems from "../containers/MenuItems";

const Navbar = () => {
  const [active, setActive] = useState(false);

  return (
    <div className="fixed w-full flex justify-between items-center border-b-[1px] bg-white/95 z-50 shadow-lg navbar">
      <Link to="/">
        <div className="font-bold uppercase flex items-center">
          <img
            alt="logo"
            src={logo}
            className="w-12 h-12 shadow-2xl rounded-xl opacity-80"
          />
          <h1 className="text-sm">
            data & bi
            <span className="block text-xl uppercase ml-2">solutions</span>
          </h1>
        </div>
      </Link>

      <nav>
        <ul className="hidden lg:flex lg:justify-around lg:gap-3 xl:gap-6 p-6 text-slate-700 w-full">
          <li className="underlined transition ease-in-out delay-350 hover:-translate-y-0.5 hover:scale-110 text-sm xl:text-md 3xl:xl font-semibold ">
            <Link to="/">ACCUEIL</Link>
          </li>
          <li className="underlined transition ease-in-out delay-350 hover:-translate-y-0.5 hover:scale-110 text-sm xl:text-md 3xl:xl font-semibold ">
            <Link to="/notreVision">Pourquoi Data & Bi?</Link>
          </li>
          <li className="underlined xl:text-md text-sm 3xl:xl font-semibold transition ease-in-out delay-350 hover:-translate-y-0.5 hover:scale-110 duration-500">
            <Link to="/planAction">PLAN D'ACTION</Link>
          </li>
          <li className="underlined xl:text-md text-sm 3xl:xl font-semibold transition ease-in-out delay-350 hover:-translate-y-0.5 hover:scale-110 duration-500">
            <Link to="/produit">PRODUITS</Link>
          </li>
          <li className="underlined xl:text-md text-sm 3xl:xl font-semibold transition ease-in-out delay-350 hover:-translate-y-0.5 hover:scale-110 duration-500">
            <Link to="/technologies">TECHNOLOGIES</Link>
          </li>
          <li className="underlined xl:text-md text-sm 3xl:xl font-semibold transition ease-in-out delay-350 hover:-translate-y-0.5 hover:scale-110 duration-500">
            <Link to="/contact">CONTACT</Link>
          </li>
          <li className="underlined xl:text-md text-sm 3xl:xl font-semibold transition ease-in-out delay-350 hover:-translate-y-0.5 hover:scale-110 duration-500">
            <Link to="/aPropos">À PROPOS</Link>
          </li>
        </ul>
        <MenuItems setActive={setActive} active={active} />
      </nav>
    </div>
  );
};

export default Navbar;
