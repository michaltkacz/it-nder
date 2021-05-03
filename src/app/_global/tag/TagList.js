import React from 'react';

import Tag from './Tag';

const TagList = ({ tagList, tagListEmptyText, onTagClick, secondary }) => {
  return !tagList || tagList?.length === 0
    ? tagListEmptyText
    : tagList?.map((text, index) => {
        return (
          <Tag
            key={index}
            text={text}
            onTagClick={onTagClick}
            secondary={secondary}
          />
        );
      });
};

export default TagList;
