import { useEffect, useState } from 'react';
import axios from 'axios';

import { Button, Container, Form } from 'react-bootstrap';

import { validateData } from '../../../helpers/validateData';
import { getRandomId } from '../../../helpers/getRandomId';
import Swal from 'sweetalert2';

const baseUrl = process.env.REACT_APP_BASE_URL;

const ItemsForm = (props) => {
  const { modifyingItem } = props;

  const [nombre, setNombre] = useState();
  const [precio, setPrecio] = useState();
  const [descripcion, setDescripcion] = useState();
  const [imagen, setImagen] = useState();

  useEffect(() => {
    const fetchItems = async () => {
      const res = await axios.get(`${baseUrl}/items`);

      const items = res.data;

      const itemToModify = items.find(
        (element) => element.id === modifyingItem
      );

      console.log(itemToModify);

      setNombre(itemToModify.name); //nombre del elemento con tal id
      setPrecio(itemToModify.price);
      setDescripcion(itemToModify.description);
      setImagen(itemToModify.image);
    };

    if (modifyingItem) {
      fetchItems();
    }
  }, [modifyingItem]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateData(nombre, precio, descripcion, imagen)) {
      // guardo los datos
      console.log('datos VALIDOS');

      //   Caso EDITAR
      if (modifyingItem) {
        const res = await axios.put(`${baseUrl}/items/${modifyingItem}`, {
          name: nombre,
          price: precio,
          description: descripcion,
          image: imagen,
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
      const res = await axios.post(`${baseUrl}/items`, {
        id: getRandomId(),
        name: nombre,
        price: precio,
        description: descripcion,
        image: imagen,
      });

      if (res.status === 201) {
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
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type='text'
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
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
          <Form.Label>Imagen</Form.Label>
          <Form.Control
            type='url'
            value={imagen}
            onChange={(e) => setImagen(e.target.value)}
          />
        </Form.Group>
        <Form.Group className='mt-2'>
          <Form.Label>Descripcion</Form.Label>
          <Form.Control
            as='textarea'
            rows='3'
            type='text'
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            style={{ resize: 'none' }}
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
