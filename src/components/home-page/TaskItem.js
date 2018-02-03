import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import taskIcon from '../../img/task-options-icon.png';

import '../../scss/home-page/TaskItem.scss';

class TaskItem extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isOptionsOpen: false
        };

        this.onOptionsOpen = this.onOptionsOpen.bind(this);
    }

    onOptionsOpen() {
        this.setState({
           isOptionOpen: !this.state.isOptionsOpen
        });
    }

    render() {
        return (
            <li className='service-item'>

                <span className='task-icon'>
                    {this.props.name[0]}
                </span>

                <div className='task-data'>

                    <h5 className='task-title'>
                        <Link to={this.props.locate} className='task-name'>
                            {this.props.name}
                        </Link>
                    </h5>

                    <span className={`task-status
                        ${this.props.isActive? 'active' : ''}`}>
                        {this.props.timeStatus}
                    </span>

                </div>

                <button className='task-options' onClick={this.onOptionsOpen}>
                    <img src={taskIcon} width='3.5' height='16.5' />
                </button>

            </li>
        );
    }
}
export default TaskItem;