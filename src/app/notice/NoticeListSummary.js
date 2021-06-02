import React from 'react';

import { Card, Row, Col, Container } from 'react-bootstrap';

const NoticeListSummary = ({ noticeList }) => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <h4>Summary</h4>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card className='text-center'>
            <Card.Body>
              <Card.Text>
                Found {noticeList === null ? 0 : noticeList?.length} matching
                results!
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default NoticeListSummary;
