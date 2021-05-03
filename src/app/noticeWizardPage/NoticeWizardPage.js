import React, { useState } from 'react';

import NoticePreview from './../notice/NoticePreview';
import NoticeWizard from './../notice/NoticeWizard';

import NoticeWizardPageLayout from './NoticeWizardPageLayout';

const NoticeWizardPage = ({ dbCrud }) => {
  const [notice, setNotice] = useState({});

  const previewNotice = (notice) => {
    setNotice(notice);
  };

  const submitNotice = (notice) => {
    dbCrud.dbPost(notice);
  };

  return (
    <NoticeWizardPageLayout
      noticeWizard={
        <NoticeWizard
          header={'Add new notice'}
          previewNotice={previewNotice}
          submitNotice={submitNotice}
        />
      }
      noticePreview={<NoticePreview notice={notice} />}
    />
  );
};

export default NoticeWizardPage;
