import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';

import Header from '../page/Header';

import Notice from './Notice';

const NoticeList = ({ noticeList }) => {
  return (
    <Container fluid>
      <Row noGutters>
        <Col>
          <Header>List of active notices</Header>
        </Col>
      </Row>
      <Row noGutters>
        <Col>
          {noticeList.map((notice, index) => {
            return <Notice key={index} notice={notice} />;
          })}
        </Col>
      </Row>
    </Container>
  );
};

export default NoticeList;
