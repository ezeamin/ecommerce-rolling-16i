import { Container } from 'react-bootstrap';
import ProductGrid from '../../components/Main/ProductGrid/ProductGrid';

const MainView = () => {
  return (
    <Container className='my-5'>
      <ProductGrid />
    </Container>
  );
};

export default MainView;
