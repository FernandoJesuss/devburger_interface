import { useForm } from 'react-hook-form';  
import { yupResolver } from '@hookform/resolvers/yup';  
import * as yup from "yup";



import Logo from '../../assets/Logo.svg';
import {Button} from "../../components/Button";

import {
  Container,
  LeftContainer,
  RightContainer,
  Title,
  Form,
  InputContainer,
  

} from './styles';

export function Login() {

  const schema = yup
.object({
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
})
.required();


const {
  register,
  handleSubmit,
  formState: { errors },
} = useForm({
  resolver: yupResolver(schema),
})
const onSubmit = (data) => console.log(data)














  return (
    <Container>
      <LeftContainer>
        <img src={Logo} alt="logo-devburger" />
      </LeftContainer>
      <RightContainer>
        <Title>
          Olá, seja bem vindo ao <span>Dev Burguer!</span>
          <br />
          Acesse com seu <span> Login e senha.</span>
        </Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputContainer>
            <label>Email</label>
            <input type="email"{...register("email")} />
          </InputContainer>

          <InputContainer>
            <label>Senha</label>
            <input type="password" {...register("password")} />
          </InputContainer>
          

          <Button type="submit" >Entra</Button>
        </Form>
        <p>Não possui conta? <a>Clique aqui.</a> </p>
      </RightContainer>
    </Container>
  );
}
