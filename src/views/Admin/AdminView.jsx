import { useState } from 'react';
import { Container } from 'react-bootstrap';

import ItemsForm from '../../components/Admin/Form/ItemsForm';
import ItemsTable from '../../components/Admin/Table/ItemsTable';

const AdminView = () => {
  const [modifyingItem, setModifyingItem] = useState(null);

  return (
    <Container className='my-5'>
      <h1 className='text-center'>Panel de administracion</h1>
      <hr />
      <ItemsForm modifyingItem={modifyingItem} />
      <ItemsTable setModifyingItem={setModifyingItem} />
    </Container>
  );
};

export default AdminView;
