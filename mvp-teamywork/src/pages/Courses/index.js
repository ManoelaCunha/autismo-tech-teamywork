import {
  Block,
  BoxCourses,
  Buttom,
  Container,
  ImageBoxVPA,
  Span,
  SubTitle,
  SubTitleBox,
  Text,
  TextBox,
  Title,
} from "./styles";

import imageVPA from "./../../assets/Images/vpa.png";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Courses = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Title>Cursos para autistas</Title>
      <SubTitle>Sejam bem vindos!</SubTitle>
      <Text>
        A TEAmywork não será apenas um lugar para captar currículos dos
        candidatos autistas, nosso objetivo é também oferecer direcionamento
        para os candidatos que procuram uma oportunidade no mercado de trabalho.
      </Text>
      <Text>
        Por isso, dentro da área do candidato nós oferecemos a possibilidade de
        auxílio na elaboração do currículo e simulações de entrevistas com
        feedbacks de melhoria que ajudam o candidato a se preparar melhor para
        um processo seletivo.
      </Text>
      <Text>
        E além disso, na área do candidato também oferecemos cursos e workshops
        que ajudam o candidato a desenvolver soft skills importantes para o
        mercado de trabalho atualmente, como inteligência sócio emocional,
        empatia, autonomia, comunicação e adaptabilidade.
      </Text>
      <Container>
        <BoxCourses>
          <SubTitleBox>Inteligência sócio emocional</SubTitleBox>
          <TextBox>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen{" "}
          </TextBox>
          <Block>
            <Span>120 horas</Span>
            <Buttom>Inscrever</Buttom>
          </Block>
        </BoxCourses>
        <BoxCourses>
          <SubTitleBox>Empatia & autonomia</SubTitleBox>
          <TextBox>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen{" "}
          </TextBox>
          <Block>
            <Span>120 horas</Span>
            <Buttom>Inscrever</Buttom>
          </Block>
        </BoxCourses>
        <BoxCourses>
          <SubTitleBox>Comunicação descomplicada</SubTitleBox>
          <TextBox>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen{" "}
          </TextBox>
          <Block>
            <Span>120 horas</Span>
            <Buttom>Inscrever</Buttom>
          </Block>
        </BoxCourses>
        <BoxCourses>
          <SubTitleBox>Adaptabilidade e mudanças de rotina</SubTitleBox>
          <TextBox>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen{" "}
          </TextBox>
          <Block>
            <Span>120 horas</Span>
            <Buttom>Inscrever</Buttom>
          </Block>
        </BoxCourses>
        <BoxCourses>
          <SubTitleBox>Tecnica de Pomodoro</SubTitleBox>
          <TextBox>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen{" "}
          </TextBox>
          <Block>
            <Span>120 horas</Span>
            <Buttom>Inscrever</Buttom>
          </Block>
        </BoxCourses>
        <BoxCourses>
          <SubTitleBox>Tecnicas de relaxamento</SubTitleBox>
          <TextBox>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen{" "}
          </TextBox>
          <Block>
            <Span>120 horas</Span>
            <Buttom>Inscrever</Buttom>
          </Block>
        </BoxCourses>
      </Container>
      <Link to="/candidatepage">
        <ImageBoxVPA src={imageVPA} />
      </Link>
    </>
  );
};

export default Courses;
