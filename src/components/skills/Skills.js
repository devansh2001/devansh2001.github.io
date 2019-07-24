import React, {Component} from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Box from './Box';
import List from '@material-ui/core/List';
import ListItem from'@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import FolderIcon from '@material-ui/icons/Folder';
import Avatar from '@material-ui/core/Avatar';
import { FaPython, FaJava, FaLaptopCode, FaHtml5, FaCss3, FaReact, FaDatabase, FaSearch, FaSearchengin, FaChartLine, FaDocker, FaAndroid, FaCode, FaCodeBranch, FaBitbucket, FaJira } from 'react-icons/fa';


class Skills extends Component {
  render() {
    return (
        <div id={'Skills'} className={'main skills'}>
          <h1>SKILLS</h1>
          <Container>
            <Row>
              <Col>
                <List>
                    <h3 className = 'skills-header'>Languages</h3>
                    <ListItem>
                      <ListItemAvatar>
                          <Avatar>
                            <FaJava />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                          primary="Java"
                        />
                    </ListItem>
                    <ListItem>
                      <ListItemAvatar>
                          <Avatar>
                            <FaLaptopCode />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                          primary="C++"
                        />
                    </ListItem>
                    <ListItem>
                      <ListItemAvatar>
                          <Avatar>
                            <FaPython />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                          primary="Python"
                        />
                    </ListItem>
                    <ListItem>
                      <ListItemAvatar>
                          <Avatar>
                            <FaHtml5 />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                          primary="HTML"
                        />
                    </ListItem>
                    <ListItem>
                      <ListItemAvatar>
                          <Avatar>
                            <FaCss3 />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                          primary="CSS"
                        />
                    </ListItem>
                    <ListItem>
                      <ListItemAvatar>
                          <Avatar>
                            <FaReact />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                          primary="JavaScript (+ ReactJS)"
                        />
                    </ListItem>
                    <ListItem>
                      <ListItemAvatar>
                          <Avatar>
                            <FaDatabase />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                          primary="Database Management - MySQL, PostgresSQL, NoSQL"
                        />
                    </ListItem>
                    <ListItem>
                      <ListItemAvatar>
                          <Avatar>
                            <FaLaptopCode />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                          primary="LaTeX"
                        />
                    </ListItem>
                </List>
              </Col>
              <Col>
                <List>
                    <h3 className = 'skills-header'>Technologies</h3>
                    <ListItem>
                      <ListItemAvatar>
                          <Avatar>
                            <FaSearchengin />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                          primary="Elastic Search"
                        />
                    </ListItem>
                    <ListItem>
                      <ListItemAvatar>
                          <Avatar>
                            <FaChartLine />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                          primary="Kibana"
                        />
                    </ListItem>
                    <ListItem>
                      <ListItemAvatar>
                          <Avatar>
                            <FaDocker />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                          primary="Docker"
                          className = 'skills-data'
                        />
                    </ListItem>
                    <ListItem>
                      <ListItemAvatar>
                          <Avatar>
                            <FaAndroid />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                          primary="Android Application Development"
                        />
                    </ListItem>
                </List>
              </Col>
              <Col>
                <List>
                  <h3 className = 'skills-header'>Tools</h3>
                  <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                          <FaCode />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary="IntelliJ IDEA"
                      />
                  </ListItem>
                  <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                          <FaCode />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary="Sublime Text"
                      />
                  </ListItem>
                  <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                          <FaCode />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary="Android Studio"
                      />
                  </ListItem>
                  <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                          <FaCodeBranch />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary="Git/GitHub/GitLab"
                      />
                  </ListItem>
                  <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                          <FaBitbucket />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary="Bitbucket"
                      />
                  </ListItem>
                  <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                          <FaJira />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary="Jira"
                      />
                  </ListItem>
                </List>
              </Col>
            </Row>
          </Container>
        </div>
    );
  }
}

export default Skills;
