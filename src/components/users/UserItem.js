import React, { Component } from 'react';

import '../../scss/users/UserItem.scss';

class UserItem extends Component {
    constructor(props) { // constructor for options
        super(props);

        this.state = {
            isDataOpen: false
        };

        this.openData = this.openData.bind(this);
    }

    openData() {
        this.setState({
            isDataOpen: !this.state.isDataOpen
        });
        console.log(this.state.isDataOpen);
    }

    render() {
        return (
          <li className='user row no-gutters'>

              <div className='user-data'>

                  <span className={`circle ${this.props.activity==='online'?
                      'online' : ''}`}>
                      <img src={this.props.icon}
                           />
                  </span>

                  <div className='d-flex flex-column align-items-start user-person'>

                      <span className='user-name ellipsis'>
                          {this.props.name}
                      </span>

                      <span className='user-position ellipsis'>
                          {this.props.position}
                      </span>

                  </div>

                  <button className='user-data-expand' onClick={this.openData} />

              </div>

              <div className={`user-data ${this.state.isDataOpen? '' : 'hidden'}`}>

              <span className={`user-activity ellipsis
                    ${(this.props.activity==='online')?
                  'online' : 'offline'
                  }`}>
                  {
                      (this.props.activity==='online')? 'Online now!' :
                          this.props.activity + ' ago'
                  }
              </span>

              </div>

              <div className={`user-data ${this.state.isDataOpen? '' : 'hidden'}`}>

              <span className='ellipsis user-email'>
                  {this.props.email}
              </span>

              </div>

              <div className={`user-data ${this.state.isDataOpen? '' : 'hidden'}`}>

                <span className='ellipsis user-phone'>
                  {this.props.phone}
                </span>

              </div>

              <div className={`user-data ${this.state.isDataOpen? '' : 'hidden'}`}>

                  <button className='user-options' />

              </div>

          </li>
        );
    }
}

export default UserItem;