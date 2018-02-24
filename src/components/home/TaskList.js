import React, { Component } from 'react';

import keyIndex from 'react-key-index';

import { Col } from 'reactstrap';

import TaskItem from ".//TaskItem";

import map from 'lodash/map';

class TaskList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tasksData: keyIndex([
                {
                    name: 'New website for Symu.co',
                    time: '5 days delays',
                    status: 'delay'
                },
                {
                    name: 'Free business PSD Template ',
                    time: '2 days delays',
                    status: 'delay'
                },
                {
                    name: 'New logo for JCD.pl',
                    time: '5 days left',
                    status: 'work'
                },
                {
                    name: 'Free Icons Set vol. 3',
                    time: '10 days left',
                    status: 'work'
                },
            ], 1)
        };

        this.cutString = this.cutString.bind(this);
        this.delayedTasksNumber = this.delayedTasksNumber.bind(this);
        this.findSpace = this.findSpace.bind(this);
    }

    cutString(string, len) {
        return (string.length>len)?
            string.substring(0,this.findSpace(string, len)) + ' (...)' : string;
    }

    delayedTasksNumber() {
        let num=0;
        const data=this.state.tasksData;
        for (let i=0; i<data.length; i++) {
            if (data[i].status==='delay') num++;
        }
        return num;
    }

    findSpace(string, idx) {
        let ind=idx;
        for (let i=idx;string[i]!==' ' && i>=0;i--) ind--;
        return ind;
    }

    render() {
        console.log(this.state.tasksData);
        return (
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

                            <span className='service-number delay'>
                                  {
                                      this.delayedTasksNumber()
                                  }
                                  </span>

                        </div>

                    </header>

                    <ul className='service-list'>

                        {
                            map(this.state.tasksData, (item, index) => {

                                if (index<4)
                                    return <TaskItem
                                        isAtHome
                                        name={this.cutString(item.name, 30)}
                                        time={item.time}
                                        locate={'/tasks/' + item._nameId}
                                        status={item.status}
                                        key={item._nameId}/>;
                            })
                        }

                    </ul>

                </div>

            </Col>
        );
    }
}

export default TaskList;