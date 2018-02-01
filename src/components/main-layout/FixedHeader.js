import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import UserMenu from './UserMenu';

import UserNotifications from './UserNotifications';

import UserMessages from "./UserMessages";

import '../../scss/main-layout/FixedHeader.scss';

class FixedHeader extends Component {

    constructor(props) {
        super(props);

        this.state = {
            messagesNumber: 0,
            notificationsNumber: 3
        };
    }

    render() {
        return (
            <header className='fixed-header'>

                <label className='search-box-wrapper'>
                    <i className='fa fa-search' />
                    <input type='text' name='search-box' className='search-box'
                    placeholder='...' />
                </label>

                <div>

                    <Link to='/new-project' className='new-project'>
                        <i className='fa fa-plus' />
                        Add project
                    </Link>

                    <UserMessages messagesNumber={this.state.messagesNumber}/>

                    <UserNotifications notificationsNumber={this.state.notificationsNumber} />

                    <UserMenu />


                </div>

            </header>
        );
    }
}

export default FixedHeader;