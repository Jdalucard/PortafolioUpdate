import React from "react";
import "./Portafolio.css";
import { data } from "./db/db.js";

//Imagenes en produccion

const Portafolio = () => {
  return (
    <section id="Portafolio">
      <h5>Mis Trabajos recientes</h5>
      <h2>Portafolio</h2>
      <div className="Container portafolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portafolio__item">
              <div className="portafolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portafolio__item-cta">
                <a
                  href={github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn"
                >
                  github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Demo app
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portafolio;
