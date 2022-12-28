import axios from '../../../api/axios';
import { Button } from 'react-bootstrap';
import Swal from 'sweetalert2';

const ItemsTableItem = (props) => {
  const { expenseID, concept, date, amount, setModifyingItem } = props;

  const handleEdit = () => {
    console.log('editar', expenseID);
    setModifyingItem(expenseID);
  };

  const handleDelete = () => {
    console.log('eliminar', expenseID);

    Swal.fire({
      title: 'Eliminar',
      text: '¿Estás seguro?',
      icon: 'warning',
      showCancelButton: true,
      cancelButtonText: 'Cancelar',
    }).then(async (res) => {
      if (res.isConfirmed) {
        //eliminar
        const res = await axios().delete(`/expense/${expenseID}`);

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
      <td>{expenseID}</td>
      <td>{concept}</td>
      <td>{date}</td>
      <td>{amount}</td>
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
