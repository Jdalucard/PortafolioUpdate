import React from "react";
import CV from "../../assets/JoseCV.pdf";

const Cta = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
     
        Descargar CV
      </a>
      <a href="#Contacto" className="btn btn-primary">
        Puedes Hablarme
      </a>
    </div>
  );
};

export default Cta;
