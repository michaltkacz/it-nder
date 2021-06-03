import React from 'react';

import { Nav, Navbar, NavDropdown, NavItem } from 'react-bootstrap';

import { Link, useHistory } from 'react-router-dom';

import { useAuth } from '../../contexts/AuthContext';

const NavigationBar = () => {
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  const handleLogout = async () => {
    try {
      await logout();
      history.push('/it-nder');
    } catch {}
  };

  return (
    <Navbar bg='dark' variant='dark' expand='sm'>
      <Navbar.Brand as={Link} to='/it-nder' className='light'>
        IT-NDER
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='w-100 justify-content-end'>
          {currentUser ? (
            <>
              <NavItem eventkey={1}>
                <Nav.Link as={Link} to='/browse'>
                  browse notices
                </Nav.Link>
              </NavItem>
              <NavItem eventkey={2}>
                <Nav.Link as={Link} to='/my-notices'>
                  my notices
                </Nav.Link>
              </NavItem>
              <NavDropdown title={<strong>{currentUser?.email}</strong>}>
                <NavDropdown.Item onClick={handleLogout}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            </>
          ) : (
            <NavItem eventkey={3}>
              <Nav.Link as={Link} to='/login'>
                sign in
              </Nav.Link>
            </NavItem>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
