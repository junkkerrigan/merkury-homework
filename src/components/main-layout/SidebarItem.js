import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import '../../scss/main-layout/SidebarItem.scss';

class SidebarItem extends Component {

    constructor(props) {
        super(props);
    }

    componentDidUpdate() {
        console.log(document.getElementsByClassName('fixed-sidebar')[0]);
    }

    render() {
        return (
          <li className='fixed-sidebar-item'>

              <Link to={this.props.target} className={`fixed-sidebar-link
                ${(this.props.active===this.props.target)? 'active' : ''}
                `}>

                  <img src={this.props.icon} width={this.props.sizes.w}
                        height={this.props.sizes.h}/>

                  <span>{this.props.text}</span>

              </Link>

          </li>
        );
    }
}

export default SidebarItem;