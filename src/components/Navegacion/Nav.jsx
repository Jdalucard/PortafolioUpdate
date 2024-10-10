import React, { useState } from "react";
import "./Nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";
import {FaSuitcase} from "react-icons/fa"

const Nav = () => {
  const [activateNav, setactivateNav] = useState("#");
  return (
    <nav>
      <a href="/#" onClick={()=> setactivateNav("#")} className={activateNav === "#" ? "active" : ""}>
        <AiOutlineHome />
      </a>
      <a href="#SobreMi" onClick={()=> setactivateNav("#SobreMi")} className={activateNav==="#SobreMi" ?"active":""}>
        <AiOutlineUser />
      </a>
      <a href="#Experiencia" onClick={()=> setactivateNav("#Experiencia")} className={activateNav==="#Experiencia" ?"active":""}>
        <BiBook />
      </a>
      <a href="#Servicios" onClick={()=> setactivateNav("#Servicios")} className={activateNav==="#Servicios" ?"active":""} >
        <RiServiceLine />
      </a>
      <a href="#Portafolio" onClick={()=> setactivateNav("#Portafolio")} className={activateNav==="#Portafolio" ?"active":""} >
        <FaSuitcase />
      </a>
      <a href="#Contacto" onClick={()=> setactivateNav("#Contacto")} className={activateNav==="#Contacto" ?"active":""}>
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default Nav;
