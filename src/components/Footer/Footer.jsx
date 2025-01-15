import React from "react";
import "./Footer.css";
import { FaFacebook } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";

const Footer = () => {
  return (
    <footer>
      <a href="/#" className="footer__logo">
        Jose Martinez
      </a>
      <ul className="permalinks">
        <li>
          <a href="#SobreMi">Sobre Mi</a>
        </li>

        <li>
          <a href="#Experiencia">Experiencia</a>
        </li>
        <li>
          <a href="#Servicios">Servicios</a>
        </li>
        <li>
          <a href="#Portafolio">Portafolio</a>
        </li>

        <li>
          <a href="#Contacto">Contacto</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com" target="_blanck">
          <FaFacebook />
        </a>
        <a href="https://www.instagram.com" target="_blanck">
          <FiInstagram />
        </a>
        <a href="https://twitter.com" target="_blanck">
          <IoLogoTwitter />
        </a>
      </div>

      <div className="footer__copyright">
        <small>
          &copy;José Daniel Martinez desarrollador web full stack todos derechos
          reservados
        </small>
      </div>
    </footer>
  );
};

export default Footer;
