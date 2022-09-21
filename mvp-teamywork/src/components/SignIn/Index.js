import { Link } from "react-router-dom";
import {
  BoxForm,
  BoxHeader,
  BoxInput,
  Button,
  Image,
  Input,
  Text,
  Title,
} from "./styles";

import imageLogo from "./../../assets/Images/tea..png";

const SignIn = ({ setIsLogin }) => {
  return (
    <BoxForm>
      <form>
        <BoxHeader>
          <Image src={imageLogo} />
          <Title>Login</Title>
        </BoxHeader>

        <BoxInput>
          <Input id="email" type="text" placeholder="E-mail" />
        </BoxInput>

        <BoxInput>
          <Input id="senha" type="password" placeholder="Senha" />
        </BoxInput>

        <Button>Entrar</Button>

        <Text>
          Não tem uma conta? Cadastre-se{" "}
          <Link onClick={() => setIsLogin(false)}>aqui</Link>
        </Text>
      </form>
    </BoxForm>
  );
};

export default SignIn;
