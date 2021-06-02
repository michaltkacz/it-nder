import React from 'react';

import { Jumbotron, Container, Row, Col } from 'react-bootstrap';

const HomePageContainer = ({ children }) => {
  return (
    <Jumbotron fluid className='m-0 p-0 w-100 h-100'>
      <Container className='h-100'>
        <Row noGutters className='h-100'>
          <Col className='d-flex align-items-center justify-content-center'>
            <div
              className='p-5'
              style={{ background: 'rgba(0,0,0,0.75)', color: 'white' }}
            >
              {children}
            </div>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
};

export default HomePageContainer;
