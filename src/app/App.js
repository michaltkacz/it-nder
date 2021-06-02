import { React } from 'react';

import {
  Redirect,
  Route,
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';

import { Col, Container, Row } from 'react-bootstrap';

import { AuthProvider } from '../contexts/AuthContext';

import NavigationBar from './_global/NavigationBar';
import PrivateRoute from './_global/PrivateRoute';
import BrowsePage from './browsePage/BrowsePage';
import HomePage from './homePage/HomePage.js';
import LoginPage from './loginPage/LoginPage';
import MyNoticesPage from './myNoticesPage/MyNoticesPage';
import RegisterPage from './registerPage/RegisterPage';

function App() {
  return (
    <AuthProvider>
      <Container fluid className='p-0 h-100'>
        <Router>
          <Row noGutters>
            <Col>
              <NavigationBar />
            </Col>
          </Row>
          <Row
            noGutters
            style={{ height: 'calc(100% - 56px)' }} //junky hotfix, however navbar should always have 56 px of height
          >
            <Col
              className='d-flex align-items-center justify-content-center'
              style={{ backgroundColor: 'lightgray' }}
            >
              <Switch>
                <Route exact path='/'>
                  <HomePage />
                </Route>
                <PrivateRoute exact path='/browse'>
                  <BrowsePage />
                </PrivateRoute>
                <PrivateRoute exact path='/my-notices'>
                  <MyNoticesPage />,
                </PrivateRoute>
                <Route exact path='/login'>
                  <LoginPage />
                </Route>
                <Route exact path='/register'>
                  <RegisterPage />
                </Route>
                <Route exact path='*'>
                  <Redirect to='/' />
                </Route>
              </Switch>
            </Col>
          </Row>
        </Router>
      </Container>
    </AuthProvider>
  );
}

export default App;
