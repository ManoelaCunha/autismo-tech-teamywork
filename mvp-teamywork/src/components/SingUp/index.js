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

const SignUp = ({ setIsLogin }) => {
  return (
    <BoxForm>
      <form>
        <BoxHeader>
          <Image src={imageLogo} />
          <Title>Cadastro</Title>
        </BoxHeader>

        <BoxInput>
          <Input id="nome" type="text" placeholder="Nome" />
        </BoxInput>

        <BoxInput>
          <Input id="email" type="text" placeholder="E-mail" />
        </BoxInput>

        <BoxInput>
          <Input id="email" type="password" placeholder="Senha" />
        </BoxInput>

        <Button>Cadastrar</Button>

        <Text>
          Já tem uma conta? Faça login{" "}
          <Link onClick={() => setIsLogin(true)}>aqui</Link>
        </Text>
      </form>
    </BoxForm>
  );
};

export default SignUp;
