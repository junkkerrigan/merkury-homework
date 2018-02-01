import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import '../../scss/main-layout/SidebarItem.scss';

class SidebarItem extends Component {

    constructor(props) {
        super(props);


    }

    render() {
        return (
          <li className='fixed-sidebar-item'>

              <Link to={this.props.target} className={`fixed-sidebar-link
                ${(this.props.active===this.props.target)? 'active' : ''}
                ${this.props.isOpened? 'opened' : ''}`}>

                  <img src={this.props.icon} width={this.props.sizes.w}
                        height={this.props.sizes.h}/>

                  <span>{this.props.text}</span>

              </Link>

          </li>
        );
    }
}

export default SidebarItem;