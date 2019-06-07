import React, {Component} from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Skills extends Component {
  render() {
    return (
        <div>
          <Container>
            <Row>
              <Col>
                <h3>Languages</h3>
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
                  <li>Elasticsearch</li>
                  <li>Kibana</li>
                  <li>Docker</li>
                  <li>Kubernetes</li>
                  <li>Android Studio</li>
                  <li>Bootstrap</li>
                </ul>
              </Col>
            </Row>
          </Container>
        </div>
    );
  }
}

export default Skills;
