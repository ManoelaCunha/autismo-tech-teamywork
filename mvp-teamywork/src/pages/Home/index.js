import {
  BlockOne,
  BlockTwo,
  Box,
  BoxOurServices,
  BoxServices,
  Button,
  ContainerHome,
  ContainerOurServices,
  ContainerServices,
  IconServices,
  IconServicesOne,
  IconServicesThree,
  IconServicesTwo,
  ImageArrow,
  ImageBox,
  ImageBoxSEP,
  ImageBoxVPA,
  ImageDOT,
  ImageOne,
  SubTitle,
  SubTitleThree,
  SubTitleTwo,
  Text,
  TextServices,
  Title,
  TitleOurServices,
} from "./style";

import imageOne from "./../../assets/Images/simbolo-autismo.png";
import imageVPA from "./../../assets/Images/vpa.png";
import imageDOT from "./../../assets/Images/dot-ornament.png";
import imageSEP from "./../../assets/Images/sep.png";
import imageArrow from "./../../assets/Images/arrow.png";
import iconOne from "./../../assets/Images/icon1.png";
import iconTwo from "./../../assets/Images/icon2.png";
import iconThree from "./../../assets/Images/icon3.png";

import { Link } from "react-router-dom";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <ContainerHome id="home">
        <SubTitle>| SEJA BEM VINDES</SubTitle>
        <Title>Empregabilidade & inclusão</Title>
        <ContainerServices>
          <BoxServices>
            <IconServicesOne src={iconOne} />
            <TextServices>
              Treinamentos que capacitam empresas com foco no autismo.
            </TextServices>
          </BoxServices>
          <BoxServices>
            <IconServicesTwo src={iconTwo} />
            <TextServices>
              Fazemos o match da empresa com os candidatos.
            </TextServices>
          </BoxServices>
          <BoxServices>
            <IconServicesThree src={iconThree} />
            <TextServices>
              Desenvolvemos as soft skils do candidato e acompanhamos todo o
              processo.
            </TextServices>
          </BoxServices>
        </ContainerServices>
        <Box>
          <SubTitleTwo>QUEM SOMOS?</SubTitleTwo>
          <Text>
            UM PROJETO DE IMPACTO SOCIAL, QUE FAZ A PONTE ENTRE EMPRESAS
            PARCEIRAS E AUTISTAS ATRAVÉS DE UMA APLICAÇÃO COMPLETA QUE ATENDE OS
            DOIS LADOS, OFERECENDO UM TREINAMENTO DIRECIONADO PARA AS EMPRESAS
            QUE QUEREM APRENDER SOBRE AUTISMO E COMO ADAPTAR O AMBIENTE
            PROFISSIONAL PARA ESSES PROFFISSIONAIS QUE AGREGAM VALOR ATUALMENTE
            NO MERCADO, ALEM DE OFERECER CURSOS E DIRECIONAMENTO DE CARREIRA
            PARA CANDIDATOS AUTISTAS EM BUSCA DE UMA VAGA.
          </Text>
        </Box>
        <SubTitleThree>Conheça mais sobre autismo em adultos</SubTitleThree>
        <Button>Acesse nosso Blog</Button>
        <ImageOne src={imageOne} />
        <Link to="/candidatepage">
          <ImageBoxVPA src={imageVPA} />
        </Link>
        <Link to="/beourpartner">
          <ImageBoxSEP src={imageSEP} />
        </Link>
        <ImageDOT src={imageDOT} />
      </ContainerHome>
      <ContainerOurServices id="ourservices">
        <TitleOurServices>Nossos serviços</TitleOurServices>
        <BoxOurServices>
          <BlockOne>01</BlockOne>
          <BlockTwo>Treinamentos para empresas</BlockTwo>
          <Link to="/training">
            <ImageArrow src={imageArrow} />
          </Link>
        </BoxOurServices>
        <BoxOurServices>
          <BlockOne>02</BlockOne>
          <BlockTwo>Cursos para autistas</BlockTwo>
          <Link to="/courses">
            <ImageArrow src={imageArrow} />
          </Link>
        </BoxOurServices>
        <BoxOurServices>
          <BlockOne>03</BlockOne>
          <BlockTwo>Área do candidato</BlockTwo>
          <Link to="/candidatepage">
            <ImageArrow src={imageArrow} />
          </Link>
        </BoxOurServices>
        <BoxOurServices>
          <BlockOne>04</BlockOne>
          <BlockTwo>Como ser nosso parceiro</BlockTwo>
          <Link to="/beourpartner">
            <ImageArrow src={imageArrow} />
          </Link>
        </BoxOurServices>
      </ContainerOurServices>
    </>
  );
};

export default Home;
