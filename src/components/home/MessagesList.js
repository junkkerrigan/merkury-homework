import React, { Component } from 'react';

import keyIndex from 'react-key-index';

import { Col } from 'reactstrap';

import MessageItem from ".//MessageItem";

import Nina from '../../img/nina.png';

import James from '../../img/james.png';

import map from 'lodash/map';

class MessagesList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            messagesData: keyIndex([
                {
                    icon: Nina,
                    user: 'Nina Jones',
                    timeAgo: 'About 2 weeks ago',
                    text: 'Hello! Could You bring me coffee please?'
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
        this.newMessagesNumber = this.newMessagesNumber.bind(this);
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
            if (!localStorage.getItem(this.state.messagesData[i]._iconId)) {
                localStorage.setItem(this.state.messagesData[i]._iconId, 'new');
            }
        }
    }

    render() {
        return (
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
                                if (index<6)
                                    return <MessageItem key={item._iconId}
                                                        icon={item.icon} user={item.user}
                                                        timeAgo={item.timeAgo}
                                                        text={item.text}
                                                        locate={'/conversations/#' + item._iconId}
                                                        id={item._iconId}/>;
                            })
                        }

                    </ul>

                </div>

            </Col>
        );
    }
}

export default MessagesList;