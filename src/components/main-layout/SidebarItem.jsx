import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import '../../scss/main-layout/SidebarItem.scss';

const SidebarItem = props => (
  <li className="fixed-sidebar-item">

    <Link
      to={props.target}
      href={props.target}
      className={`fixed-sidebar-link ${(props.active === props.target) ? 'active' : ''}`}
    >

      <img
        src={props.icon}
        width={props.sizes.w}
        height={props.sizes.h}
        alt=""
      />

      <span>{props.text}</span>

    </Link>

  </li>
);

SidebarItem.propTypes = {
  target: PropTypes.string,
  active: PropTypes.string,
  icon: PropTypes.string,
  text: PropTypes.string,
  sizes: PropTypes.objectOf(PropTypes.string)
};

SidebarItem.defaultProps = {
  target: '',
  active: '',
  icon: '',
  text: '',
  sizes: {}
};

export default SidebarItem;
