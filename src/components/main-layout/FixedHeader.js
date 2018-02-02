import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import UserMenu from './UserMenu';

import UserNotifications from './UserNotifications';

import UserMessages from "./UserMessages";

import '../../scss/main-layout/FixedHeader.scss';

import { Container } from 'reactstrap';

class FixedHeader extends Component {

    constructor(props) {
        super(props);

        this.state = {
            messagesNumber: 0,
            notificationsNumber: 3
        };
    }

    //TODO: connect with sidebar

    render() {
        return (
            <header className='fixed-header'>

                <Container>

                    <label className='search-box-wrapper'>
                        <i className='fa fa-search' />
                        <input type='text' name='search-box' className='search-box'
                               placeholder='...' />
                    </label>

                    <Link to='/new-project' className='new-project'>
                        <i className='fa fa-plus' />
                        Add project
                    </Link>

                    <UserMessages messagesNumber={this.state.messagesNumber}/>

                    <UserNotifications notificationsNumber={this.state.notificationsNumber} />

                    <UserMenu />

                </Container>

            </header>
        );
    }
}

export default FixedHeader;