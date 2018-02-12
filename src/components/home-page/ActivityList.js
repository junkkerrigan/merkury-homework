import React, { Component } from 'react';

import keyIndex from 'react-key-index';

import { Col } from 'reactstrap';

import ActivityItem from '../home-page/ActivityItem';

import Nina from '../../img/nina.png';

import James from '../../img/james.png';

import Alex from '../../img/alex.png';

import Alexandra from '../../img/alexandra.png';

import map from 'lodash/map';

class ActivityList extends Component {
    constructor(props) {
        super(props);

        this.state = {
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

    render() {
        return (
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

        );
    }
}

export default ActivityList;