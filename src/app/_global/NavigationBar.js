import React from 'react';

import { Nav, Navbar, NavItem } from 'react-bootstrap';

import { Link } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <Navbar bg='dark' variant='dark' expand='sm'>
      <Navbar.Brand as={Link} to='/' className='light'>
        IT-NDER
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='mr-auto'>
          <NavItem eventkey={1} href='/'>
            <Nav.Link as={Link} to='/'>
              home
            </Nav.Link>
          </NavItem>
          <NavItem eventkey={2} href='/browse'>
            <Nav.Link as={Link} to='/browse'>
              browse
            </Nav.Link>
          </NavItem>
          <NavItem eventkey={3} href='/add'>
            <Nav.Link as={Link} to='/add'>
              add notice
            </Nav.Link>
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
