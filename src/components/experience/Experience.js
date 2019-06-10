import React, {Component} from 'react'
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';

class Experience extends Component {
  render() {
    return (
        <div id={'Experience'} className={'main'}>
          <h1>WORK EXPERIENCE</h1>
          <Timeline lineColor={'#ddd'}>
            <TimelineItem
                key="001"
                dateText="May 2019 – Present"
                style={{ color: '#e86971' }}
            >
              <h3>NCR Corporation</h3>
              <h4>Software Engineering Intern -- Cloud Platform</h4>
              <p>
                As a software engineering intern on the Cloud Platform team, my team and I
                built an order monitoring tool that tracks the progress of all incoming orders
                through the NCR system. We also developed a Kibana dashboard to visualize all
                this information real-time for immediate understanding.
              </p>
            </TimelineItem>
            <TimelineItem
                key="002"
                dateText="Jan 2019 - May 2019"
                dateInnerStyle={{ background: '#61b8ff' }}
            >
              <h3>Teaching Assistant</h3>
              <h4>Introduction to Object-Oriented Programming</h4>
              <p>
                'The best way to learn is to teach.' I am a Teaching Assistant for the
                'Introduction to Object-Oriented Programming' class at Georgia Tech. We see
                over 800 students every semester, but my team and I ensure that everyone gets
                the support they need. I teach weekly recitations to a section of the students,
                and hold office hours for additional support. I also work with my colleagues and
                professors to develop, review, and publish periodic homework assignment for students.
              </p>

            </TimelineItem>
            <TimelineItem
                key="003"
                dateText="June 2017 – July 2017"
                dateInnerStyle={{ background: '#76bb7f' }}
            >
              <h3>Kuwait Oil Company</h3>
              <h4>Information Technology Intern</h4>
              <p>
                Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
                exercitation. Veniam velit adipisicing anim excepteur nostrud magna
                nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
                reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
                est.
              </p>

            </TimelineItem>

          </Timeline>
        </div>
    );
  }
}

export default Experience;