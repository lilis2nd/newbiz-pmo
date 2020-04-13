import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Summary from './Summary/Summary';
import ProjectCode from './ProjectCode/ProjectCode';
import Timelog from './Timelog/Timelog';

export default () => (
    <Router>
        <Route path="/summary" component={Summary} />
        <Route path="/pcode" component={ProjectCode} />
        <Route path="/timelog" component={Timelog} />
    </Router>
)