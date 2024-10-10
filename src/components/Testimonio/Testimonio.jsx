import React from "react";
import "./Testimonio.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVTR1,
    name: "sofia",
    review:
      "Mi experiencia fue confortable trato directo y resposable se entrego el trabajo en los tiempos establecidos  ",
  },
  {
    avatar: AVTR2,
    name: "Itam",
    review:
      "Gran capacidad de adaptacion a los requerimientos diseños amigables y compresibles para lo que se requeria  ",
  },
  {
    avatar: AVTR3,
    name: "mike",
    review:
      "Nos brindo el soporte y la asesoria requerida aclara nuestras dudas es responsable y comprometido con los proyectos ",
  },
  {
    avatar: AVTR4,
    name: "Clara",
    review:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius; dignissim elementum. Mollis tincidunt    mattis hendrerit dolor eros enim, nisi ligula ornare. Hendrerit     parturient habitantpharetra rutrum gravida porttitor eros feugiat.    Mollis elit sodales tac ",
  },
];

const Testimonio = () => {
  return (
    <section id="testimonials">
      <h5>clientes </h5>
      <h2>Testimonio</h2>
      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="avatar 01" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonio;
