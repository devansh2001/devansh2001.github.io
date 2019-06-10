import React, {Component} from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import ContactOptions from "./ContactOptions";

class About extends Component {
  render() {
    return (
        <div id={'About'} >
         <Container className={'my-about'}>
           <Row>
             <Col md={3}>
               <Image src = 'data:image/jpeg;base64,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' roundedCircle/>
             </Col>
             <Col md={9} className={'about'}>
               <h2>Devansh Jatin Ponda</h2>
               <p style={{textAlign: 'justify'}}>
                 I'm an undergraduate second-year Computer Science major at the Georgia Institute
                 of Technology. I am passionate about using technology to solve problems and
                 making the world a better place.
               </p>
               <p style={{textAlign: 'justify'}}>
                 I was born in India, raised in Kuwait, and am currently
                 pursuing my education in the United States, and thus I have interacted with
                 people with different backgrounds. My experiences in not only being a member,
                 but the leader of teams of such diverse individuals has shown to me that the best
                 of ideas come from the most diverse teams.
               </p>
               <p style={{textAlign: 'justify'}}>
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