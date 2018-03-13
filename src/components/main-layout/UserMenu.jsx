import React, { Component } from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Redirect, Link } from 'react-router-dom';

import '../../scss/main-layout/UserMenu.scss';

import userIcon from '../../img/user-shortcut-icon.png';

class UserMenu extends Component {
  constructor(props) {
    super(props);

    this.toggleUserMenu = this.toggleUserMenu.bind(this);
    this.onLogout = this.onLogout.bind(this);
    this.state = {
      isUserMenuOpen: false,
      logout: false,
    };
  }

  onLogout() {
    this.setState({
      logout: true,
    });
    localStorage.setItem('currentUser', undefined);
  }

  toggleUserMenu() {
    this.setState({
      isUserMenuOpen: !this.state.isUserMenuOpen,
    });
  }

  render() {
    return (
      <ButtonDropdown
        isOpen={this.state.isUserMenuOpen}
        className="user-menu"
        toggle={this.toggleUserMenu}
      >
        <DropdownToggle caret color="transparent">
          <img src={userIcon} width="30" height="30" alt="user icon" />
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Your menu</DropdownItem>
          <DropdownItem>
            <button className="logout" onClick={this.onLogout}>Log out</button>
            { this.state.logout && <Redirect to="/" href="/" /> }
          </DropdownItem>
          <DropdownItem>
            <Link to="/" href="/">New project</Link>
          </DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
    );
  }
}

export default UserMenu;
