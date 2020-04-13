import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import Header from './Header';
import Home from './Home';
import Summary from './Summary/Summary';
import ProjectCode from './ProjectCode/ProjectCode';
import Timelog from './Timelog/Timelog';
import Member from './Member/Member';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Container className="mt-4">
          <Row>
            <Col>
              <Route path="/">
                <Home />
                <Route path="/summary" component={Summary} />
                <Route path="/pcode" component={ProjectCode} />
                <Route path="/timelog" component={Timelog} />
                <Route path="/member" component={Member} />
              </Route>
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  );
}

export default App;
