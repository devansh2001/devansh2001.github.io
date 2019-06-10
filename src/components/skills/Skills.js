import React, {Component} from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";

class Skills extends Component {
  render() {
    return (
        <div id={'Skills'} className={'main'}>
          <h1>SKILLS</h1>
          <Container>
            <Row>
              <Col>
                <h3>Languages</h3>
                {/*<ListGroup variant="flush">*/}
                {/*  <ListGroup.Item>Java</ListGroup.Item>*/}
                {/*  <ListGroup.Item>C++</ListGroup.Item>*/}
                {/*  <ListGroup.Item>Python</ListGroup.Item>*/}
                {/*  <ListGroup.Item>HTML</ListGroup.Item>*/}
                {/*  <ListGroup.Item>CSS</ListGroup.Item>*/}
                {/*  <ListGroup.Item>JavaScript (+ ReactJS)</ListGroup.Item>*/}
                {/*  <ListGroup.Item>Database Management  - MySQL, PostgresSQL, NoSQL</ListGroup.Item>*/}
                {/*  <ListGroup.Item>LaTeX</ListGroup.Item>*/}
                {/*</ListGroup>*/}
                <ul>
                  <li>Java</li>
                  <li>C++</li>
                  <li>Python</li>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript (+ ReactJS)</li>
                  <li>Database Management - MySQL, PostgresSQL, NoSQL</li>
                  <li>LaTeX</li>
                </ul>
              </Col>
              <Col>
                <h3>Technologies</h3>
                <ul>
                  <li>ElasticSearch</li>
                  <li>Kibana</li>
                  <li>Docker</li>
                  <li>Kubernetes</li>
                </ul>
              </Col>
              <Col>
                <h3>Tools</h3>
                <ul>
                  <li>IntelliJ IDEA</li>
                  <li>Sublime Text</li>
                  <li>Android Studio</li>
                  <li>Git/GitHub/GitLab</li>
                  <li>WebStorm</li>
                  <li>BitBucket</li>
                  <li>Atlassian/Jira</li>
                </ul>
              </Col>
            </Row>
          </Container>
        </div>
    );
  }
}

export default Skills;
