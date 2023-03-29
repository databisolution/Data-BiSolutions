import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./assets/images/logo.PNG";
import MenuItems from "../components/MenuItems";

const Navbar = () => {
  const [active, setActive] = useState(false);

  //   const showMenu = () => {
  //     setActive(!active);
  //   };

  return (
    <div className="fixed w-full flex justify-between items-center p-4 border-b-[1px] sm:backdrop-blur-3xl backdrop-blur-xl z-50">
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
        {/* <div className="w-8 mr-4 lg:hidden">
          <img alt="ItemMenu" src={ItemMenu} className='scale-200'
          onClick={showMenu} 
          />
        </div> */}
        <ul className="hidden lg:flex gap-8 p-6 bg-black/10 w-full backdrop-blur-md ">
          <li>
            <Link to="/planAction" className="">
              PLAN D'ACTION
            </Link>
          </li>
          <li>
            <Link to="/produit">PRODUIT</Link>
          </li>
          <li>
            <Link to="/technologies">TECHNOLOGIES</Link>
          </li>
          <li>
            <Link to="/partenaires">PARTENAIRES</Link>
          </li>
          <li>
            <Link to="/contact">CONTACT</Link>
          </li>
          <li>
            <Link to="/aPropos">À PROPOS</Link>
          </li>
        </ul>
        <MenuItems setActive={setActive} active={active} />
      </nav>
    </div>
  );
};

export default Navbar;
