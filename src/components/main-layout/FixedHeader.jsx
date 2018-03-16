import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';
import { connect } from 'react-redux';
import UserMenu from './UserMenu';
import UserNotifications from './UserNotifications';
import UserMessages from './UserMessages';
import { toggleMenu } from '../../actions';

import '../../scss/main-layout/FixedHeader.scss';

const mapStateToProps = state => {
  return {
    isFixedMenuOpen: state.menu.isFixedMenuOpen
  }
};

const mapDispatchToProps = dispatch => {
  return {
    toggleMenu: () => dispatch(toggleMenu())
  }
};

class FixedHeader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messagesNumber: 0,
      notificationsNumber: 3,
      isFixedMenuOpen: false,
    };

    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState({
      isFixedMenuOpen: !this.state.isFixedMenuOpen,
    });

    this.props.toggleMenu();
    /*const sidebar = document.getElementsByClassName('fixed-sidebar')[0],
      page = document.getElementsByClassName('page-content')[0];
    sidebar.classList.toggle('opened');
    page.classList.toggle('opened');*/

  }

  render() {
    return (
      <header className="fixed-header">

        <Container>

          <button
            className={`toggle-menu ${this.props.isFixedMenuOpen ? 'opened' : ''}`}
            onClick={this.toggleMenu}
          >
            <i className="fa fa-bars" />
            <i className={`fa fa-caret-${this.props.isFixedMenuOpen ? 'left' : 'right'}`} />
          </button>

          <label className="search-box-wrapper">
            <i className="fa fa-search" />
            <input
              type="text"
              name="search-box"
              className="search-box"
              placeholder="..."
            />
          </label>

          <Link to="/" href="/" className="new-project">
            <i className="fa fa-plus" />
            Add project
          </Link>

          <UserMessages messagesNumber={this.state.messagesNumber} />

          <UserNotifications notificationsNumber={this.state.notificationsNumber} />

          <UserMenu />

        </Container>

      </header>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FixedHeader);
