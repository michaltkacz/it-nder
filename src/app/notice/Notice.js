import React, { useState } from 'react';

import { Card, Col, Row, Image, Button } from 'react-bootstrap';

import TagList from './../tag/TagList';
import avatarImage from '../../assets/avatar-placeholder.png';

import NoticeModal from './NoticeModal';

const Notice = ({ notice }) => {
  const [displayModal, setDisplayModal] = useState(false);

  const closeModal = (e) => {
    e?.preventDefault();
    setDisplayModal(false);
  };
  const showModal = (e) => {
    e.preventDefault();
    setDisplayModal(true);
  };

  return (
    <>
      <NoticeModal
        notice={notice}
        displayModal={displayModal}
        closeModal={closeModal}
      />
      <Card className='mb-1'>
        <Card.Header>{notice.title}</Card.Header>
        <Card.Body>
          <Row>
            <Col sm={4} className='d-flex justify-content-center'>
              <Image
                thumbnail
                className=' mb-2'
                style={{
                  minWidth: '100px',
                  maxWidth: '200px',
                  objectFit: 'scale-down',
                }}
                src={avatarImage}
                rounded
              />
            </Col>
            <Col sm={8}>
              <Card.Text>
                {notice.name} {notice.surname}
              </Card.Text>
              <Card.Text>{notice.description}</Card.Text>
            </Col>
          </Row>
        </Card.Body>
        <Card.Footer>
          <Row>
            <Col xs={8} className='text-muted'>
              <TagList
                tagList={notice.tags}
                tagListEmptyText={'No tags specified'}
                onTagClick={null}
                secondary
              />
            </Col>
            <Col xs={4} className='d-flex justify-content-center'>
              <Button
                className='btn btn-primary'
                onClick={(e) => {
                  showModal(e);
                }}
              >
                Contact
              </Button>
            </Col>
          </Row>
        </Card.Footer>
      </Card>
    </>
  );
};

export default Notice;
