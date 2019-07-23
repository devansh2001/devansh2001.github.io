import React, {Component} from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Box from './Box';

class Skills extends Component {
  render() {
    return (
        <div id={'Skills'} className={'main skills'}>
          <h1>SKILLS</h1>
          <Container>
          <Row>
            <Col sm='4'>
              <Box data = {['Java', 'C++', 'Python', 'HTML', 'CSS', 'JavaScript (+ ReactJS)', 'Database Management - MySQL, PostgresSQL, NoSQL', 'LaTeX']} heading = {'Languages'} />
            </Col>
            <Col sm='4'>
              <Box data = {['Elastic Search', 'Kibana' , 'Docker', 'Android Application Development']} heading = {'Technologies'} />
            </Col>
            <Col sm='4'>
              <Box data = {['IntelliJ IDEA', 'Sublime Text', 'Android Studio', 'Git/GitHub/GitLab', 'BitBucket', 'Jira']}  heading = {'Tools'} />
            </Col>
          </Row>
          </Container>
        </div>
    );
  }
}

export default Skills;
