import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import feedbackIcon from '../../img/feedback-icon.png';

import optionsIcon from '../../img/options-icon.png';

import '../../scss/home/MessageItem.scss';

class MessageItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isChecked: localStorage.getItem(this.props.id)
        };

        this.onMessageCheck = this.onMessageCheck.bind(this);
    }

    onMessageCheck() {
        this.setState({
           isChecked: 'checked'
        });
        localStorage.setItem(this.props.id, 'checked');
    }

    render() {
        return (
            <li className={`service-item ${(this.state.isChecked==='new')?
                'active' : ''}`}>

                <span className='message-icon'>
                    <img src={this.props.icon} alt='user icon' />
                </span>

                <div className='message-data'>

                    <span className='message-author'>{this.props.user}</span>

                    <span className='message-time'>{this.props.timeAgo}</span>

                    <p className='message-text'>{this.props.text}</p>

                    <Link to={this.props.locate} className='message-feedback'
                          onClick={this.onMessageCheck}>
                        <img src={feedbackIcon} width='12' height='10' />
                    </Link>

                    <button className='message-options'>
                        <img src={optionsIcon} width='12' height='12' />
                    </button>

                </div>

            </li>
        );
    }
}

export default MessageItem;