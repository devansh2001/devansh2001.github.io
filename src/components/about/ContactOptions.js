import React, {Component} from 'react'
import { FaLinkedinIn, FaEnvelope, FaPhone, FaGithub } from 'react-icons/fa';



class ContactOptions extends Component {
  render() {
    return (
        <div>
          <a href={'https://www.linkedin.com/in/devanshponda'} >
            <FaLinkedinIn size={30} className={'my-icons first-icon'} />
          </a>

          <a href={'mailto:dponda3@gatech.edu'}>
            <FaEnvelope size={30} className={'my-icons'}/>
          </a>

          <a href={'tel:+14048193093'}>
            <FaPhone size={30} className={'my-icons'}/>
          </a>


          <a href={'https://www.github.com/devansh2001'} >
            <FaGithub size={30} className={'my-icons'}/>
          </a>
        </div>
    );
  }
}

export default ContactOptions;