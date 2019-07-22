import React, {Component} from 'react'
import ReactTypingEffect from 'react-typing-effect'

class Home extends Component {
  render() {
    return (
        <div id={'Home'} className={'main'}>
          {/*<h2 className={'name-intro'}>Hi! I am <strong>{this.state.currComponent}</strong></h2>*/}
          <h2 className={'name-intro-header'}>Hi! I am </h2>
          <h2 style={{fontFamily: 'monospace'}} className={'name-intro'}><ReactTypingEffect
                             speed={20}
                             eraseDelay={1000}
                             text={['Devansh Jatin Ponda', 'a Developer', 'a Researcher', 'a Student']}/></h2>
        </div>
    );
  }
}

export default Home;