import React, { Component } from 'react';

import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import { Redirect } from 'react-router-dom';

import userIcon from '../../img/user-shortcut-icon.png';

import '../../scss/main-layout/UserMenu.scss';

import { Link } from 'react-router-dom';

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
        localStorage.setItem('currentUser', 'undefined');
    }

    render() {
        return (
            <ButtonDropdown isOpen={this.state.isUserMenuOpen}
                            className='user-menu' toggle={this.toggleUserMenu}>
                <DropdownToggle caret color='transparent'>
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
                    <DropdownItem>
                        <Link to='/new-project'>New project</Link>
                    </DropdownItem>
                </DropdownMenu>
            </ButtonDropdown>
        );
    }
}

export default UserMenu;