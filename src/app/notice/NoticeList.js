import React from 'react';

import { Container, Row, Col, DropdownButton, Dropdown } from 'react-bootstrap';

import Header from '../_global/Header';

import Notice from './Notice';

const NoticeList = ({ noticeList, dbCrud }) => {
  return (
    <Container fluid>
      <Row noGutters>
        <Col>
          <Header>List of active notices</Header>
        </Col>
      </Row>
      <Row noGutters>
        <Col>
          {noticeList?.length === 0
            ? 'No active notices'
            : noticeList.map((notice, index) => {
                return <Notice key={index} notice={notice} dbCrud={dbCrud} />;
              })}
        </Col>
      </Row>
    </Container>
  );
};

export default NoticeList;
