import React, { Component } from 'react';

import keyIndex from 'react-key-index';

import { Col } from 'reactstrap';

import TaskItem from "../home-page/TaskItem";

import map from 'lodash/map';

class TaskList extends Component {
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
            ], 1)
        };

        this.cutString = this.cutString.bind(this);
        this.activeTasksNumber = this.activeTasksNumber.bind(this);
        this.findSpace = this.findSpace.bind(this);
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

    findSpace(string, idx) {
        let ind=idx;
        for (let i=idx;string[i]!==' ' && i>=0;i--) ind--;
        return ind;
    }

    render() {
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
        );
    }
}

export default TaskList;