import React, { Component } from 'react';

import '../../scss/home/ActivityItem.scss';

class ActivityItem extends Component {
    render() {
        return (
            <li className='service-item no-borders activity'>

                <span className='activity-icon'>
                    <img src={this.props.icon} />
                </span>

                <div className='activity-data'>

                    <span className='activity-author'>{this.props.user}</span>

                    <span className='activity-type'>{this.props.type}</span>

                    <span className='activity-target'>{this.props.target}</span>

                    <div className='activity-time'>{this.props.timeAgo}</div>

                </div>

            </li>
        );
    }
}

export default ActivityItem;