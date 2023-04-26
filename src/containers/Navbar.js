import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./assets/images/logo.PNG";
import MenuItems from "../containers/MenuItems";

const Navbar = () => {
  const [active, setActive] = useState(false);

  //   const showMenu = () => {
  //     setActive(!active);
  //   };

  return (
    <div className="fixed w-full flex justify-between items-center p-4 border-b-[1px] bg-white/95 z-50 shadow-lg">
      <Link to="/">
        <div className="text 2-xl font-bold uppercase flex items-center">
          <img alt="logo" src={logo} className="w-16 h-16" />
          <h1 className="">
            data & bi
            <span className="block text-2xl uppercase ml-2">solutions</span>
          </h1>
        </div>
      </Link>

      <nav>
        <ul className="hidden lg:flex gap-8 p-6 text-slate-700 navbar w-full">
        <li className="underlined transition ease-in-out delay-350 hover:-translate-y-0.5 hover:scale-110  xl:text-xl font-semibold ">
            <Link to="/">ACCUEIL</Link>
          </li>
          <li  className="underlined xl:text-xl font-semibold transition ease-in-out delay-350 hover:-translate-y-0.5 hover:scale-110 duration-500">
            <Link to="/planAction">
              PLAN D'ACTION
            </Link>
          </li>
          <li className="underlined xl:text-xl font-semibold transition ease-in-out delay-350 hover:-translate-y-0.5 hover:scale-110 duration-500">
            <Link to="/produit">PRODUIT</Link>
          </li>
          <li className="underlined xl:text-xl font-semibold transition ease-in-out delay-350 hover:-translate-y-0.5 hover:scale-110 duration-500">
            <Link to="/technologies">TECHNOLOGIES</Link>
          </li>
          <li className="underlined xl:text-xl font-semibold transition ease-in-out delay-350 hover:-translate-y-0.5 hover:scale-110 duration-500">
            <Link to="/contact">CONTACT</Link>
          </li>
          <li className="underlined xl:text-xl font-semibold transition ease-in-out delay-350 hover:-translate-y-0.5 hover:scale-110 duration-500">
            <Link to="/aPropos">À PROPOS</Link>
          </li>
        </ul>
        <MenuItems setActive={setActive} active={active} />
      </nav>
      {/* <div className="w-50 h-20 border bg-red-500"></div> */}
    </div>
  );
};

export default Navbar;
