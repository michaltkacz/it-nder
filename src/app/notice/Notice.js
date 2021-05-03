import React, { useState } from 'react';

import {
  Card,
  Col,
  Row,
  Image,
  Button,
  Dropdown,
  DropdownButton,
} from 'react-bootstrap';

import avatarImage from '../../assets/avatar-placeholder.png';
import TagList from '../_global/tag/TagList';

import NoticeEditModal from './NoticeEditModal';
import NoticeModal from './NoticeModal';

const Notice = ({ notice, dbCrud, isPreview }) => {
  const [displayModal, setDisplayModal] = useState(false);
  const [displayEditModal, setDisplayEditModal] = useState(false);

  const closeModal = (e) => {
    e?.preventDefault();
    setDisplayModal(false);
  };
  const showModal = (e) => {
    e.preventDefault();
    setDisplayModal(true);
  };

  const closeEditModal = (e) => {
    e?.preventDefault();
    setDisplayEditModal(false);
  };
  const showEditModal = (e) => {
    e.preventDefault();
    setDisplayEditModal(true);
  };

  return (
    <>
      <NoticeEditModal
        notice={notice}
        displayModal={displayEditModal}
        closeModal={closeEditModal}
        dbCrud={dbCrud}
      />
      {!isPreview && (
        <NoticeModal
          notice={notice}
          displayModal={displayModal}
          closeModal={closeModal}
        />
      )}
      <Card className='mb-1'>
        <Card.Header>
          <Row noGutters>
            <Col xs={11}>{notice?.title}</Col>
            <Col xs={1} className='d-flex justify-content-center'>
              {!isPreview && (
                <DropdownButton variant='outline-secondary' size='sm' title=''>
                  <Dropdown.Item
                    onClick={(e) => {
                      showEditModal(e);
                    }}
                  >
                    Edit
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => {
                      dbCrud.dbDelete(notice.id);
                    }}
                  >
                    Delete
                  </Dropdown.Item>
                </DropdownButton>
              )}
            </Col>
          </Row>
        </Card.Header>
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
                {notice?.name} {notice?.surname}
              </Card.Text>
              <Card.Text>{notice?.description}</Card.Text>
            </Col>
          </Row>
        </Card.Body>
        <Card.Footer>
          <Row>
            <Col xs={8} className='text-muted'>
              <TagList
                tagList={notice?.tags}
                tagListEmptyText={'No tags specified'}
                onTagClick={null}
                secondary
              />
            </Col>
            <Col xs={4} className='d-flex justify-content-center'>
              {!isPreview && (
                <Button
                  className='btn btn-primary'
                  onClick={(e) => {
                    showModal(e);
                  }}
                >
                  Contact
                </Button>
              )}
            </Col>
          </Row>
        </Card.Footer>
      </Card>
    </>
  );
};

export default Notice;
