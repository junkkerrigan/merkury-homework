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
            notificationsNumber: 3,
            isFixedMenuOpen: false
        };

        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu() {
        this.setState({
            isFixedMenuOpen: !this.state.isFixedMenuOpen
        });

        let sidebar = document.getElementsByClassName('fixed-sidebar')[0],
            page = document.getElementsByClassName('page-content')[0],
            sidebarLinks = document.getElementsByClassName('fixed-sidebar-link');

        sidebar.classList.toggle('opened');
        page.classList.toggle('opened');

        for(let i=0;i<sidebarLinks.length; i++)
            sidebarLinks[i].classList.toggle('opened');
    }

    render() {
        return (
            <header className='fixed-header'>

                <Container>

                    <button className={`toggle-menu
                    ${this.state.isFixedMenuOpen? 'opened' : ''}`}
                            onClick={this.toggleMenu}>
                        <i className='fa fa-bars' />
                        <i className={`fa fa-caret-${this.state.isFixedMenuOpen?
                            'left' : 'right'}`} />
                    </button>

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