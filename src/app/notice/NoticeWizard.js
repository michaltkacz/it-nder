import React, { useState } from 'react';

import { Form, Col, Button, Container, Row } from 'react-bootstrap';

import { useAuth } from '../../contexts/AuthContext';
import TagWizard from '../_global/tag/TagWizard';

import Notice from './Notice';

const NoticeWizard = ({ submitNotice, noticeToEdit, header }) => {
  const [name, setName] = useState(noticeToEdit?.name || '');
  const [surname, setSurname] = useState(noticeToEdit?.surname || '');
  const [title, setTitle] = useState(noticeToEdit?.title || '');
  const [description, setDescription] = useState(
    noticeToEdit?.description || ''
  );
  const [tags, setTags] = useState(noticeToEdit?.tags || []);
  const { currentUser } = useAuth();

  const sumbitForm = (e) => {
    e.preventDefault();
    const notice = {
      email: currentUser?.email,
      name,
      surname,
      title,
      description,
      tags,
    };
    noticeToEdit
      ? submitNotice({ id: noticeToEdit.id, ...notice })
      : submitNotice(notice);
    clearForm();
  };

  const clearForm = () => {
    setName('');
    setSurname('');
    setTitle('');
    setDescription('');
    setTags([]);
  };

  return (
    <Container fluid>
      <Row>
        <Col>
          <Form className='mb-3'>
            <h4>{header}</h4>
            <Form.Row>
              <Form.Group as={Col} xs={12} md={4} controlId='noticeFormName'>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  required
                  type='text'
                  placeholder='Enter name'
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </Form.Group>
              <Form.Group as={Col} xs={12} md={4} controlId='noticeFormSurname'>
                <Form.Label>Surname</Form.Label>
                <Form.Control
                  required
                  type='text'
                  placeholder='Enter surname'
                  value={surname}
                  onChange={(e) => {
                    setSurname(e.target.value);
                  }}
                />
              </Form.Group>
              <Form.Group as={Col} xs={12} md={4} controlId='noticeFormTitle'>
                <Form.Label>Title</Form.Label>
                <Form.Control
                  required
                  type='text'
                  placeholder='Enter title'
                  value={title}
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group
                as={Col}
                xs={12}
                sm={6}
                controlId='noticeFormDescription'
              >
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as='textarea'
                  required
                  rows={3}
                  placeholder='Write your description'
                  value={description}
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                />
              </Form.Group>
              <Col xs={12} sm={6}>
                <TagWizard tagList={tags} setTagList={setTags} />
              </Col>
            </Form.Row>
            <Form.Row>
              <Col className='d-flex justify-content-center'>
                <Button
                  type='submit'
                  onClick={(e) => {
                    sumbitForm(e);
                  }}
                >
                  Submit
                </Button>
              </Col>
            </Form.Row>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col>
          <Notice
            notice={{
              email: currentUser?.email,
              name,
              surname,
              title,
              description,
              tags,
            }}
            isPreview={true}
            isEditable={false}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default NoticeWizard;
