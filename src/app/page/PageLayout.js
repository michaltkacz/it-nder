import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';

const PageLayout = ({
  navigationBar,
  noticeFilter,
  noticeListSummary,
  noticeList,
  noticeCreator,
}) => {
  return (
    <Container fluid className='h-100 p-0 m-0'>
      <Row noGutters>
        <Col>{navigationBar}</Col>
      </Row>
      <Row noGutters style={{ height: '90%' }}>
        <Container style={{ background: 'white' }}>
          <Row>
            <Col md={8} className='py-3'>
              <Row>
                <Col lg={8}>{noticeFilter}</Col>
                <Col lg={4}>{noticeListSummary}</Col>
              </Row>
              <Row noGutters>
                <Col className='py-3'>{noticeList}</Col>
              </Row>
            </Col>
            <Col md={4} className='py-3'>
              {noticeCreator}
            </Col>
          </Row>
        </Container>
      </Row>
    </Container>
  );
};

export default PageLayout;
