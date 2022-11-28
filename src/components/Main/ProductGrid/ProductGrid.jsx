import { Col, Row } from 'react-bootstrap';
import ProductItem from '../ProductItem/ProductItem';

const fakeArray = [
  {
    id: 1,
    name: 'Zanahoria',
    price: 25.23,
    description: 'Vegetal copado',
    image: "https://img.freepik.com/fotos-premium/zanahoria-entera-aislada_88281-1988.jpg?w=2000"
  },
  {
    id: 2,
    name: 'Zanahoria',
    price: 25.23,
    description: 'Vegetal copado',
    image: "https://img.freepik.com/fotos-premium/zanahoria-entera-aislada_88281-1988.jpg?w=2000"
  },
  {
    id: 3,
    name: 'Zanahoria',
    price: 25.23,
    description: 'Vegetal copado',
    image: "https://img.freepik.com/fotos-premium/zanahoria-entera-aislada_88281-1988.jpg?w=2000"
  },
  {
    id: 4,
    name: 'Zanahoria',
    price: 25.23,
    description: 'Vegetal copado',
    image: "https://img.freepik.com/fotos-premium/zanahoria-entera-aislada_88281-1988.jpg?w=2000"
  },
  {
    id: 5,
    name: 'Zanahoria',
    price: 25.23,
    description: 'Vegetal copado',
    image: "https://img.freepik.com/fotos-premium/zanahoria-entera-aislada_88281-1988.jpg?w=2000"
  },
  {
    id: 6,
    name: 'Zanahoria',
    price: 25.23,
    description: 'Vegetal copado',
    image: "https://img.freepik.com/fotos-premium/zanahoria-entera-aislada_88281-1988.jpg?w=2000"
  },
];

const ProductGrid = () => {
  return (
    <Row>
      {fakeArray.map((elemento) => {
        return (
          <Col xs={12} md={4} lg={3} key={elemento.id} className="p-2">
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
