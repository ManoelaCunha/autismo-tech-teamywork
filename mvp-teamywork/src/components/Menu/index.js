import React from "react";
import { Link } from "react-router-dom";
import { ContainerHeader, ImageLogo, LI, UL } from "./styles";

import logo from "./../../assets/Images/tea..png";

const Menu = () => {
  return (
    <ContainerHeader>
      <Link to="/">
        <ImageLogo src={logo} />
      </Link>

      <UL>
        <LI>SOBRE NÓS</LI>
        <LI href="#ourservices">NOSSOS SERVIÇOS</LI>
        <LI>BLOG</LI>
        <LI>CONTATO</LI>
        <LI href="/candidatepage">ÁREA CANDIDATO</LI>
      </UL>
    </ContainerHeader>
  );
};

export default Menu;
