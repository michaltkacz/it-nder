import React, { useEffect, useState } from 'react';

import { Col, Container, Row } from 'react-bootstrap';

import { database } from '../../firebase';
import NoticeFilter from '../notice/NoticeFilter';
import NoticeList from '../notice/NoticeList';
import NoticeListSummary from '../notice/NoticeListSummary';

const BrowsePage = () => {
  const [noticeList, setNoticeList] = useState([]);
  const [noticeFilteredList, setNoticeFilteredList] = useState([]);
  const [descriptionFilter, setDescriptionFilter] = useState('');
  const [tagFilter, setTagFilter] = useState([]);
  const [availableTags, setAvailableTags] = useState([]);

  useEffect(() => {
    getFromDatabase();
  }, []);

  useEffect(() => {
    if (!noticeList) return;

    if (!descriptionFilter && tagFilter.length === 0) {
      setNoticeFilteredList(noticeList);
      return;
    }

    const newNoticeList = noticeList.filter((notice) => {
      // const foundTag = notice.tags.some((tag) => tagFilter.indexOf(tag) >= 0);
      const foundAllTags = tagFilter.every(
        (tag) => notice.tags.indexOf(tag) >= 0
      );

      const foundDescription = notice.description
        .toLowerCase()
        .includes(descriptionFilter);
      return foundAllTags && foundDescription;
    });
    setNoticeFilteredList(newNoticeList);
  }, [noticeList, descriptionFilter, tagFilter]);

  useEffect(() => {
    if (!noticeFilteredList) return [];
    const tags = new Set();
    noticeFilteredList.forEach((notice) => {
      notice?.tags.forEach((tag) => tags.add(tag));
    });
    setAvailableTags(Array.from(tags));
  }, [noticeFilteredList]);

  const getFromDatabase = () => {
    const noticesRef = database.ref('notices');
    noticesRef.on('value', (snapshot) => {
      const notices = snapshot.val();
      const newNoticeList = [];
      for (let id in notices) {
        newNoticeList.push({ id, ...notices[id] });
      }
      setNoticeList(newNoticeList);
      setNoticeFilteredList(newNoticeList);
    });
  };

  return (
    <Container className='h-100 px-3 py-2' style={{ background: 'white' }}>
      <Row>
        <Col lg={8}>
          <NoticeFilter
            applyDescriptionFilter={setDescriptionFilter}
            applyTagFilter={setTagFilter}
            availableTags={availableTags}
          />
        </Col>
        <Col lg={4}>
          <NoticeListSummary noticeList={noticeFilteredList} />
        </Col>
      </Row>
      <Row>
        <Col className='py-3'>
          <NoticeList
            title='List of active notices'
            noticeList={noticeFilteredList}
            isPreview={false}
            isEditable={false}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default BrowsePage;
