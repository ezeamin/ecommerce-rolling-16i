import { Container } from 'react-bootstrap';

import ProductGrid from '../../components/Main/ProductGrid/ProductGrid';

const MainView = () => {
  return (
    <Container className='my-5'>
      <h1 className='text-center'>Bienvenidos a Rolling Expenses</h1>
      <hr />
      <ProductGrid />
    </Container>
  );
};

export default MainView;
