import React from "react";
import "./Servicios.css";
import { BiCheck } from "react-icons/bi";

const Servicios = () => {
  return (
    <section id="Servicios">
      <h5>Otros servicios</h5>
      <h2>Servicios</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Diseños</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                El proceso de elaborar un diseño de experiencias no es exacto,
                lo que permite que cada solución sea única al momento de
                construir un sitio web es por ello que:
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Realizo diseños modernos adaptados a las necesidades de mis
                clientes, que brindan experiencias significativas y relevantes ,
                mientras interactúan con su producto digital.
              </p>
            </li>

          </ul>
        </article>
        {/* fin primera lista */}

        <article className="service">
          <div className="service__head">
            <h3>Análisis del requerimiento</h3>
          </div>
          <ul className="service__list">

            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Realizo preguntas específicas para poder asesorarte y brindarte
                mi opinión profesional antes de comenzar el diseño o
                programación, me reúno contigo para intercambiar ideas y obtener
                toda la información relevante que me permita crear un desarrollo
                personalizado y adaptado a tus necesidades.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                No trabajo para ninguna agencia, por lo que estarás hablando
                directamente conmigo, desde el primer contacto; mi objetivo es
                obtener toda la información necesaria para comprender tu
                proyecto.
              </p>
            </li>
          </ul>
        </article>

        {/* fin segunda lista */}

        <article className="service">
          <div className="service__head">
            <h3> Desarrollo web </h3>
          </div>
          <ul className="service__list">

            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Experiencia en desarrollo web front-end y back-end. Especializado en diseño y funcionalidad del lado del cliente y la infraestructura del lado del servidor. Desarrollo de sitios web, portales y sistemas personalizados con enfoque en la usabilidad. Diseño y programación de páginas web, e-commerce y autoadministrables. Capacidad para crear sistemas escalables y soluciones de e-commerce a medida para empresas y startups.
              </p>
            </li>

          </ul>
        </article>

        {/* fin tercera lista */}
      </div>
    </section>
  );
};

export default Servicios;
