import React, { Component } from 'react';
import { Table, Col, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
// Reference site: https://forest71.tistory.com/187

class ProjectCode extends Component {

    state = {
        maxNo: 3,
        codes: [
            {
                codeNo: 1,
                code: 'A20-001',
                codeClient: '내부',
                codeTitle: '나라장터(조달청) 공고 조회/검토 프로세스',
                codePeriod: '지속',
                codePIC: '너나유'
            },
            {
                codeNo: 2,
                code: 'A20-001',
                codeClient: '내부',
                codeTitle: '나라장터(조달청) 공고 조회/검토 프로세스',
                codePeriod: '지속',
                codePIC: '너나유'
            }
        ]
    }

    handleSaveData = (data) => {
        this.setState({
            codes: this.state.codes.concat({ codeNo: this.state.maxNo++, ...data })
        });
    }

    handleRemove = (codeNo) => {
        this.setState({
            codes: this.state.codes.filter(row => row.codeNo !== codeNo)
        });
    }

    render() {

        const { codes } = this.state;

        return (
            <div>
                <BoardForm onSaveData={this.handleSaveData} />
                <Table bordered striped hover responsive size="sm" className="w-100 text-center mt-4">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Code</th>
                            <th>Client</th>
                            <th>Title</th>
                            <th>Period</th>
                            <th>PIC</th>
                            <th>Del.</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            codes.map(row =>
                                (<CodeTable key={row.codeNo} row={row} OnRemove={this.handleRemove} onSelectRow={this.handleSelectRow} />)
                            )
                        }
                    </tbody>
                </Table>
            </div>
        );
    }
}

class CodeTable extends Component {

    handleRemove = () => {
        const { row, OnRemove } = this.props;
        OnRemove(row.codeNo);
    }

    render() {
        return (
            <tr>
                <td>{this.props.row.codeNo}</td>
                <td>{this.props.row.code}</td>
                <td>{this.props.row.codeClient}</td>
                <td>{this.props.row.codeTitle}</td>
                <td>{this.props.row.codePeriod}</td>
                <td>{this.props.row.codePIC}</td>
                <td><Button color="danger p-0" size="sm" block onClick={this.handleRemove}>X</Button></td>
            </tr>
        );
    }
}

class BoardForm extends Component {
    state = {}

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onSaveData(this.state);
        this.setState({});
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Row form>
                    <Col md={4}>
                        <Input type="text" name="code" id="code" placeholder="코드번호" onChange={this.handleChange} />
                    </Col>
                    <Col md={4}>
                        <Input type="text" name="codeClient" id="codeClient" placeholder="발주처" onChange={this.handleChange} />
                    </Col>
                    <Col md={4}>
                        <Input type="text" name="codeTitle" id="codeTitle" placeholder="과제명" onChange={this.handleChange} />
                    </Col>
                </Row>
                <Row className="mt-2" form>
                    <Col md={4}>
                        <Input type="text" name="codePeriod" id="codePeriod" placeholder="일정" onChange={this.handleChange} />
                    </Col>
                    <Col md={4}>
                        <Input type="text" name="codePIC" id="codePIC" placeholder="담당자" onChange={this.handleChange} />
                    </Col>
                    <Col md={4}>
                        <Button type="submit" color="primary" outline block>SAVE</Button>
                    </Col>
                </Row>
            </Form>
        );
    }
}

export default ProjectCode;