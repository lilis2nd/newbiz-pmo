import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';

class Home extends Component {
    render() {
        return (
            <Jumbotron>
                <h1 className="display-3">NewBiz Project Manager</h1>
                <hr className="my-2" />
                <p className="lead">팀 과제관리 시스템입니다. 현재는 작업시간만 추적 가능합니다.</p>
            </Jumbotron>
        )
    }
}

export default Home;