import { Card } from 'react-bootstrap';

const ProductItem = (props) => {
  const { id, concept, amount, date } = props;

  return (
    <Card>
      <Card.Body>
        <Card.Title className='text-dark'>{new Date(date).toLocaleDateString()}</Card.Title>
        <Card.Text className='text-dark'>{concept}</Card.Text>
        <div className='text-end'>
          <h5 className='text-dark'>$ {amount}</h5>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProductItem;
