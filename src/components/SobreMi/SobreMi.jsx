import React from "react";
import "./SobreMi.css";
import ME from "../../assets/mia.webp";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
const SobreMi = () => {
  return (
    <section id="SobreMi">
      <h5>Sobre Mi</h5>
      <h2>Sobre Mi</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="yo" />
          </div>
        </div>
        <div className="about_content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experiencia</h5>
              <small>1 año en desarrollo como Full Stack</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clientes</h5>
              <small>
                Actualmente como freelance, en constante crecimiento de mi
                cartera de clientes.
              </small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Proyectos</h5>
              <small>+10 proyectos completados. </small>
            </article>
          </div>
          <p>
            Soy desarrollador Full Stack bajo el lenguaje de programación
            Javascript, manejo de React y Mongo BD. Me encanta la tecnología y
            el aprendizaje constante, con habilidades de comunicación efectiva,
            trabajo en equipo y bajo presión. De profesión soy Técnico Superior
            en Organización y Sistemas, con alta experiencia en ventas.
          </p>

          <a href="#Contacto" className="btn btn-primary sobre">
            Contactame
          </a>
        </div>
      </div>
    </section>


  );
};

export default SobreMi;
