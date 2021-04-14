import React, { useEffect, useState } from 'react';

import NoticeCreator from '../notice/NoticeCreator';
import NoticeFilter from '../notice/NoticeFilter';
import NoticeList from '../notice/NoticeList';
import NoticeListSummary from '../notice/NoticeListSummary';
import stringToList from './../utils/stringToList';

import NavigationBar from './NavigationBar';
import PageLayout from './PageLayout';

const data = [
  {
    name: 'Jan',
    surname: 'Kowalski',
    title: 'React Front-End Project',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at tortor semper, tincidunt quam vel, dapibus dui. Cras faucibus facilisis enim, at finibus ex posuere quis. Maecenas nec est diam. Sed semper placerat purus id dictum. Nulla egestas tortor eget volutpat ultrices. Cras id est est. Vivamus sed velit eros. Morbi tristique justo a porta egestas.',
    tags: ['react', 'js', 'html', 'css'],
  },
  {
    name: 'Anna',
    surname: 'Nowak',
    title: 'Angular full-stack web app',
    description:
      'Nulla mollis sed risus sed volutpat. Fusce sit amet gravida ligula, in convallis tellus. Phasellus in lorem ut tortor aliquet interdum at a arcu. Aliquam faucibus tellus malesuada, dapibus diam at, sollicitudin neque. Curabitur dictum neque velit, vitae sollicitudin est scelerisque et. Cras venenatis sollicitudin lacus, sed finibus neque faucibus vel. Morbi lacinia lobortis nulla, eu posuere lorem mattis at. Ut consectetur malesuada nibh, nec fringilla massa facilisis ut',
    tags: ['angular', 'typescript', 'dotnet', 'azure'],
  },
  {
    name: 'Jarek',
    surname: 'Pieczarek',
    title: 'Backend server with Node.js',
    description:
      'In non tempus odio. Nulla eget felis urna. Nullam condimentum finibus elementum. Vivamus mauris eros, accumsan vel felis sed, ullamcorper tristique leo. Nunc ut leo a massa gravida ornare. Nunc ut eros posuere, euismod felis at, posuere velit. Quisque a dui lectus.',
    tags: ['nodejs', 'js', 'express', 'restapi'],
  },
];

function MainPage() {
  const [noticeList, setNoticeList] = useState(data);
  const [filteredNoticeList, setFilteredNoticeList] = useState(data);

  useEffect(() => {
    setFilteredNoticeList(noticeList);
  }, [noticeList]);

  const addNoticeToList = (newNotice) => {
    setNoticeList([newNotice, ...noticeList]);
  };

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
    if (tagFilterList.length === 0) {
      return new Set(noticeList);
    }

    const newFilteredNoticeList = new Set();
    noticeList.forEach((notice) => {
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
    if (descriptionFilterString === '') {
      return new Set(noticeList);
    }

    const newFilteredNoticeList = new Set();
    noticeList.forEach((notice) => {
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
    <PageLayout
      navigationBar={<NavigationBar />}
      noticeFilter={
        <NoticeFilter
          filterNoticeList={filterNoticeList}
          availableTagList={getAvailableTags(filteredNoticeList)}
        />
      }
      noticeListSummary={<NoticeListSummary noticeList={filteredNoticeList} />}
      noticeList={<NoticeList noticeList={filteredNoticeList} />}
      noticeCreator={<NoticeCreator addNoticeToList={addNoticeToList} />}
    />
  );
}

export default MainPage;
