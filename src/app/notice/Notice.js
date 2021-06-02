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

import { database } from '../../firebase';
import avatarImage from '../../assets/avatar-placeholder.png';
import TagList from '../_global/tag/TagList';

import NoticeEditModal from './NoticeEditModal';
import NoticeMessageModal from './NoticeMessageModal';

const Notice = ({ notice, isPreview, isEditable }) => {
  const [displayModal, setDisplayModal] = useState(false);
  const [displayEditModal, setDisplayEditModal] = useState(false);

  const closeModal = (e) => {
    e?.preventDefault();
    setDisplayModal(false);
  };
  const showModal = (e) => {
    e?.preventDefault();
    setDisplayModal(true);
  };

  const closeEditModal = (e) => {
    e?.preventDefault();
    setDisplayEditModal(false);
  };
  const showEditModal = (e) => {
    e?.preventDefault();
    setDisplayEditModal(true);
  };

  const deleteFromDatabase = () => {
    const noticesRef = database.ref('notices').child(notice.id);
    noticesRef.remove();
  };

  return (
    <>
      {isEditable && (
        <NoticeEditModal
          notice={notice}
          displayModal={displayEditModal}
          closeModal={closeEditModal}
        />
      )}
      {!isPreview && (
        <NoticeMessageModal
          notice={notice}
          displayModal={displayModal}
          closeModal={closeModal}
        />
      )}
      <Card className='mb-1'>
        <Card.Header>
          <Row noGutters>
            <Col xs={11}>{notice?.title || 'title'}</Col>
            <Col xs={1} className='d-flex justify-content-center'>
              {isEditable && (
                <DropdownButton variant='outline-secondary' size='sm' title=''>
                  <Dropdown.Item
                    onClick={(e) => {
                      showEditModal(e);
                    }}
                  >
                    Edit
                  </Dropdown.Item>
                  <Dropdown.Item onClick={deleteFromDatabase}>
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
                {notice?.name || 'name'} {notice?.surname || 'surname'} |{' '}
                {notice?.email || 'email'}
              </Card.Text>
              <Card.Text>{notice?.description || 'description'}</Card.Text>
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
