/** @format */

import { useContext } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const MainLayout = ({ children }) => {
  const history = useHistory();
  const auth = useContext(AuthContext);

  const onSignIn = () => {
    history.replace('/login');
  };

  const onRegister = () => {
    history.replace('/register');
  };

  const onSignOut = () => {
    auth.signOut();
    history.push('/login');
  };

  const goToPlaces = () => {
    history.push('/places');
  };

  return (
    <>
      <Navbar bg="light" variant="light" className="mb-4">
        <Navbar.Brand href="/">QR MENU</Navbar.Brand>
        <Nav>
          <Nav.Link onClick={goToPlaces}>Places</Nav.Link>
        </Nav>
        <Nav className="flex-grow-1 justify-content-end">
          {auth.token ? (
            <Nav.Link onClick={onSignOut}>Logout</Nav.Link>
          ) : (
            <>
              <Nav.Link onClick={onSignIn}>Login</Nav.Link>
              <Nav.Link onClick={onRegister}>Register</Nav.Link>
            </>
          )}
        </Nav>
      </Navbar>
      <Container>{children}</Container>
    </>
  );
};

export default MainLayout;
