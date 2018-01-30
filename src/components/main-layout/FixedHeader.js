import React, { Component } from 'react';

import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import { Link, Redirect } from 'react-router-dom';

import userIcon from '../../img/user-shortcut-icon.png';

class UserMenu extends Component {
    constructor(props) {
        super(props);

        this.toggleUserMenu = this.toggleUserMenu.bind(this);
        this.onLogout = this.onLogout.bind(this);
        this.state = {
            isUserMenuOpen: false,
            logout: false
        };
    }

    toggleUserMenu() {
        this.setState({
            isUserMenuOpen: !this.state.isUserMenuOpen
        });
    }

    onLogout() {
        this.setState({
            logout: true
        });
    }

    render() {
        return (
            <ButtonDropdown isOpen={this.state.isUserMenuOpen}
                            className='user-menu' toggle={this.toggleUserMenu}>
                <DropdownToggle caret color=''>
                    <img src={userIcon} width='30' height='30' />
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem header>Your menu</DropdownItem>
                    <DropdownItem>
                        <button className='logout' onClick={this.onLogout}>Log out</button>
                        {
                            this.state.logout && <Redirect to='/' />
                        }
                    </DropdownItem>
                </DropdownMenu>
            </ButtonDropdown>
        );
    }
}

class UserNotifications extends Component {
    constructor(props) {
        super(props);

        this.toggleUserNotifications = this.toggleUserNotifications.bind(this);

        this.state = {
            isUserNotificationsOpen: false,

        };
    }

    toggleUserNotifications() {
        this.setState({
            isUserNotificationsOpen: !this.state.isUserNotificationsOpen
        });
    }

    render() {
        return (
            <ButtonDropdown isOpen={this.state.isUserNotificationsOpen}
                        className='user-notifications' toggle={this.toggleUserNotifications}>
                <DropdownToggle color=''>
                    <i className='fa fa-bell' />
                    <span className='user-notifications-number'>
                        {this.props.notifNumber}
                    </span>
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem header>Your notifications</DropdownItem>
                </DropdownMenu>
            </ButtonDropdown>
        );
    }
}

class FixedHeader extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isFixedMenuOpen: false,
            notificationsNumber: 3
        };

        this.toggleMenu = this.toggleMenu.bind(this);

    }

    toggleMenu() {
        this.setState({
            isFixedMenuOpen: !this.state.isFixedMenuOpen
        })
    }

    //TODO: rewrite messages and notifications as dropdowns

    render() {
        return (
            <header className='fixed-header'>

                <button className={`toggle-menu ${this.state.isFixedMenuOpen?
                'open' : 'close'}-menu`} onClick={this.toggleMenu}>
                    <i className='fa fa-bars' />
                    <i className={`fa fa-caret-${this.state.isFixedMenuOpen?
                        'right' : 'left'}`} />
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

                <button className={`toggle-messages ${this.state.isMessagesOpened?
                    'open' : 'close'}-messages`}>
                    <i className='fa fa-envelope' />
                </button>

                <UserNotifications notifNumber={this.state.notificationsNumber} />

                <UserMenu />

            </header>
        );
    }
}

export default FixedHeader;