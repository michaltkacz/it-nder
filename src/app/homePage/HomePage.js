import React from 'react';

import { Button, Container, Col, Row } from 'react-bootstrap';

import { Link } from 'react-router-dom';

import HomePageLayout from './HomePageLayout';

const HomePage = () => {
  return (
    <HomePageLayout>
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
          <Col sm={6} className='my-1'>
            <Button
              as={Link}
              to='/browse'
              variant='outline-info'
              className='w-75'
            >
              Browse notices
            </Button>
          </Col>
          <Col sm={6} className='my-1'>
            <Button as={Link} to='/add' variant='outline-info' className='w-75'>
              Add notice
            </Button>
          </Col>
        </Row>
      </Container>
    </HomePageLayout>
  );
};

export default HomePage;
