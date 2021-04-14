import React, { useState } from 'react';

import { Form, Col, Row, Button } from 'react-bootstrap';

import Header from '../page/Header';
import TagCreator from '../tag/TagCreator';

const NoticeCreator = ({ addNoticeToList }) => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState([]);

  const changeData = (e, setData) => {
    e.preventDefault();

    const data = e.target.value;
    if (data === null) return;
    setData(data);
  };

  const sumbitForm = (e) => {
    e.preventDefault();
    const notice = {
      name,
      surname,
      title,
      description,
      tags,
    };
    addNoticeToList(notice);
    setName('');
    setSurname('');
    setTitle('');
    setDescription('');
    setTags([]);
  };

  return (
    <Form>
      <Header>Add new notice</Header>

      <Form.Group as={Row} controlId='noticeFormName'>
        <Form.Label column lg={4}>
          Name
        </Form.Label>
        <Col>
          <Form.Control
            required
            type='text'
            placeholder='Enter name'
            value={name}
            onChange={(e) => {
              changeData(e, setName);
            }}
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId='noticeFormSurname'>
        <Form.Label column lg={4}>
          Surname
        </Form.Label>
        <Col>
          <Form.Control
            required
            type='text'
            placeholder='Enter surname'
            value={surname}
            onChange={(e) => {
              changeData(e, setSurname);
            }}
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId='noticeFormTitle'>
        <Form.Label column lg={4}>
          Title
        </Form.Label>
        <Col>
          <Form.Control
            required
            type='text'
            placeholder='Enter title'
            value={title}
            onChange={(e) => {
              changeData(e, setTitle);
            }}
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId='noticeFormDescription'>
        <Col>
          <Form.Label>Description</Form.Label>
          <Form.Control
            as='textarea'
            required
            rows={3}
            placeholder='Write your description'
            value={description}
            onChange={(e) => {
              changeData(e, setDescription);
            }}
          />
        </Col>
      </Form.Group>

      <TagCreator tagList={tags} setTagList={setTags} />

      <Row>
        <Col className='d-flex justify-content-end'>
          <Button
            className='btn btn-primary'
            type='submit'
            onClick={(e) => {
              sumbitForm(e);
            }}
          >
            Submit
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default NoticeCreator;
