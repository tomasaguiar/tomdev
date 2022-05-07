import React from "react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

export const IconsBar = () => {
  return (
    <div className="flex flex-row mt-auto justify-evenly">
      <a href="https://github.com/tomasaguiar">
        <FaGithub color="#ccc" size={18} />
      </a>
      <a href="https://twitter.com/tomasaguiar0">
        <FaTwitter color="#ccc" size={18} />
      </a>
      <a href="https://www.linkedin.com/in/tom%C3%A1s-aguiar-6690481ab/">
        <FaLinkedin color="#ccc" size={18} />
      </a>
    </div>
  );
};
