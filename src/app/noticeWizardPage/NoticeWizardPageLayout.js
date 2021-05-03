import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';

const NoticeWizardPageLayout = ({ noticeWizard, noticePreview }) => {
  return (
    <Container className='h-100 px-3 py-2' style={{ background: 'white' }}>
      <Row>
        <Col>{noticeWizard}</Col>
      </Row>
      <Row>
        <Col>{noticePreview}</Col>
      </Row>
    </Container>
  );
};

export default NoticeWizardPageLayout;
