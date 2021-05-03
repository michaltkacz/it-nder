import React, { useEffect, useState } from 'react';

import NoticeFilter from '../notice/NoticeFilter';
import NoticeList from '../notice/NoticeList';
import NoticeListSummary from '../notice/NoticeListSummary';

import BrowsePageLayout from './BrowsePageLayout';

const BrowsePage = ({ dbCrud, database }) => {
  const [filteredNoticeList, setFilteredNoticeList] = useState(database);
  const [availableTagsList, setAvailableTagsList] = useState([]);

  useEffect(() => {
    setFilteredNoticeList(database);
  }, [database]);

  useEffect(() => {
    const tags = getAvailableTags(filteredNoticeList);
    setAvailableTagsList(tags);
  }, [filteredNoticeList]);

  const filterNoticeList = (tagFilterList, descriptionFilterString) => {
    const noticeListFilteredByTags = filterNoticeListByTag(tagFilterList);
    const noticeListFilteredByDescription = filterNoticeListByDescription(
      descriptionFilterString
    );

    const filterResultList = new Set(
      [...noticeListFilteredByTags].filter((notice) =>
        noticeListFilteredByDescription.has(notice)
      )
    );

    setFilteredNoticeList(Array.from(filterResultList));
  };

  const filterNoticeListByTag = (tagFilterList) => {
    const allNotices = dbCrud.dbGet();

    if (tagFilterList.length === 0) {
      return new Set(allNotices);
    }

    const newFilteredNoticeList = new Set();
    allNotices.forEach((notice) => {
      let filterOut = false;
      tagFilterList.forEach((tag) => {
        if (!notice.tags.includes(tag)) {
          filterOut = true;
          return;
        }
      });
      if (!filterOut) {
        newFilteredNoticeList.add(notice);
      }
    });

    return newFilteredNoticeList;
  };

  const filterNoticeListByDescription = (descriptionFilterString) => {
    const allNotices = dbCrud.dbGet();

    if (descriptionFilterString === '') {
      return new Set(allNotices);
    }

    const newFilteredNoticeList = new Set();
    allNotices.forEach((notice) => {
      if (notice.description.toLowerCase().includes(descriptionFilterString)) {
        newFilteredNoticeList.add(notice);
      }
    });

    return newFilteredNoticeList;
  };

  const getAvailableTags = (list) => {
    const tagList = new Set();
    list.forEach((notice) => {
      notice.tags.forEach((tag) => {
        tagList.add(tag);
      });
    });
    return Array.from(tagList);
  };

  return (
    <BrowsePageLayout
      noticeFilter={
        <NoticeFilter
          filterNoticeList={filterNoticeList}
          availableTagsList={availableTagsList}
        />
      }
      noticeListSummary={<NoticeListSummary noticeList={filteredNoticeList} />}
      noticeList={
        <NoticeList noticeList={filteredNoticeList} dbCrud={dbCrud} />
      }
    />
  );
};

export default BrowsePage;
