import axios from '../../../api/axios';
import { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import ItemsTableItem from './ItemsTableItem';

import './table.css';

const ItemsTable = (props) => {
  const { setModifyingItem } = props;

  const [items, setItems] = useState([]);

  useEffect(() => {
    const itemsFetch = async () => {
      const data = await axios().get(`/products`);
      setItems(data.data);
    };

    itemsFetch();
  }, []);

  return (
    <Table responsive striped hover className='mt-3 bg-light rounded'>
      <thead>
        <tr>
          <th>#</th>
          <th>Nombre</th>
          <th>Precio</th>
          <th>Imagen</th>
          <th>Descripcion</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {items.map((elemento) => {
          return (
            <ItemsTableItem
              key={elemento.id}
              {...elemento}
              setModifyingItem={setModifyingItem}
            />
          );
        })}
      </tbody>
    </Table>
  );
};

export default ItemsTable;
