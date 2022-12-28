import { useEffect, useState } from 'react';
import axios from '../../../api/axios';

import { Button, Container, Form } from 'react-bootstrap';

import { validateData } from '../../../helpers/validateData';

import Swal from 'sweetalert2';

const ItemsForm = (props) => {
  const { modifyingItem } = props;

  const [concepto, setConcepto] = useState();
  const [precio, setPrecio] = useState();
  const [fecha, setFecha] = useState();

  useEffect(() => {
    const fetchItems = async () => {
      const res = await axios().get(`/expenses`);

      const items = res.data.data;

      const itemToModify = items.find(
        (element) => element.expenseID === modifyingItem
      );

      console.log(itemToModify);

      const date = new Date(itemToModify.date);
      const year = date.getFullYear();
      const month = date.getMonth();
      const day = date.getDate();

      setConcepto(itemToModify.concept); //nombre del elemento con tal id
      setPrecio(itemToModify.amount);
      setFecha(`${year}-${month}-${day}`);
    };

    if (modifyingItem) {
      fetchItems();
    }
  }, [modifyingItem]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateData(concepto, precio, fecha)) {
      // guardo los datos
      console.log('datos VALIDOS');

      //   Caso EDITAR
      if (modifyingItem) {
        const res = await axios().put(`/expense`, {
          date: fecha,
          amount: precio,
          concept: concepto,
          expenseId: modifyingItem,
        });

        if (res.status === 200) {
          Swal.fire({
            title: 'Operacion exitosa',
            text: 'Elemento modificado correctamente',
            icon: 'success',
            timer: 2000,
            showCancelButton: false,
            showConfirmButton: false,
          }).then(() => {
            window.location.reload();
          });
        } else {
          Swal.fire({
            title: 'Error',
            text: `Ocurrio un error al editar el elemento, que es: ${res.statusText}`,
            icon: 'error',
            timer: 2000,
            showCancelButton: false,
            showConfirmButton: false,
          });
        }

        return;
      }

      //   Caso CREAR
      const res = await axios().post(`/expense`, {
        date: fecha,
        amount: precio,
        concept: concepto,
      });

      if (res.status === 200) {
        Swal.fire({
          title: 'Operacion exitosa',
          text: 'Elemento agregado correctamente',
          icon: 'success',
          timer: 2000,
          showCancelButton: false,
          showConfirmButton: false,
        }).then(() => {
          window.location.reload();
        });
      } else {
        Swal.fire({
          title: 'Error',
          text: `Ocurrio un error al guardar el elemento, que es: ${res.statusText}`,
          icon: 'error',
          timer: 2000,
          showCancelButton: false,
          showConfirmButton: false,
        });
      }
    } else {
      // muestro error
      console.log('datos INVALIDOS');

      Swal.fire({
        title: 'Error',
        text: `Revise los campos`,
        icon: 'error',
        timer: 2000,
        showCancelButton: false,
        showConfirmButton: false,
      });
    }
  };

  return (
    <Form
      className='bg-light text-dark rounded w-100 py-3'
      onSubmit={handleSubmit}
    >
      <Container>
        <h2>{modifyingItem ? 'Editar item' : 'Crear item'}</h2>
        <hr />
        <Form.Group>
          <Form.Label>Concepto</Form.Label>
          <Form.Control
            type='text'
            value={concepto}
            onChange={(e) => setConcepto(e.target.value)}
          />
        </Form.Group>
        <Form.Group className='mt-2'>
          <Form.Label>Precio</Form.Label>
          <Form.Control
            type='number'
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
          />
        </Form.Group>
        <Form.Group className='mt-2'>
          <Form.Label>Fecha</Form.Label>
          <Form.Control
            type='date'
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </Form.Group>
        <div className='text-end mt-2'>
          <Button type='submit' variant='danger'>
            Guardar
          </Button>
        </div>
      </Container>
    </Form>
  );
};

export default ItemsForm;
