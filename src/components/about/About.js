import React, {Component} from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import ContactOptions from "./ContactOptions";

class About extends Component {
  render() {
    return (
        <div id={'About'}>
         <Container>
           <Row>
             <Col md={3}>
               <Image src = '../../resources/devansh.jpeg' roundedCircle/>
             </Col>
             <Col md={9} className={'about'}>
               <h1>Devansh Jatin Ponda</h1>
               <p>
                 I'm an undergraduate second-year Computer Science major at the Georgia Institute
                 of Technology. I am passionate about using technology to solve problems and
                 making the world a better place.
               </p>
               <p>
                 I was born in India, raised in Kuwait, and am currently
                 pursuing my education in the United States, and thus I have interacted with
                 people with different backgrounds. My experiences in not only being a member,
                 but the leader of teams of such diverse individuals has shown to me that the best
                 of ideas come from the most diverse teams.
               </p>
               <p>
                 I find myself drawn to two fields in Computer Science the most: Cloud
                 Infrastructure, and Artificial Intelligence. I have had past experience in
                 developing both technologies at the industrial level, and I'm always looking
                 to learn more.
               </p>
               <ContactOptions/>
             </Col>
           </Row>
         </Container>
       </div>
    )
  }
}

export default About;