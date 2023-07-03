import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const HeaderSocial = () => {
  return (
    <div className="header__socials">
      <a
        href="https://linkedin.com/in/
jose-daniel-martinez-pacheco-29b65213a
"
        rel="noreferrer"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/Jdalucard" rel="noreferrer" target="_blank">
        {" "}
        <FaGithub />{" "}
      </a>
    </div>
  );
};

export default HeaderSocial;
