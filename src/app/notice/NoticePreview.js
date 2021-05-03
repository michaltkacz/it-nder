import React from 'react';

import { Container, Row } from 'react-bootstrap';

import Header from './../_global/Header';

import Notice from './Notice';

const NoticePreview = ({ notice }) => {
  return (
    <Container fluid>
      <Header>Notice preview</Header>
      <Notice notice={notice} isPreview />
    </Container>
  );
};

export default NoticePreview;
