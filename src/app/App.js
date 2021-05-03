import { React, useEffect, useState } from 'react';

import { v4 as uuidv4 } from 'uuid';

import { Redirect } from 'react-router';

import AppLayout from './AppLayout';
import initialData from './initialData';

import NavigationBar from './_global/NavigationBar';
import BrowsePage from './browsePage/BrowsePage';
import HomePage from './homePage/HomePage.js';
import NoticeWizardPage from './noticeWizardPage/NoticeWizardPage';

function App() {
  const [database, setDatabase] = useState(initialData);

  const dbCrud = {
    dbGet: () => database,
    dbPost: (record) => setDatabase([...database, { id: uuidv4(), ...record }]),
    dbPut: (record) => {
      console.log(record);
      const newDatabase = database.filter((r) => r.id !== record.id);
      setDatabase([...newDatabase, record]);
    },
    dbDelete: (id) => {
      const newDatabase = database.filter((r) => r.id !== id);
      setDatabase([...newDatabase]);
    },
  };

  useEffect(() => {
    console.log(database);
  }, [database]);

  return (
    <AppLayout>
      {{
        navbar: <NavigationBar />,
        pages: [
          { component: <HomePage />, route: '/it-inder' },
          {
            component: <BrowsePage dbCrud={dbCrud} database={database} />,
            route: '/browse',
          },
          {
            component: <NoticeWizardPage dbCrud={dbCrud} />,
            route: '/add',
          },
          { component: <Redirect to='/it-inder' />, route: '*' },
        ],
      }}
    </AppLayout>
  );
}

export default App;
