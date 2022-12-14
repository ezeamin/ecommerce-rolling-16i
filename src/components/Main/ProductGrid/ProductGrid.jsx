import axios from '../../../api/axios';
import { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import ProductItem from '../ProductItem/ProductItem';

const ProductGrid = () => {
  const [items, setItems] = useState([]);
  
  useEffect(() => {
    const itemsFetch = async () => {
      // http://localhost:3004/items
      // https://miapi.heroku.app
      const data = await axios.get(`/products`);
      setItems(data.data);
    };

    itemsFetch();
  }, []);

  return (
    <Row>
      {items.map((elemento) => {
        return (
          <Col xs={12} md={4} lg={3} key={elemento.id} className='p-2'>
            {/* <ProductItem
              id={elemento.id}
              name={elemento.name}
              description={elemento.description}
              price={elemento.price}
              image={elemento.image}
            /> */}
            {/* Version reducida v */}
            <ProductItem {...elemento} />
          </Col>
        );
      })}
    </Row>
  );
};

export default ProductGrid;
