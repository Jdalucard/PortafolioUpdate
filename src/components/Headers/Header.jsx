import React from "react";
import "./Header.css";
import Cta from "./Cta";
import YO from "../../assets/yo.png"
import HeaderSocial from "./HeaderSocial";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5> Hola Soy yo</h5>
        <h1>José Daniel Martinez </h1>
        <h5 className="text-light">Desarrollador Fullstack</h5>
        <Cta/>
        <HeaderSocial/>

        <div className="me">
          <img src={YO} alt="yo"></img>
        </div>
        <a href="#Contacto" className="scroll__down">Ir abajo</a>
      </div>
    </header>
  );
};

export default Header;
