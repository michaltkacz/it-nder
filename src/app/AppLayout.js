import { React } from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Container, Row, Col } from 'react-bootstrap';

const AppLayout = ({ children }) => {
  const { navbar, pages } = children;
  return (
    <Container fluid className='p-0 h-100'>
      <Router basename={process.env.PUBLIC_URL}>
        <Row noGutters>
          <Col>{navbar}</Col>
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
              {pages.map((page, index) => {
                return (
                  <Route key={index} exact path={page.route}>
                    {page.component}
                  </Route>
                );
              })}
            </Switch>
          </Col>
        </Row>
      </Router>
    </Container>
  );
};

export default AppLayout;
