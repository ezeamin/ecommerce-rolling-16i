import { useState } from 'react';
import { Alert, Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const LoginForm = () => {
  const { register, handleSubmit: handleRHF } = useForm();

  const navigate = useNavigate();

  const [isError, setIsError] = useState(false);

  const handleSubmit = (data) => {
    const registeredUser = localStorage.getItem('user');
    const registeredPassword = localStorage.getItem('password');

    if (data.user === registeredUser && data.password === registeredPassword) {
      setIsError(false);
      Swal.fire({
        title: 'Bienvenido',
        timer: 2000,
        showCancelButton: false,
        showConfirmButton: false,
      }).then(() => {
        sessionStorage.setItem('isLoggedIn', true);
        navigate('/admin');
      });
    } else {
      //   Datos no validos
      setIsError(true);
    }
  };

  return (
    <Form onSubmit={handleRHF(handleSubmit)}>
      {isError && <Alert variant='danger'>Revise los campos</Alert>}
      <Form.Group>
        <Form.Label>Usuario</Form.Label>
        <Form.Control
          type='text'
          {...register('user', { required: true, maxLength: 20 })}
        />
      </Form.Group>
      <Form.Group className='mt-2'>
        <Form.Label>Contraseña</Form.Label>
        <Form.Control
          type='password'
          {...register('password', { required: true, maxLength: 20 })}
        />
      </Form.Group>
      <div className='text-end mt-3'>
        <Button type='submit' variant='danger'>
          Ingresar
        </Button>
      </div>
    </Form>
  );
};

export default LoginForm;
