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
                    <Image src = {require('../../ncr-intern.jpg')} fluid />
                    <br/>
                    <p/>
                        As a software engineering intern on the Cloud Platform team, my team and I
                      built an order monitoring tool that tracks the progress of all incoming orders
                      through the NCR system. We also developed a Kibana dashboard to visualize all
                      this information real-time for immediate understanding.

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
                    <Image src = {require('../../ta-img.jpg')} fluid />
                    <br/>
                    <p/>
                    'The best way to learn is to teach.' I am a Teaching Assistant for the 
                    <b> 'Introduction to Object-Oriented Programming' </b>class at Georgia Tech. <br/> We see 
                    over 800 students every semester, but my team and I ensure that everyone gets 
                    the support they need. I teach weekly recitations to a section of the students,
                    and hold office hours for additional support. I also work with my colleagues 
                    and professors to develop, review, and publish periodic homework assignment 
                    for students.

                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="November 2018 - Present"
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    icon={<SchoolIcon />}
                >
                    <h3 className="vertical-timeline-element-title">Undergraduate Researcher</h3>
                    <h3 className="vertical-timeline-element-subtitle">Georgia Tech School of Interactive Computing</h3>
                    <h4>Atlanta, GA</h4>
                    <br/>
                    <Image src = {require('../../research-image.jpg')} fluid/>
                    <br/>
                    <p/>
                    I am a part of a team of researchers under Dr. Gregory Abowd, and Dr. Thad Starner, working to create a
                    self-powered device that can recognize hand gestures using only a 4x4 array of photodiodes, and execute
                    actions based on those gestures.
                    I led the software part of the project, and used scikit-learn to train a Machine Learning algorithm to recognize
                    left-swipe, right-swipe, pinch-in and pinch-out gestures. The algorithm was trained on controlled data that I produced.
                    
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="June 2017 - July 2017"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#ffff' }}
                    icon = {<WorkIcon/>}
                >
                    <h3 className="vertical-timeline-element-title">Information Technology Intern</h3>
                    <h3>Kuwait Oil Company</h3>
                    <h4 className="vertical-timeline-element-subtitle">Ahmadi, Kuwait</h4>
                    <br/>
                    <Image src = {require('../../koc.png')} fluid />
                    <br/>
                    <p/>
                        As an information technology intern, I worked on support teams for KOC. Our team of interns would work with
                        hardware fixes along with full-time staff. Over the course of the internship, we took apart whole CPUs, monitors,
                        printers, scanners, laptops, and put them back together (and they worked!) with the help of our mentors. This
                        process furthered my interest in technology and I saw the layers of abstraction that these devices have.
                </VerticalTimelineElement>
            </VerticalTimeline>
            </div>
        )
    }
}

export default ExperienceNew;