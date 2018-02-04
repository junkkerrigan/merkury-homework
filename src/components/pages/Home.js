import React, { Component } from 'react';

import '../../scss/home-page/Home.scss';

import '../home-page/TaskItem';

import keyIndex from 'react-key-index';

import { Container, Row, Col } from 'reactstrap';

import TaskItem from "../home-page/TaskItem";

import map from 'lodash/map';

import range from 'lodash/range';

import Nina from '../../img/nina.png';

import James from '../../img/james.png';

import Alex from '../../img/alex.png';

import Alexandra from '../../img/alexandra.png';

import MessageItem from "../home-page/MessageItem";

import ActivityItem from "../home-page/ActivityItem";

class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
          tasksData: keyIndex([
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
          ], 1),
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
          ], 1),
            activitiesData: keyIndex([
                {
                    icon: Nina,
                    user: 'Nina Jones',
                    type: 'add',
                    target: 'Free UI Kit',
                    timeAgo: 'Just now'
                },
                {
                    icon: James,
                    user: 'James Smith',
                    type: 'comment',
                    target: 'Free PSD Template',
                    timeAgo: '40 minutes ago'
                },
                {
                    icon: Alex,
                    user: 'Alex Clooney',
                    type: 'complete',
                    target: 'Symu Website',
                    timeAgo: '1 hour ago'
                },
                {
                    icon: Alexandra,
                    user: 'Alexandra Spears',
                    type: 'add',
                    target: 'Free PSD Template',
                    timeAgo: '3 hours ago'
                },
                {
                    icon: Nina,
                    user: 'Nina Jones',
                    type: 'add',
                    target: 'Free UI Kit',
                    timeAgo: 'Just now'
                },
                {
                    icon: Nina,
                    user: 'Nina Jones',
                    type: 'add',
                    target: 'Free UI Kit',
                    timeAgo: 'Just now'
                },
                {
                    icon: Nina,
                    user: 'Nina Jones',
                    type: 'add',
                    target: 'Free UI Kit',
                    timeAgo: 'Just now'
                },
                {
                    icon: Nina,
                    user: 'Nina Jones',
                    type: 'add',
                    target: 'Free UI Kit',
                    timeAgo: 'Just now'
                },
                {
                    icon: Nina,
                    user: 'Nina Jones',
                    type: 'add',
                    target: 'Free UI Kit',
                    timeAgo: 'Just now'
                },
                {
                    icon: Nina,
                    user: 'Nina Jones',
                    type: 'add',
                    target: 'Free UI Kit',
                    timeAgo: 'Just now'
                }
            ], 1)
        };

        this.activeTasksNumber = this.activeTasksNumber.bind(this);
        this.newMessagesNumber = this.newMessagesNumber.bind(this);
        this.cutString = this.cutString.bind(this);
        this.findSpace = this.findSpace.bind(this);
        this.activityType = this.activityType.bind(this);
    }

    activityType(actType) {
        switch (actType) {
            case 'add': return 'added a new project';
            case 'comment': return 'commented project';
            case 'complete': return 'completed task';
            default: return undefined;
        }
    }

    findSpace(string, idx) {
        let ind=idx;
        for (let i=idx;string[i]!==' ' && i>=0;i--) ind--;
        return ind;
    }

    cutString(string, len) {
        return (string.length>len)?
            string.substring(0,this.findSpace(string, len)) + ' (...)' : string;
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

                  </Row>

                  <Row>

                      <Col className='service-wrapper' sm='12' md='4'>

                          <div className={`service
                          ${(this.state.tasksData.length>=4)? '' :
                              'incomplete'} `}>

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
                                      map(this.state.tasksData, (item, index) => {

                                          if (index<4)
                                          return <TaskItem
                                           name={this.cutString(item.name, 30)}
                                           timeStatus={item.timeStatus}
                                           locate={'/tasks/' + item._nameId}
                                           isActive={item.isActive}
                                           key={item._nameId}/>;
                                      })
                                  }

                              </ul>

                          </div>

                      </Col>

                      <Col className='service-wrapper' sm='12' md='4'>

                          <div className={`service
                          ${(this.state.messagesData.length>=4)? '' :
                              'incomplete'} `}>

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
                                          if (index<4)
                                          return <MessageItem key={item._iconId}
                                          icon={item.icon} user={item.user}
                                          timeAgo={item.timeAgo}
                                          text={this.cutString(item.text, 35)}
                                          locate={'/conversations/#' + item._iconId}
                                          id={item._iconId}/>;
                                      })
                                  }

                              </ul>

                          </div>

                      </Col>

                      <Col className='service-wrapper' sm='12' md='4'>

                          <div className={`service
                          ${(this.state.activitiesData.length>=4)? '' :
                              'incomplete'} `}>

                              <header className='service-header'>

                                  <h5 className='service-title'>
                                      Activity
                                  </h5>

                                  <div className='service-number-wrapper'>

                                      <span className='service-number'>
                                          {
                                              this.state.activitiesData.length
                                          }
                                      </span>

                                  </div>

                              </header>

                              <ul className='service-list'>

                                  {
                                        map(this.state.activitiesData,
                                            (item, index) => {
                                            if (index<4)
                                            return <ActivityItem key={item._iconId}
                                            icon={item.icon}
                                            user={item.user}
                                            type={this.activityType(item.type)}
                                            target={
                                                item.target
                                            }
                                            timeAgo={item.timeAgo}/>
                                            })
                                  }

                              </ul>

                          </div>

                      </Col>

                  </Row>

              </Container>

          </section>
      );
    }
}

export default Home;