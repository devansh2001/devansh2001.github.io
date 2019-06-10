import React, {Component} from 'react'
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';

class Experience extends Component {
  render() {
    return (
        <div id={'Experience'} className={'main'}>
          <h1>Work Experience</h1>
          <Timeline lineColor={'#ddd'}>
            <TimelineItem
                key="001"
                dateText="May 2019 – Present"
                style={{ color: '#e86971' }}
            >
              <h3>NCR Corporation</h3>
              <h4>Software Engineering Intern -- Cloud Platform</h4>
              <p>
                Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
                exercitation. Veniam velit adipisicing anim excepteur nostrud magna
                nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
                reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
                est.
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
                Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
                exercitation. Veniam velit adipisicing anim excepteur nostrud magna
                nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
                reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
                est.
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