import React from 'react';

import { Button, Container, Col, Row } from 'react-bootstrap';

import { Link } from 'react-router-dom';

import { useAuth } from '../../contexts/AuthContext';

import HomePageContainer from './HomePageContainer';

const HomePage = () => {
  const { currentUser } = useAuth();

  const signedInButtons = (
    <>
      <Col sm={6} className='my-1'>
        <Button as={Link} to='/browse' variant='outline-info' className='w-75'>
          browse notices
        </Button>
      </Col>
      <Col sm={6} className='my-1'>
        <Button
          as={Link}
          to='/my-notices'
          variant='outline-info'
          className='w-75'
        >
          my notices
        </Button>
      </Col>
    </>
  );

  const signedOutButtons = (
    <>
      <Col sm={6} className='my-1'>
        <Button
          as={Link}
          to='/register'
          variant='outline-info'
          className='w-75'
        >
          sign up
        </Button>
      </Col>
      <Col sm={6} className='my-1'>
        <Button as={Link} to='/login' variant='outline-info' className='w-75'>
          sign in
        </Button>
      </Col>
    </>
  );
  return (
    <HomePageContainer>
      <Container fluid className='text-center'>
        <Row className='d-flex justify-content-center mb-3'>
          <h1>
            WELCOME TO <nobr>IT-NDER</nobr>
          </h1>
        </Row>
        <Row className='d-flex justify-content-center mb-3'>
          <h4>
            The <b>DEFINITELY NOT #1</b> application for finding teammates for
            your IT project!
          </h4>
        </Row>
        <Row className='d-flex justify-content-center mb-3'>
          <h5>Enjoy!</h5>
        </Row>
        <Row className=''>
          {currentUser ? signedInButtons : signedOutButtons}
        </Row>
      </Container>
    </HomePageContainer>
  );
};

export default HomePage;
