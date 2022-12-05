import { Container, Navbar as NavbarBS, Nav, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleClick = (route) => {
    navigate(route);
  };

  return (
    <NavbarBS bg='dark' variant='dark' expand='lg'>
      <Container>
        <NavbarBS.Brand
          onClick={() => handleClick('/')}
          style={{ cursor: 'pointer' }}
        >
          Rolling Market
        </NavbarBS.Brand>
        <NavbarBS.Toggle aria-controls='navbar-market' />
        <NavbarBS.Collapse id='navbar-market'>
          <Nav className='ms-auto'>
            <Button variant='danger' onClick={() => handleClick('/admin')}>
              Admin
            </Button>
            <Button
              variant='primary'
              className='ms-2'
              onClick={() => handleClick('/login')}
            >
              Login
            </Button>
            {/* Link o NavLink  */}
          </Nav>
        </NavbarBS.Collapse>
      </Container>
    </NavbarBS>
  );
};

export default Navbar;
