import {
  Block,
  ContainerFooter,
  ImageLogo,
  Title,
  TextLink,
  Box,
  Link,
} from "./styles";

import logo from "./../../assets/Images/tea..png";

const Footer = () => {
  return (
    <ContainerFooter>
      <>
        <ImageLogo src={logo} />
      </>
      <Box>
        <Block>
          <Title>LINKS RÁPIDOS</Title>
          <Link href="#home">
            <TextLink>Início</TextLink>
          </Link>
          <Link>
            <TextLink>Fale conosco</TextLink>
          </Link>
          <Link href="/beourpartner">
            <TextLink>Seja nosso parceiro</TextLink>
          </Link>
        </Block>
        <Block>
          <Title>SERVIÇOS</Title>
          <Link href="/training">
            <TextLink>Treinamentos</TextLink>
          </Link>
          <Link href="/courses">
            <TextLink>Cursos</TextLink>
          </Link>
          <Link href="/candidatepage">
            <TextLink>Área Candidato</TextLink>
          </Link>
        </Block>
        <Block>
          <Title>CONTEÚDO</Title>
          <Link>
            <TextLink>Blog</TextLink>
          </Link>
          <Link>
            <TextLink>Case</TextLink>
          </Link>
        </Block>
      </Box>
    </ContainerFooter>
  );
};

export default Footer;
