import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import taskIcon from '../../img/task-options-icon.png';

import '../../scss/home/TaskItem.scss';

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


        if (this.props.isAtHome)
        return (

            <li className='service-item'>

                <span className='task-icon'>
                    {this.props.name[0]}
                </span>

                <div className='task-data'>

                    <h5>
                        <Link to={this.props.locate} className='task-name'>
                            {this.props.name}
                        </Link>
                    </h5>

                    {
                        (this.props.status==='completed')?
                            <span className='task-status completed'>
                                Completed!
                            </span> :
                            <span className={`task-status
                                ${this.props.status==='delay'? 'delay' : 'work'}`}>
                                {this.props.time}
                            </span>
                    }



                </div>

                <button className='task-options' onClick={this.onOptionsOpen}>
                    <img src={taskIcon} width='3.5' height='16.5' />
                </button>

            </li>
        ); else return (
            <div className='workflow-item'>

                <span className='task-icon'>
                    {this.props.name[0]}
                </span>

                <div className='task-data'>

                    <h5 className='task-title'>
                        <Link to={this.props.locate} className='task-name'>
                            {this.props.name}
                        </Link>
                    </h5>

                    {
                        (this.props.status==='completed')?
                            <span className='task-status completed'>
                                Completed!
                            </span> :
                            <span className={`task-status
                                ${this.props.status==='delay'? 'delay' : 'work'}`}>
                                {this.props.time}
                            </span>
                    }

                </div>

                <button className='task-options' onClick={this.onOptionsOpen}>
                    <img src={taskIcon} width='3.5' height='16.5' />
                </button>

            </div>
        )
    }
}
export default TaskItem;