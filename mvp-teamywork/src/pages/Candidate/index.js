import { useEffect, useState } from "react";
import { BoxOne, BoxTwo, ImageOne, ImageTwo } from "./styles";

import imageOne from "./../../assets/Images/candidate-page.png";
import imageTwo from "./../../assets/Images/image-background.png";

import SignIn from "../../components/SignIn/Index";
import SignUp from "../../components/SingUp";

const CandidatePage = () => {
  const [isLogin, setIsLogin] = useState(true);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <BoxOne>
        <ImageOne src={imageOne} />
      </BoxOne>
      <BoxTwo>
        <ImageTwo src={imageTwo} />
        {isLogin ? (
          <SignIn setIsLogin={setIsLogin} />
        ) : (
          <SignUp setIsLogin={setIsLogin} />
        )}
      </BoxTwo>
    </>
  );
};

export default CandidatePage;
