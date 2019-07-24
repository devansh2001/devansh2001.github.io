import React, { Component } from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/School'
import Image from 'react-bootstrap/Image';


class ExperienceNew extends Component {
    render() {
        return (
            <div id = 'Experience' className= 'main my-work-exp'>
            <h1>WORK EXPERIENCE</h1>
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="May 2019 - August 2019"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon = {<WorkIcon/>}
                >
                    <h3 className="vertical-timeline-element-title">Software Engineering Intern</h3>
                    <h3>NCR Corporation</h3>
                    <h4 className="vertical-timeline-element-subtitle">Atlanta, GA</h4>
                    <br/>
                    <Image src = {require('../../image.jpg')} fluid />
                    <p>
                        As a software engineering intern on the Cloud Platform team, my team and I
                      built an order monitoring tool that tracks the progress of all incoming orders
                      through the NCR system. We also developed a Kibana dashboard to visualize all
                      this information real-time for immediate understanding.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="January 2019 - May 2019"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon = {<WorkIcon/>}
                >
                    <h3 className="vertical-timeline-element-title">Teaching Assistant</h3>
                    <h3>College of Computing at Georgia Tech</h3>
                    <h4 className="vertical-timeline-element-subtitle">Atlanta, GA</h4>
                    <br/>
                    <Image src = {require('../../image.jpg')} fluid />
                    <p>
                    'The best way to learn is to teach.' I am a Teaching Assistant for the 
                    'Introduction to Object-Oriented Programming' class at Georgia Tech. We see 
                    over 800 students every semester, but my team and I ensure that everyone gets 
                    the support they need. I teach weekly recitations to a section of the students,
                    and hold office hours for additional support. I also work with my colleagues 
                    and professors to develop, review, and publish periodic homework assignment 
                    for students.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="June 2017 - July 2017"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon = {<WorkIcon/>}
                >
                    <h3 className="vertical-timeline-element-title">Information Technology Intern</h3>
                    <h3>Kuwait Oil Company</h3>
                    <h4 className="vertical-timeline-element-subtitle">Atlanta, GA</h4>
                    <br/>
                    <Image src = {require('../../image.jpg')} fluid />
                    <p>
                    Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
                        exercitation. Veniam velit adipisicing anim excepteur nostrud magna
                        nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
                        reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
                        est.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="November 2012"
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    icon={<SchoolIcon />}
                >
                    <h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
                    <h4 className="vertical-timeline-element-subtitle">Certification</h4>
                    <p>
                    Creative Direction, User Experience, Visual Design
                    </p>
                </VerticalTimelineElement>
            </VerticalTimeline>
            </div>
        )
    }
}

export default ExperienceNew;