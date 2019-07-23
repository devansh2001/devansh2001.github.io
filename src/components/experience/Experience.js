import React, {Component} from 'react'
// import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';
import Timeline from 'react-image-timeline';
require('react-image-timeline/dist/timeline.css');


class Experience extends Component {

  constructor(props) {
    super(props)
    this.data = this.generateData();
  }

  generateData = () => {
    var internship_NCR = [{
      date: new Date(),
      text: "Sed leo elit, pellentesque sit amet congue quis, ornare nec lorem.",
      title: "Cairo, Egypt",
      imageUrl: "http://github.com/aaron9000/react-image-timeline/blob/master/src/assets/cairo.jpg?raw=true"
    }]
    return [
      {
        date: Date.parse("2013-05-15T07:00:00.000Z"),
        text:
          "Sed leo elit, pellentesque sit amet congue quis, ornare nec lorem. Phasellus tincidunt rhoncus magna,\neget elementum odio rutrum fermentum. Ut a justo lacus. Maecenas blandit molestie felis ac viverra. Pellentesque\nsagittis ligula neque, sit amet feugiat massa tempor sed. Duis id bibendum ex, pulvinar tincidunt ",
        title: "Berlin, Germany",
        imageUrl:
          "http://github.com/aaron9000/react-image-timeline/src/assets/berlin.jpg?raw=true"
      },
      {
        date: Date.parse("2013-08-14T07:00:00.000Z"),
        text:
          "Sed leo elit, pellentesque sit amet congue quis, ornare nec lorem. Phasellus tincidunt rhoncus magna,\neget elementum odio rutrum fermentum. Ut a justo lacus. Maecenas blandit molestie felis ac viverra. Pellentesque\nsagittis ligula neque, sit amet feugiat massa tempor sed. Duis id bibendum ex, pulvinar tincidunt orci. Curabitur\nid sem urna. Maecenas sed elit malesuada, cursus ligula ut, vestibulum lorem. Suspendisse vitae ultrices libero.\nMauris maximus, ligula vitae tincidunt scelerisque, ipsum magna euismod massa, eu vulputate enim est tempus sem.\nMaecenas id nibh vitae ante volutpat facilisis nec eget velit. Proin et ligula feugiat, auctor tellus sit amet,\naccumsan neque. Quisque porttitor lectus quis elit fermentum, a facilisis est suscipit. Integer consectetur dapibus\nnisi, ut lacinia enim vulputate vitae. Curabitur id diam mauris. Duis dictum, dolor at porttitor aliquet, justo libero\nmattis magna, eu pellentesque augue mauris eget erat. Pellentesque lacinia velit nec ullamcorper mollis. Pellentesque\nlacus tortor, m",
        title: "Chicago, Illinois",
        imageUrl:
          "http://github.com/aaron9000/react-image-timeline/src/assets/chicago.jpg?raw=true"
      },
      {
        date: Date.parse("2013-09-27T07:00:00.000Z"),
        text:
          "Sed leo elit, pellentesque sit amet congue quis, ornare nec lorem. Phasellus tincidunt rhoncus magna,\neget elementum odio rutrum fermentum. Ut a justo lacus. Maecenas blandit molestie felis ac viverra. Pellentesque\nsagittis ligula neque, sit amet feugiat massa tempor sed. Duis id bibendum ex, pulvinar tincidunt orci. Curabitur\nid sem urna. Maecenas sed elit malesuada, cursus ligula ut, vestibulum lorem. Suspendisse vitae ultric",
        title: "Cairo, Egypt",
        imageUrl:
          "http://github.com/aaron9000/react-image-timeline/src/assets/egypt.jpg?raw=true"
      },
      {
        date: Date.parse("2013-12-10T08:00:00.000Z"),
        text:
          "Sed leo elit, pellentesque sit amet congue quis, ornare nec lorem. Phasellus tincidunt rhoncus magna,\neget elementum odio rutrum fermentum. Ut a justo lacus. Maecenas blandit molestie felis ac viverra. Pellentesque\nsagittis ligula neque, sit amet feugiat massa tempor sed. Duis id bibendum ex, pulvinar tincidunt orci. Curabitur\nid sem urna. Maecenas sed elit malesuada, cursus ligula ut, vestibulum lorem. Suspendisse vitae ultrices libero.\nMauris maximus, ligula vitae tincidunt scelerisque, ipsum magna euismod massa, eu vulputate enim est tempus sem.\nMaecenas id nibh vitae ante volutpat facilisis nec eget velit. Proin et ligula feugiat, auctor tellus sit amet,\naccumsan neque. Quisque porttitor lectus quis elit fermentum, a facilisis est suscipit. Integer consectetur dapibus\nnisi, ut lacinia enim vulputate vitae. Curabitur id diam mauris. Duis dictum, dolor at porttitor aliquet, justo libero\nmattis magna, eu pellentesque augue mau",
        title: "London, England",
        imageUrl:
          "http://github.com/aaron9000/react-image-timeline/src/assets/london.jpg?raw=true"
      },
      {
        date: Date.parse("2014-01-12T08:00:00.000Z"),
        text:
          "Sed leo elit, pellentesque sit amet congue quis, ornare nec lorem. Phasellus tincidunt rhoncus magna,\neget elementum odio rutrum fermentum. Ut a justo lacus. Maecenas blandit molestie felis ac viverra. Pellentesque\nsagittis ligula neque, sit amet feugiat massa tempor sed. Duis id bibendum ex, pulvinar tincidunt orci. Curabitur\nid sem urna. Maecenas sed elit malesuada, cursus ligula ut, vestibulum lorem. Suspendisse vitae ultrices libero.\nMauris maximus, ligula vitae tincidunt scelerisque, ipsum magna euismod massa, eu vulputate enim est tempus sem.\nMaecenas id nibh vitae ante volutpat facilisis nec eget velit. Proin et ligula feugiat, auctor tellus sit amet,\naccumsan neque. Quisque porttitor lectus quis elit fermentum, a facilisis est suscipit. Integer consectetur dapibus\nnisi, ut lacinia enim vulputate vitae. Curabitur id diam mauris. Duis dictum, dolor at porttitor aliquet, justo libero\nmattis magna, eu pellentesque augue mauris eget erat. Pellentesque lacinia velit nec ullamcorper mollis. Pellentesque\nlacus tortor, maximus eget tincidunt non, luctus scelerisque odio. Suspendisse potent",
        title: "New York, New York",
        imageUrl: "http://github.com/aaron9000/react-image-timeline/src/assets/ny.jpg?raw=true"
      },
      {
        date: Date.parse("2014-03-19T07:00:00.000Z"),
        text:
          "Sed leo elit, pellentesque sit amet congue quis, ornare nec lorem. Phasellus tincidunt rhoncus magna,\neget elementum odio rutrum fermentum. Ut a justo lacus. Maecenas blandit molestie felis ac viverra. Pellentesque\nsagittis ligula neque, sit amet feugiat massa tempor sed. Duis id bibendum ex, pulvinar tincidunt orci. Curabitur\nid sem urna. Maecenas sed elit malesuada, cursus ligula ut, vestibulum lorem. Suspendisse vitae ultrices libero.\nMauris maximus, ligula vitae tincidunt scelerisque, ipsum magna euismod massa, eu vulputate enim est tempus sem.\nMaecenas id nibh vitae ante volutpat facilisis nec eget velit. Proin et ligula feugiat, auctor tellus sit amet,\naccumsan neque. Quisque porttitor lectus quis elit fermentum, a facilisis est suscipit. Integer consectetur dapibus\nnisi, ut lacinia enim vulputate vitae. Curabitur id diam mauris. Duis dictum, dolor at porttitor aliquet, justo libero\nmattis magna, eu pellentesque augue mauris eget erat. Pellentesque lacinia velit nec ullamcorper mollis. Pellentesque\nlacus tortor, maximus eget tincidunt non, luctus scelerisque odio. Suspendisse potenti. Etiam vel augue blandit, auctor\nsem sit amet, imperdiet dolor.",
        title: "Paris, France",
        imageUrl:
          "http://github.com/aaron9000/react-image-timeline/src/assets/paris.jpg?raw=true"
      },
      {
        date: Date.parse("2014-04-05T07:00:00.000Z"),
        text:
          "Sed leo elit, pellentesque sit amet congue quis, ornare nec lorem. Phasellus tincidunt rhoncus magna,\neget elementum odio rutrum fermentum. Ut a justo lacus. Maecenas blandit molestie felis ac viverra. Pellentesque\nsagittis ligula neque, sit amet feugiat massa tempor sed. Duis id bibendum ex, pulvinar tincidunt orci. Curabitur\nid sem urna. Maecenas sed elit malesuada, cursus ligula ut, vestibulum lorem. Suspendisse vitae ultrices libero.\nMauris maximus, ligula vitae tincidunt scelerisque, ipsum magna euismod massa, eu vulputate enim est tempus sem.\nMaecenas id nibh vitae ante vo",
        title: "Rome, Italy",
        imageUrl: "http://github.com/aaron9000/react-image-timeline/src/assets/rome.jpg?raw=true"
      },
      {
        date: Date.parse("2014-06-12T07:00:00.000Z"),
        text:
          "Sed leo elit, pellentesque sit amet congue quis, ornare nec lorem. Phasellus tincidunt rhoncus magna,\neget elementum odio rutrum fermentum. Ut a justo lacus. Maecenas blandit molestie felis ac viverra. Pellentesque\nsagittis ligula neque, sit amet feugiat massa tempor sed. Duis id bibendum ex, pulvinar tincidunt orci. Curabitur\nid sem urna. Maecenas sed elit malesuada, cursus ligula ut, vestibulum lorem. Suspendisse vitae ultrices libero.\nMauris maximus, ligula vitae tincidunt scelerisque, ipsum magna euismod massa, eu vulputate enim est tempus sem.\nMaecenas id nibh vitae ante volutpat facilisis nec eget velit. Proin et ligula feugiat, auctor tellus sit amet,\naccumsan neque. Quisque porttitor lectus quis elit fermentum, a facilisis est suscipit. Integer consectetur dapibus\nnisi, ut lacinia enim vulputate vitae. Curabitur id diam mauris. Duis dictum, dolor at porttitor aliquet, justo libero\nmattis magna, eu pellentesque augue mauris eget erat. Pellentesque lacinia velit nec ullamcorper mollis",
        title: "Seoul, South Korea",
        imageUrl:
          "http://github.com/aaron9000/react-image-timeline/src/assets/seoul.jpg?raw=true"
      },
      {
        date: Date.parse("2014-08-22T07:00:00.000Z"),
        text:
          "Sed leo elit, pellentesque sit amet congue quis, ornare nec lorem. Phasellus tincidunt rhoncus magna,\neget elementum odio rutrum fermentum. Ut a justo lacus. Maecenas blandit molestie felis ac viverra. Pellentesque\nsagittis ligula neque, sit amet feugiat massa tempor sed. Duis id bibendum ex, pulvinar tincidunt orci. Curabitur\nid sem urna. Maecenas sed elit malesuada, cursus ligula ut, vestibulum lorem. Suspendisse vitae ultrices libero.\nMauris maximus, ligula vitae tincidunt scelerisque, ipsum magna euismod massa, eu vulputate enim est tempus sem.\nMaecenas id nibh vitae ante volutpat facilisis nec eget velit. Proin et ligula feugiat, auctor tellus sit amet,\naccumsan neque. Quisque porttitor lectus quis elit fermentum, a facilisis est suscipit. Integer consectetur dapibus\nnisi, ut lacinia enim vulputate vitae. Curabitur id diam mauris. Duis dictum, dolor at porttitor aliquet, justo libero\nmattis magna, eu pellentesque augue mauris eget erat. Pellentesque lacinia velit nec ullamcorper mollis. Pellentesque\nlacus tortor, maxim",
        title: "Madrid, Spain",
        imageUrl:
          "http://github.com/aaron9000/react-image-timeline/src/assets/madrid.jpg?raw=true"
      },
      {
        date: Date.parse("2014-10-05T07:00:00.000Z"),
        text:
          "Sed leo elit, pellentesque sit amet congue quis, ornare nec lorem. Phasellus tincidunt rhoncus magna,\neget elementum odio rutrum fermentum. Ut a justo lacus. Maecenas blandit molestie felis ac viverra. Pellentesque\nsagittis ligula neque, sit amet feugiat massa tempor sed. Duis id bibendum ex, pulvinar tincidunt orci. Curabitur\nid sem urna. Maecenas sed elit malesuada, cursus ligula ut, vestibulum lorem. Suspendisse vitae ultrices libero.\nMauris maximus, ligula vitae tincidunt scelerisque, ipsum magna euismod massa, eu vulputate enim est tempus sem.\nMaecenas id nibh vitae ante volutpat facilisis nec eget velit. Proin et ligula feugiat, auctor tellus sit amet,\naccumsan neque. Quisque porttitor lectus quis elit fermentum, a facilisis est suscipit. Integer consectetur dapibus\nnisi, ut lacinia enim vulputate vitae. Curabitur id diam mauris. Duis dictum, dolor at porttitor aliquet, justo libero\nmattis magna, eu pellentesque augue mauris eget erat. Pellente",
        title: "Tokyo, Japan",
        imageUrl:
          "http://github.com/aaron9000/react-image-timeline/src/assets/tokyo.jpg?raw=true"
      }
    ]
  };

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
    document.getElementById('Experience').style.background = "url(" + link + ")";
    // document.getElementById('fancy-bg').style.background = "url(" + link + ") no-repeat";
    // document.getElementById('fancy-bg').style.borderRadius = '25px';
    // document.getElementById('fancy-bg').style.marginTop = '50px';
    // document.getElementById('fancy-bg').style.marginBottom = '50px';
  };

  mouseLeave = () => {
    console.log('Left!');
    document.getElementById('Experience').style.background = '#FEFEFE'
  };

  render() {
    return (
        <div id={'Experience'} className={'main my-work-exp'}>
          <h1>WORK EXPERIENCE</h1>
          {console.log(this.data)}
          <Timeline events={this.data}></Timeline>
          here

          {/* <Container>
            <Row>
              <Col xs={6}>
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
          </Container> */}
        </div>
    );
  }
}

export default Experience;