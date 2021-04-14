import React, { useEffect, useState } from 'react';

import { Row, Col, Container, InputGroup, FormControl } from 'react-bootstrap';

import Header from './../page/Header';
import TagList from './../tag/TagList';

const NoticeFilter = ({ filterNoticeList, availableTagList }) => {
  const [tagFilterList, setTagFilterList] = useState([]);
  const [descriptionFilterString, setSescriptionFilterString] = useState('');

  useEffect(() => {
    filterNoticeList(tagFilterList, descriptionFilterString);
  }, [tagFilterList, descriptionFilterString]);

  const pickTag = (e, tagText) => {
    e.preventDefault();

    if (tagText === null) return;
    if (tagFilterList.includes(tagText)) return;
    setTagFilterList([tagText, ...tagFilterList]);
  };

  const removeTag = (e, tagToRemoveText) => {
    e.preventDefault();

    const newTagFilterList = tagFilterList.filter((tag) => {
      return tag !== tagToRemoveText;
    });

    setTagFilterList(newTagFilterList);
  };

  return (
    <Container fluid>
      <Row>
        <Col>
          <Header>Search for notice</Header>
        </Col>
      </Row>
      <Row>
        <Col>
          <TagList
            tagList={tagFilterList}
            tagListEmptyText={'Choose tags to filter results'}
            onTagClick={removeTag}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <TagList
            tagList={availableTagList}
            tagListEmptyText={'No tags available'}
            onTagClick={pickTag}
            secondary
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
