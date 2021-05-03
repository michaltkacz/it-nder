import React from 'react';

import { Badge } from 'react-bootstrap';

const Tag = ({ text, onTagClick, secondary }) => {
  return (
    <span
      style={onTagClick && { cursor: 'pointer' }}
      onClick={(e) => {
        if (onTagClick === null) return;
        onTagClick(e, text);
      }}
    >
      <Badge variant={secondary ? 'secondary' : 'primary'}>{text}</Badge>{' '}
    </span>
  );
};

export default Tag;
