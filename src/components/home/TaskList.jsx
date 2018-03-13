import React, { Component } from 'react';
import keyIndex from 'react-key-index';
import { Col } from 'reactstrap';
import map from 'lodash/map';

import TaskItem from './/TaskItem';

class TaskList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasksData: keyIndex([
        {
          name: 'New website for Symu.co',
          time: '5 days delays',
          status: 'delay',
        },
        {
          name: 'Free business PSD Template ',
          time: '2 days delays',
          status: 'delay',
        },
        {
          name: 'New logo for JCD.pl',
          time: '5 days left',
          status: 'work',
        },
        {
          name: 'Free Icons Set vol. 3',
          time: '10 days left',
          status: 'work',
        },
      ], 1),
    };

    this.delayedTasksNumber = this.delayedTasksNumber.bind(this);
  }


  delayedTasksNumber() {
    let num = 0;
    const data = this.state.tasksData;
    for (let i = 0; i < data.length; i++) {
      if (data[i].status === 'delay') num++;
    }
    return num;
  }

  render() {
    return (
      <Col
        className="service-wrapper"
        sm="12"
        md={{ size: 6, offset: 3 }}
        lg={{ size: 4, offset: 0 }}
      >

        <div className={`service
                          ${(this.state.tasksData.length >= 4) ? '' :
                    'incomplete'} `}
        >

          <header className="service-header">

            <h5 className="service-title">
                            Tasks
            </h5>

            <div className="service-number-wrapper">

              <span className="service-number">
                {this.state.tasksData.length}
              </span>

              <span className="service-number delay">
                {
                                      this.delayedTasksNumber()
                                  }
              </span>

            </div>

          </header>

          <ul className="service-list">

            {
              map(this.state.tasksData, (item, index) => {
                if (index < 4) {
                  return (<TaskItem
                    isAtHome
                    name={item.name}
                    time={item.time}
                    locate={`/tasks/${item._nameId}`}
                    status={item.status}
                    key={item._nameId}
                  />);
                }
                return <TaskItem />;
              })
            }

          </ul>

        </div>

      </Col>
    );
  }
}

export default TaskList;
