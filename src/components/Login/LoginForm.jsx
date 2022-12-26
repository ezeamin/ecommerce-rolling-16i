import { useState } from 'react';
import { Alert, Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from '../../api/axios';

const LoginForm = () => {
  const { register, handleSubmit: handleRHF } = useForm();

  const navigate = useNavigate();

  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (data) => {
    try {
      const response = await axios().post('/login', {
        username: data.user,
        password: data.password,
      });

      if (response.status === 200) {
        setIsError(false);
        const token = response.data.token;

        sessionStorage.setItem('token', token);

        Swal.fire({
          title: 'Bienvenido',
          timer: 2000,
          showCancelButton: false,
          showConfirmButton: false,
        }).then(() => {
          navigate('/admin');
        });
      }
    } catch (error) {
      setIsError(true);
      setErrorMessage(error.response.data.message);
    }
  };

  return (
    <Form onSubmit={handleRHF(handleSubmit)}>
      {isError && (
        <Alert variant='danger'>{errorMessage || 'Revise los campos'}</Alert>
      )}
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
