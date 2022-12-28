import axios from '../../../api/axios';
import { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import ProductItem from '../ProductItem/ProductItem';

const ProductGrid = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const itemsFetch = async () => {
      const data = await axios().get(`/expenses`);
      setItems(data.data.data);
    };

    itemsFetch();
  }, []);

  return (
    <Row>
      {items.map((elemento) => {
        return (
          <Col xs={12} md={4} lg={3} key={elemento.expenseID} className='p-2'>
            <ProductItem {...elemento} />
          </Col>
        );
      })}
    </Row>
  );
};

export default ProductGrid;
