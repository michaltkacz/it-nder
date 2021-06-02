import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';

import Notice from './Notice';

const NoticeList = ({ noticeList, title, isEditable, isPreview }) => {
  return (
    <Container fluid>
      <Row noGutters>
        <Col>
          <h4>{title}</h4>
        </Col>
      </Row>
      <Row noGutters>
        <Col>
          {!noticeList || !noticeList?.length
            ? 'No active notices'
            : noticeList.map((notice, index) => {
                return (
                  <Notice
                    key={index}
                    notice={notice}
                    isEditable={isEditable}
                    isPreview={isPreview}
                  />
                );
              })}
        </Col>
      </Row>
    </Container>
  );
};

export default NoticeList;
