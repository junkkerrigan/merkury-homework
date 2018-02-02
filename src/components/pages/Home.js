import React, { Component } from 'react';

import '../../scss/home-page/Home.scss';

import '../home-page/TaskItem';

import keyIndex from 'react-key-index';

import { Container, Row, Col } from 'reactstrap';

import TaskItem from "../home-page/TaskItem";

import map from 'lodash/map';

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
          ]
        };

        this.activeTasksNumber = this.activeTasksNumber.bind(this);
    }

    activeTasksNumber() {
        let num=0;
        const data=this.state.tasksData;
        for (let i=0; i<data.length; i++) {
            if (data[i].isActive) num++;
        }
        return num;
    }

    render() {

      let tasksData;

      tasksData = keyIndex(this.state.tasksData, 1);

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

                      <Col className='tasks-wrapper' sm='12' lg='4'>

                          <div className='tasks'>

                              <header className='tasks-header'>

                                  <h5 className='tasks-title'>
                                      Tasks
                                  </h5>

                                  <div className='tasks-number-wrapper'>

                                      <span className='tasks-number'>
                                      {this.state.tasksData.length}
                                      </span>

                                      <span className='tasks-number active'>
                                      {
                                          this.activeTasksNumber()
                                      }
                                      </span>

                                  </div>

                              </header>

                              <ul className='tasks-list'>

                                  {
                                      map(tasksData, (item, index) => {
                                          return <TaskItem name={item.name}
                                                           timeStatus={item.timeStatus}
                                                           locate={'/tasks/' + (index+1).toString(10)}
                                                           isActive={item.isActive}
                                                           key={item._nameId}/>
                                      })
                                  }

                              </ul>


                          </div>

                      </Col>

                      <Col className='messages' sm='12' lg='4'>

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