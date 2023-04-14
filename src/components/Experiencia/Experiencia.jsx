import React from "react";
import "./Experiencia.css";
import { BsFillPatchCheckFill } from "react-icons/bs";

const Experiencia = () => {
  return (
    <section id="Experiencia">
      <h5>Mi Experiencia con algunas tegnologias</h5>
      <h2>Mi Experiencia</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3> Desarrollo en front-end</h3>
          <small className="text-light">Experiencia Junior</small>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4> HTML</h4>
                {/*    <small className="text-light">Experiencia Junior</small> */}
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4> CSS</h4>
                {/*   <small className="text-light">experiencia Junior</small> */}
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4> JavaScript</h4>
                {/*    <small className="text-light">experiencia Junior</small> */}
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4> Bootstrap</h4>
                {/*  <small className="text-light">experiencia Junior</small> */}
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4> React</h4>
                {/*  <small className="text-light">experiencia Junior</small> */}
              </div>
            </article>
          </div>
        </div>
        {/* fin frontend */}
        <div className="experience__backend">
          <h3> Desarrollo en Backend</h3>
          <small className="text-light">Experiencia Junior</small>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4> Node JS</h4>
                {/*    <small className="text-light">experiencia Junior</small> */}
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4> Mongo Db</h4>
                {/*      <small className="text-light">experiencia Junior</small> */}
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4> Express</h4>
                {/*     <small className="text-light">experiencia Junior</small> */}
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiencia;
