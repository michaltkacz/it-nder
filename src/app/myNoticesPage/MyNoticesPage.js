import React, { useEffect, useState } from 'react';

import { Col, Container, Row } from 'react-bootstrap';

import { database } from '../../firebase';
import NoticeList from '../notice/NoticeList';
import NoticeWizard from '../notice/NoticeWizard';
import { useAuth } from '../../contexts/AuthContext';

const MyNoticesPage = () => {
  const [myNoticeList, setMyNoticeList] = useState([]);
  const { currentUser } = useAuth();

  useEffect(() => {
    getFromDatabase();
    // initDatabase();
  }, []);

  const pushToDatabase = (data) => {
    const noticesRef = database.ref('notices');
    noticesRef.push(data);
  };

  // const initDatabase = () => {
  //   const initialData = [
  //     {
  //       name: 'Jan',
  //       surname: 'Kowalski',
  //       email: 'jankowalski@email.com',
  //       title: 'React Front-End Project',
  //       description:
  //         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at tortor semper, tincidunt quam vel, dapibus dui. Cras faucibus facilisis enim, at finibus ex posuere quis. Maecenas nec est diam. Sed semper placerat purus id dictum. Nulla egestas tortor eget volutpat ultrices. Cras id est est. Vivamus sed velit eros. Morbi tristique justo a porta egestas.',
  //       tags: ['react', 'js', 'html', 'css'],
  //     },
  //     {
  //       name: 'Anna',
  //       surname: 'Nowak',
  //       email: 'anna@email.com',
  //       title: 'Angular full-stack web app',
  //       description:
  //         'Nulla mollis sed risus sed volutpat. Fusce sit amet gravida ligula, in convallis tellus. Phasellus in lorem ut tortor aliquet interdum at a arcu. Aliquam faucibus tellus malesuada, dapibus diam at, sollicitudin neque. Curabitur dictum neque velit, vitae sollicitudin est scelerisque et. Cras venenatis sollicitudin lacus, sed finibus neque faucibus vel. Morbi lacinia lobortis nulla, eu posuere lorem mattis at. Ut consectetur malesuada nibh, nec fringilla massa facilisis ut',
  //       tags: ['angular', 'typescript', 'dotnet', 'azure'],
  //     },
  //     {
  //       name: 'Jarek',
  //       surname: 'Pieczarek',
  //       email: 'pieczarka@email.com',
  //       title: 'Backend server with Node.js',
  //       description:
  //         'In non tempus odio. Nulla eget felis urna. Nullam condimentum finibus elementum. Vivamus mauris eros, accumsan vel felis sed, ullamcorper tristique leo. Nunc ut leo a massa gravida ornare. Nunc ut eros posuere, euismod felis at, posuere velit. Quisque a dui lectus.',
  //       tags: ['nodejs', 'js', 'express', 'restapi'],
  //     },
  //   ];
  //   pushToDatabase(initialData[0]);
  //   pushToDatabase(initialData[1]);
  //   pushToDatabase(initialData[2]);
  // };

  const getFromDatabase = () => {
    const noticesRef = database.ref('notices');
    noticesRef.on('value', (snapshot) => {
      const notices = snapshot.val();
      const newMyNoticeList = [];
      for (let id in notices) {
        if (notices[id].email === currentUser.email) {
          newMyNoticeList.push({ id, ...notices[id] });
        }
      }
      setMyNoticeList(newMyNoticeList);
    });
  };

  return (
    <Container className='h-100 px-3 py-2' style={{ background: 'white' }}>
      <Row>
        <Col className='py-3'>
          <NoticeWizard
            submitNotice={pushToDatabase}
            header={'Add new notice'}
          />
        </Col>
      </Row>
      <Row>
        <Col className='py-3'>
          <NoticeList
            title='My active notices'
            noticeList={myNoticeList}
            isPreview={true}
            isEditable={true}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default MyNoticesPage;
