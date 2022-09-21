import {
  BlockOne,
  BlockTwo,
  BoxOne,
  BoxTwo,
  ImageBoxSEP,
  ImageOne,
  ImageTraining,
  InfoBox,
  SubTitle,
  Text,
  TextBox,
  Title,
} from "./styles";

import imageOne from "./../../assets/Images/image-training1.png";
import imageTwo from "./../../assets/Images/box-text.png";
import imageTrainingOne from "./../../assets/Images/image-training3.png";
import imageTrainingTwo from "./../../assets/Images/image-training2.png";
import imageTrainingThree from "./../../assets/Images/image-training4.png";
import imageInfoOne from "./../../assets/Images/info-box1.png";
import imageInfoTwo from "./../../assets/Images/info-box2.png";
import imageInfoThree from "./../../assets/Images/info-box3.png";
import imageSEP from "./../../assets/Images/sep.png";

import { useEffect } from "react";
import { Link } from "react-router-dom";

const Training = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Title>Treinamentos para empresas</Title>
      <Text>
        O treinamento oferecido pela TEAmywork tem como objetivo ajudar a
        empresa a preparar o ambiente empresarial para autistas, por isso ele é
        dividido em três partes que consideramos essenciais, focadas em
        processos seletivos, lideranças e funcionários.
      </Text>
      <BoxOne>
        <ImageOne src={imageOne} />
        <BlockOne>
          <SubTitle>Benefícios de ser nosso parceiro</SubTitle>
          <TextBox src={imageTwo}></TextBox>
        </BlockOne>
      </BoxOne>
      <BoxTwo>
        <BlockTwo>
          <ImageTraining src={imageTrainingOne} />
          <InfoBox src={imageInfoOne} />
        </BlockTwo>
        <BlockTwo>
          <ImageTraining src={imageTrainingTwo} />
          <InfoBox src={imageInfoTwo} />
        </BlockTwo>
        <BlockTwo>
          <ImageTraining src={imageTrainingThree} />
          <InfoBox src={imageInfoThree} />
        </BlockTwo>
      </BoxTwo>
      <Link to="/beourpartner">
        <ImageBoxSEP src={imageSEP} />
      </Link>
    </>
  );
};

export default Training;
