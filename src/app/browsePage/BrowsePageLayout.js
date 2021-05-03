import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';

const PageLayout = ({ noticeFilter, noticeListSummary, noticeList }) => {
  return (
    <Container className='h-100 px-3 py-2' style={{ background: 'white' }}>
      <Row>
        <Col lg={8}>{noticeFilter}</Col>
        <Col lg={4}>{noticeListSummary}</Col>
      </Row>
      <Row>
        <Col className='py-3'>{noticeList}</Col>
      </Row>
    </Container>
  );
};

export default PageLayout;
