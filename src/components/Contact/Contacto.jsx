import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "./Contacto.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";

const Contacto = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xo4e2an",
        "template_8beu92d",
        form.current,
        "FrFOc99Kr4zWzcVfi"
      )

      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <section id="Contacto">
      {/*       <h5>Contacto</h5> */}
      <h2>Contactame</h2>
      <div className="container contact__container">
        <div className="contact_options">
          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Facebook</h4>
            {/* <h5>mensaje Faceboock</h5> */}
            <a
              href="https://www.facebook.com/josedaniel.martinezpacheco/"
              target="_blanck"
            >
              Enviar Mensaje
            </a>
          </article>

          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Correo</h4>
            <h5>danieluz3188@gmail.com</h5>
            <a href="mailto:danieluz3188@gmail.com" target="_blanck">
              Enviar Mensaje
            </a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            {/*      <h4>whatsapp</h4> */}
            <h5>+573023315479</h5>
            <a
              href="https://api.whatsapp.com/send?phone=573023315479&text=Hola! puedes contactarme por este Medio"
              target="_blanck"
            >
              Enviar Mensaje
            </a>
          </article>
        </div>

        {/*fin de opciones de contacto*/}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Nombre completo" />
          <input type="email" name="email" placeholder="Tu correo" />
          <textarea
            name="message"
            rows="7"
            placeholder=" Deja tu mensaje"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contacto;
