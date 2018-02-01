import React, { Component } from 'react';

import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import '../../scss/main-layout/UserMessages.scss';

class UserMessages extends Component {
    constructor(props) {
        super(props);

        this.toggleUserMessages = this.toggleUserMessages.bind(this);

        this.state = {
            isUserMessagesOpen: false,

        };
    }

    toggleUserMessages() {
        this.setState({
            isUserMessagesOpen: !this.state.isUserMessagesOpen
        });
    }

    render() {
        return (
            <ButtonDropdown isOpen={this.state.isUserMessagesOpen}
                            className='user-messages' toggle={this.toggleUserMessages}>
                <DropdownToggle color='transparent'>
                    <i className='fa fa-envelope' />
                    {
                        (this.props.messagesNumber === 0)? '' :
                            <span className='user-messages-number'>
                                {this.props.messagesNumber}
                            </span>
                    }
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem header>Your messages</DropdownItem>
                </DropdownMenu>
            </ButtonDropdown>
        );
    }
}

export default UserMessages;