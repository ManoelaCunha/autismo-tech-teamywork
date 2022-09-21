import {
  Block,
  BoxOne,
  BoxThree,
  BoxTwo,
  Image,
  ImageKit,
  ImagePartnes,
  ImageTeam,
  SubTitle,
  SubTitleTwo,
  TextBox,
  Title,
} from "./styles";
import { useEffect } from "react";

import image from "./../../assets/Images/image-partnes.png";
import imageTeam from "./../../assets/Images/box-team.png";
import imageText from "./../../assets/Images/text-partnes.png";
import imageKit from "./../../assets/Images/kit-partnes.png";
import imagePartnes from "./../../assets/Images/employers.png";

const BeOurPartner = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <BoxOne>
        <Title>Seja nosso parceiro</Title>
        <ImageTeam src={imageTeam} />
      </BoxOne>
      <BoxTwo>
        <Image src={image} />
        <Block>
          <SubTitle>Porque contratar autistas?</SubTitle>
          <TextBox src={imageText} />
        </Block>
      </BoxTwo>
      <ImageKit src={imageKit} />
      <SubTitleTwo>Empresas que apoiam nosso projeto</SubTitleTwo>
      <BoxThree>
        <ImagePartnes src={imagePartnes} />
      </BoxThree>
    </>
  );
};

export default BeOurPartner;
