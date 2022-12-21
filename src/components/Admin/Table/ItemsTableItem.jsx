import axios from '../../../api/axios';
import { Button } from 'react-bootstrap';
import Swal from 'sweetalert2';

const ItemsTableItem = (props) => {
  const { id, name, price, image, description, setModifyingItem } = props;

  const handleEdit = () => {
    console.log('editar', id);
    setModifyingItem(id);
  };

  const handleDelete = () => {
    console.log('eliminar', id);

    Swal.fire({
      title: 'Eliminar',
      text: '¿Estás seguro?',
      icon: 'warning',
      showCancelButton: true,
      cancelButtonText: 'Cancelar',
    }).then(async (res) => {
      if (res.isConfirmed) {
        //eliminar
        const res = await axios.delete(`/product/${id}`);

        if (res.status === 200) {
          Swal.fire({
            title: 'Operacion exitosa',
            text: 'Elemento eliminado correctamente',
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
            text: `Ocurrio un error al eliminar el elemento, que es: ${res.statusText}`,
            icon: 'error',
            timer: 2000,
            showCancelButton: false,
            showConfirmButton: false,
          });
        }
      }
      // no eliminar
    });
  };

  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{price}</td>
      <td>
        <img src={image} className='img_table' alt={name} />
      </td>
      <td>{description}</td>
      <td>
        <Button variant='primary' className='me-1' onClick={handleEdit}>
          Editar
        </Button>
        <Button variant='danger' onClick={handleDelete}>
          Borrar
        </Button>
      </td>
    </tr>
  );
};

export default ItemsTableItem;
