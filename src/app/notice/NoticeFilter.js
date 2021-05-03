import React, { useEffect, useState } from 'react';

import { Row, Col, Container, InputGroup, FormControl } from 'react-bootstrap';

import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';

import Header from '../_global/Header';

const NoticeFilter = ({ filterNoticeList, availableTagsList }) => {
  const [tagActiveFilterList, setTagActiveFilterList] = useState([]);
  const [descriptionFilterString, setSescriptionFilterString] = useState('');

  useEffect(() => {
    filterNoticeList(tagActiveFilterList, descriptionFilterString);
  }, [tagActiveFilterList, descriptionFilterString]);

  return (
    <Container fluid>
      <Row>
        <Col>
          <Header>Search for notice</Header>
        </Col>
      </Row>
      <Row>
        <Col>
          <Typeahead
            id='tags-typeahead'
            multiple
            options={availableTagsList}
            onChange={(selected) => {
              setTagActiveFilterList(selected);
            }}
            selected={tagActiveFilterList}
            placeholder='Choose tags...'
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <InputGroup className='my-2'>
            <InputGroup.Prepend>
              <InputGroup.Text>
                Search in <br /> description
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              as='textarea'
              value={descriptionFilterString}
              onChange={(e) => {
                e.preventDefault();
                setSescriptionFilterString(e.target.value.toLowerCase());
              }}
              aria-label='With textarea'
            />
          </InputGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default NoticeFilter;
