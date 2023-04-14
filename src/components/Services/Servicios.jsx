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
            {/*       <li>
              <BiCheck className="service__list-icon" />
              <p>
                Se elabora un diseño de experiencias el cual no es un proceso
                exacto y eso es lo que permite que cada solución sea
                completamente diferente al momento de elaborar la costruccion de
                un sitio web
              </p>
            </li> */}
            {/*    <li>
              <BiCheck className="service__list-icon" />
              <p>
      
              </p>
            </li> */}
          </ul>
        </article>
        {/* fin primera lista */}

        <article className="service">
          <div className="service__head">
            <h3>Análisis del requerimiento</h3>
          </div>
          <ul className="service__list">
            {/*         <li>
              <BiCheck className="service__list-icon" />
              <p>
                Desarrollo web front-end responsable del diseño y la
                funcionalidad de los elementos del lado del cliente en un sitio
                web, lo que incluye todo lo que el usuario ve y con lo que
                interactúa.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Desarrollo web back-end responsable de la infraestructura del
                sitio web y los elementos del lado del servidor, como la base de
                datos, la lógica de negocios y la seguridad
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Desarrollador web full stack: abarca las habilidades de los
                desarrolladores front-end y backend, además de dominar varios
                lenguajes de programación.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Desarrollo sitios web, portales y sistemas web a medida. Páginas
                web de alto impacto, priorizando la usabilidad y experiencia del
                usuario. Adaptables a cualquier dispositivo.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
   
              </p>
            </li> */}
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
                Desarrollo web front-end responsable del diseño y la
                funcionalidad de los elementos del lado del cliente en un sitio
                web, lo que incluye todo lo que el usuario ve y con lo que
                interactúa.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Desarrollo web back-end responsable de la infraestructura del
                sitio web y los elementos del lado del servidor, como la base de
                datos, la lógica de negocios y la seguridad.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                En cuanto a mis habilidades, desarrollo sitios web, portales y
                sistemas web a medida que priorizan la usabilidad y la
                experiencia del usuario, asegurándome de que sean adaptables a
                cualquier dispositivo. También diseño y programo páginas web,
                e-commerce y páginas autoadministrables.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Puedo ayudarte a hacer realidad tus ideas, desarrollando
                sistemas web totalmente escalables para empresas y startups
                desde cero y a medida. Además, si tu empresa necesita soluciones
                personalizadas de e-commerce y venta directa, puedo ayudarte a
                diseñarlas y desarrollarlas .
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
