import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import '../../scss/main-layout/UserNotifications.scss';

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
      isUserNotificationsOpen: !this.state.isUserNotificationsOpen,
    });
  }

  render() {
    return (
      <ButtonDropdown
        isOpen={this.state.isUserNotificationsOpen}
        className="user-notifications"
        toggle={this.toggleUserNotifications}
      >
        <DropdownToggle color="transparent">
          <i className="fa fa-bell" />
          {
                        (this.props.notificationsNumber === 0) ? '' :
                        <span className="user-notifications-number">
                          {this.props.notificationsNumber}
                        </span>
                    }
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Your notifications</DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
    );
  }
}

UserNotifications.propTypes = {
  notificationsNumber: PropTypes.number,
};

UserNotifications.defaultProps = {
  notificationsNumber: 0,
};

export default UserNotifications;
