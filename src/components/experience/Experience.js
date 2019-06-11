import React, {Component} from 'react'
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

class Experience extends Component {

  mouseHandle = (event) => {
    var num = event.target.className;
    if (num.indexOf('koc') !== -1) {
      console.log('KOC');
      this.addStyle('https://cdn.pixabay.com/photo/2016/06/18/17/42/image-1465348_960_720.jpg');
    } else if (num.indexOf('taing') !== -1) {
      console.log('taing');
    } else if (num.indexOf('ncr') !== -1) {
      console.log('NCR');
    } else {
      console.log('Why did you fire?');
    }
    console.log('Entered!');
  };

  addStyle = (link) => {
    document.getElementById('fancy-bg').style.background = "url(" + link + ")";
  };

  mouseLeave = () => {
    console.log('Left!');
    document.getElementById('fancy-bg').style.background = '#FEFEFE'
  };

  render() {
    return (
        <div id={'Experience'} className={'main my-work-exp'}>
          <h1>WORK EXPERIENCE</h1>
          <Container>
            <Row>
              <Col>
                <Timeline lineColor={'#ddd'} className={'my-timeline'}>
                  <TimelineItem
                      key="001"
                      dateText="May '19 – Aug '19"
                      style={{ color: '#e86971' }}
                  >
                    <h3 className={'ncr'} onMouseEnter={this.mouseHandle} onMouseLeave={this.mouseLeave}>NCR Corporation</h3>
                    <h4 className={'ncr'} onMouseEnter={this.mouseHandle} onMouseLeave={this.mouseLeave}>Software Engineering Intern -- Cloud Platform</h4>
                    <p className={'para-exp-data ncr'} onMouseEnter={this.mouseHandle} onMouseLeave={this.mouseLeave}>
                      As a software engineering intern on the Cloud Platform team, my team and I
                      built an order monitoring tool that tracks the progress of all incoming orders
                      through the NCR system. We also developed a Kibana dashboard to visualize all
                      this information real-time for immediate understanding.
                    </p>
                  </TimelineItem>

                  <TimelineItem
                      key="002"
                      dateText="Jan '19 - May '19"
                      dateInnerStyle={{ background: '#61b8ff' }}
                  >
                    <h3 className={'taing'} onMouseEnter={this.mouseHandle} onMouseLeave={this.mouseLeave}>Teaching Assistant</h3>
                    <h4 className={'taing'} onMouseEnter={this.mouseHandle} onMouseLeave={this.mouseLeave}>Introduction to Object-Oriented Programming</h4>
                    <p className={'para-exp-data taing'} onMouseEnter={this.mouseHandle} onMouseLeave={this.mouseLeave}>
                      'The best way to learn is to teach.' I am a Teaching Assistant for the
                      'Introduction to Object-Oriented Programming' class at Georgia Tech. We see
                      over 800 students every semester, but my team and I ensure that everyone gets
                      the support they need. I teach weekly recitations to a section of the students,
                      and hold office hours for additional support. I also work with my colleagues and
                      professors to develop, review, and publish periodic homework assignment for students.
                    </p>
                  </TimelineItem>

                  <div>
                    <TimelineItem
                        key="003"
                        dateText="Jun '17 – Jul '17"
                        dateInnerStyle={{ background: '#76bb7f' }}
                    >
                      <h3 className={'koc'} onMouseEnter={this.mouseHandle} onMouseLeave={this.mouseLeave}>Kuwait Oil Company</h3>
                      <h4 className={'koc'} onMouseEnter={this.mouseHandle} onMouseLeave={this.mouseLeave}>Information Technology Intern</h4>
                      <p className={'para-exp-data koc'} onMouseEnter={this.mouseHandle} onMouseLeave={this.mouseLeave}>
                        Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
                        exercitation. Veniam velit adipisicing anim excepteur nostrud magna
                        nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
                        reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
                        est.
                      </p>
                    </TimelineItem>
                  </div>

                </Timeline>
              </Col>
              <Col id={'fancy-bg'}>
              </Col>
            </Row>
          </Container>
        </div>
    );
  }
}

export default Experience;