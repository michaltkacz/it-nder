import React, { useState } from 'react';

import { InputGroup, FormControl, Button, Row, Col } from 'react-bootstrap';

import TagList from './TagList';

const TagWizard = ({ tagList, setTagList }) => {
  const [tagName, setTagName] = useState('');

  const addTag = (e) => {
    e.preventDefault();

    if (tagName === null || tagName === '') return;
    if (tagList.includes(tagName)) return;

    setTagList([...tagList, tagName]);
    setTagName('');
  };

  const removeTag = (e, tagToRemoveText) => {
    e.preventDefault();

    const newTagList = tagList.filter((tag) => {
      return tag !== tagToRemoveText;
    });
    setTagList(newTagList);
  };

  return (
    <div className='mb-3'>
      <Row noGutters>
        <Col>
          <label htmlFor='notice-form-tag'>Tags</label>
          <InputGroup className='mb-3'>
            <FormControl
              id='notice-form-tag'
              placeholder='Enter tag'
              aria-label='Enter tag'
              aria-describedby='notice-form-tag'
              value={tagName}
              onChange={(e) => {
                setTagName(e.target.value);
              }}
              onKeyDown={(e) => {
                if (e.keyCode === 13) addTag(e);
              }}
            />
            <InputGroup.Append>
              <Button
                variant='outline-secondary'
                type='button'
                onClick={(e) => {
                  addTag(e);
                }}
              >
                Add
              </Button>
            </InputGroup.Append>
          </InputGroup>
        </Col>
      </Row>
      <Row noGutters>
        <Col>
          <TagList
            tagList={tagList}
            tagListEmptyText={'Currently no tags'}
            onTagClick={removeTag}
          />
        </Col>
      </Row>
    </div>
  );
};

export default TagWizard;
