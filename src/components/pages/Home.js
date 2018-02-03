import React, { Component } from 'react';

import '../../scss/home-page/Home.scss';

import '../home-page/TaskItem';

import keyIndex from 'react-key-index';

import { Container, Row, Col } from 'reactstrap';

import TaskItem from "../home-page/TaskItem";

import map from 'lodash/map';

import Nina from '../../img/nina.png';

import James from '../../img/james.png';

import MessageItem from "../home-page/MessageItem";

class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
          tasksData: [
              {
                  name: 'New website for Symu.co',
                  timeStatus: '5 days delays',
                  isActive: true
              },
              {
                  name: 'Free business PSD Template ',
                  timeStatus: '2 days delays',
                  isActive: true
              },
              {
                  name: 'New logo for JCD.pl',
                  timeStatus: '5 days left',
                  isActive: false
              },
              {
                  name: 'Free Icons Set vol. 3',
                  timeStatus: '10 days left',
                  isActive: false
              },
          ],
          messagesData: keyIndex([
              {
                  icon: Nina,
                  user: 'Nina Jones',
                  timeAgo: '5 minutes ago',
                  text: 'Hey You! It’s me again :-) I attached new (...)'
              },
              {
                  icon: Nina,
                  user: 'Nina Jones',
                  timeAgo: 'About 20 hours ago',
                  text: 'Hey! I attached some new PSD files for (...)'
              },
              {
                  icon: James,
                  user: 'James Smith',
                  timeAgo: '2 days ago',
                  text: 'Good morning, you are fired!'
              },
              {
                  icon: Nina,
                  user: 'Nina Jones',
                  timeAgo: 'About 2 weeks ago',
                  text: 'Hello! Could You bring me coffee please?'
              }
          ], 1)
        };

        this.activeTasksNumber = this.activeTasksNumber.bind(this);
        this.newMessagesNumber = this.newMessagesNumber.bind(this);
    }

    activeTasksNumber() {
        let num=0;
        const data=this.state.tasksData;
        for (let i=0; i<data.length; i++) {
            if (data[i].isActive) num++;
        }
        return num;
    }

    newMessagesNumber() {
        let num=0;
        const data=this.state.messagesData;
        for(let i=0;i<data.length;i++) {
            if(localStorage.getItem(this.state.messagesData[i]._iconId)
            === 'new') num++;
        }
        return num;
    }



    componentWillMount() {



        for(let i=0;i<this.state.messagesData.length;i++) {
            if (!localStorage.getItem(this.state.messagesData._iconId)) {
                localStorage.setItem(this.state.messagesData._iconId, 'new');
            }
        }
    }

    //TODO: text-overflow: ellipsis
    render() {

      let tasksData;

      tasksData = keyIndex(this.state.tasksData, 1);

      console.log(this.state.messagesData);
      return (
          <section className='home'>

              <Container>

                  <h2 className='home-greeting'>
                      Hello {localStorage.getItem('currentUser')}!
                  </h2>

                  <Row>

                      <Col className='sales' sm='12' md='6'>

                      </Col>

                      <Col className='report' sm='12' md='6'>

                      </Col>

                      <Col className='service-wrapper' sm='12' lg='4'>

                          <div className='service'>

                              <header className='service-header'>

                                  <h5 className='service-title'>
                                      Tasks
                                  </h5>

                                  <div className='service-number-wrapper'>

                                      <span className='service-number'>
                                      {this.state.tasksData.length}
                                      </span>

                                      <span className='service-number active'>
                                      {
                                          this.activeTasksNumber()
                                      }
                                      </span>

                                  </div>

                              </header>

                              <ul className='service-list'>

                                  {
                                      map(tasksData, (item, index) => {
                                          return <TaskItem name={item.name}
                                           timeStatus={item.timeStatus}
                                           locate={'/tasks/' + item._nameId}
                                           isActive={item.isActive}
                                           key={item._nameId}/>
                                      })
                                  }

                              </ul>

                          </div>

                      </Col>

                      <Col className='service-wrapper' sm='12' lg='4'>

                          <div className='service'>

                              <header className='service-header'>

                                  <h5 className='service-title'>
                                      Messages
                                  </h5>

                                  <div className='service-number-wrapper'>

                                      <span className='service-number'>
                                          {
                                              this.newMessagesNumber()
                                          }
                                      </span>

                                  </div>

                              </header>

                              <ul className='service-list'>

                                  {
                                      map(this.state.messagesData, (item, index) => {
                                          return <MessageItem key={item._iconId}
                                          icon={item.icon} user={item.user}
                                          timeAgo={item.timeAgo}
                                          text={item.text}
                                          locate={'/conversations/#' + item._iconId}
                                          id={item._iconId}/>
                                      })
                                  }

                              </ul>

                          </div>

                      </Col>

                      <Col className='activity' sm='12' lg='4'>

                      </Col>

                  </Row>

              </Container>

          </section>
      );
    }
}

export default Home;