import React, { useEffect, useState } from 'react';

import { Row, Col, Container, InputGroup, FormControl } from 'react-bootstrap';

import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';

const NoticeFilter = ({
  availableTags,
  applyDescriptionFilter,
  applyTagFilter,
}) => {
  const [descriptionFilterString, setDescriptionFilterString] = useState('');
  const [tagActiveFilterList, setTagActiveFilterList] = useState([]);

  useEffect(() => {
    applyDescriptionFilter(descriptionFilterString);
    applyTagFilter(tagActiveFilterList);
  }, [tagActiveFilterList, descriptionFilterString]);

  return (
    <Container fluid>
      <Row>
        <Col>
          <h4>Search for notice</h4>
        </Col>
      </Row>
      <Row>
        <Col>
          <Typeahead
            id='tags-typeahead'
            multiple
            options={availableTags || []}
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
              value={descriptionFilterString || ''}
              onChange={(e) => {
                e.preventDefault();
                setDescriptionFilterString(e.target.value.toLowerCase());
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
