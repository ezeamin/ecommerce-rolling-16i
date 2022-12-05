import { Container } from 'react-bootstrap';
import LoginForm from '../../components/Login/LoginForm';

const LoginView = () => {
  return (
    <Container className="my-5">
      <h1>Bienvenido!</h1>
      <p>Por favor, ingrese sus credenciales para continuar.</p>
      <hr />
      <LoginForm />
    </Container>
  );
};

export default LoginView;
