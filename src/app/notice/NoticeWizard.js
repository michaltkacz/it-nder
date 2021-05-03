import React, { useEffect, useState } from 'react';

import { Form, Col, Button, Container } from 'react-bootstrap';

import Header from '../_global/Header';
import TagWizard from '../_global/tag/TagWizard';

const NoticeWizard = ({
  previewNotice,
  submitNotice,
  noticeToEdit,
  header,
}) => {
  const [name, setName] = useState(noticeToEdit?.name || '');
  const [surname, setSurname] = useState(noticeToEdit?.surname || '');
  const [title, setTitle] = useState(noticeToEdit?.title || '');
  const [description, setDescription] = useState(
    noticeToEdit?.description || ''
  );
  const [tags, setTags] = useState(noticeToEdit?.tags || []);

  useEffect(() => {
    previewNotice && previewNotice({ name, surname, title, description, tags });
  }, [name, surname, title, description, tags]);

  const onDataChange = (e, setData) => {
    e.preventDefault();

    const data = e.target.value;
    if (data === null) return;
    setData(data);
  };

  const sumbitForm = (e) => {
    e.preventDefault();
    const notice = {
      id: noticeToEdit?.id || null,
      name,
      surname,
      title,
      description,
      tags,
    };
    submitNotice(notice);
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
      <Form className='mb-3'>
        <Header>{header}</Header>

        <Form.Row>
          <Form.Group as={Col} xs={12} md={4} controlId='noticeFormName'>
            <Form.Label>Name</Form.Label>
            <Form.Control
              required
              type='text'
              placeholder='Enter name'
              value={name}
              onChange={(e) => {
                onDataChange(e, setName);
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
                onDataChange(e, setSurname);
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
                onDataChange(e, setTitle);
              }}
            />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} xs={12} sm={6} controlId='noticeFormDescription'>
            <Form.Label>Description</Form.Label>
            <Form.Control
              as='textarea'
              required
              rows={3}
              placeholder='Write your description'
              value={description}
              onChange={(e) => {
                onDataChange(e, setDescription);
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
    </Container>
  );
};

export default NoticeWizard;
