import React, { Component } from 'react';

import '../../scss/users/UserItem.scss';

class UserItem extends Component {
    constructor(props) { // constructor for options
        super(props);
    }

    render() {
        return (
          <li className='user row no-gutters'>

              <div className='user-data'>

                  <span className={`circle ${this.props.activity==='online'?
                      'online' : ''}`}>
                      <img width='35' height='35' src={this.props.icon}
                           />
                  </span>

                  <div className='d-flex flex-column align-items-start'>

                      <span className='user-name hidden'>
                          {this.props.name}
                      </span>

                      <span className='user-position hidden'>
                          {this.props.position}
                      </span>

                  </div>

              </div>

              <div className='user-data'>

                  <span className={`user-activity
                        ${(this.props.activity==='online')?
                      'online' : 'offline'
                  }`}>
                      {
                          (this.props.activity==='online')? 'Online now!' :
                              this.props.activity + ' ago'
                      }
                  </span>

              </div>

              <div className='user-data'>

                  <span className='hidden user-email'>
                      {this.props.email}
                  </span>

              </div>

              <div className='user-data'>

                    <span className='hidden user-phone'>
                      {this.props.phone}
                    </span>

              </div>

              <div className='user-data justify-content-center'>

                  <button className='user-options' />

              </div>

          </li>
        );
    }
}

export default UserItem;