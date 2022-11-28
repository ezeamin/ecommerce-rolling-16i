import { Button, Card } from 'react-bootstrap';

const ProductItem = (props) => {
  const { id, name, description, price, image } = props;

  return (
    <Card>
      <Card.Img variant='top' src={image} />
      <Card.Body>
        <Card.Title className='text-dark'>{name}</Card.Title>
        <Card.Text className='text-dark'>{description}</Card.Text>
        <div className='text-end'>
          <h5 className='text-dark'>$ {price}</h5>
          <Button variant='danger'>Agregar a carrito</Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProductItem;
