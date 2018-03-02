import React, { Component } from 'react';

import '../../scss/main-layout/FixedSidebar.scss';

import map from 'lodash/map';

import SidebarItem from "./SidebarItem";

import { Link } from 'react-router-dom'

import homeIcon from '../../img/home-icon.png';
import workflowIcon from '../../img/workflow-icon.png';
import statisticsIcon from '../../img/statistics-icon.png';
import calendarIcon from '../../img/calendar-icon.png';
import usersIcon from '../../img/users-icon.png';
import settingsIcon from '../../img/settings-icon.png';
import logo from '../../img/entire-logo.png';

import keyIndex from 'react-key-index';

class FixedSidebar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isFixedMenuOpen: false,
            activeLink: this.props.location.pathname
        };
    }

    render() {

        let linksData = [
            {
                target: '/home',
                icon: homeIcon,
                text: 'Home',
                sizes: {
                    w: '18',
                    h: '15.75'
                }
            },
            {
                target: '/workflow',
                icon: workflowIcon,
                text: 'Workflow',
                sizes: {
                    w: '15',
                    h: '14.25'
                }
            },
            {
                target: '/statistics',
                icon: statisticsIcon,
                text: 'Statistics',
                sizes: {
                    w: '18',
                    h: '16.5'
                }
            },
            {
                target: '/calendar',
                icon: calendarIcon,
                text: 'Calendar',
                sizes: {
                    w: '15',
                    h: '15'
                }
            },
            {
                target: '/users',
                icon: usersIcon,
                text: 'Users',
                sizes: {
                    w: '15',
                    h: '15'
                }
            },
            {
                target: '/settings',
                icon: settingsIcon,
                text: 'Settings',
                sizes: {
                    w: '15.75',
                    h: '16.5'
                }
            }
        ];

        linksData = keyIndex(linksData, 1);

        //TODO: fix problem with borders on elements
        return (
            <aside className='fixed-sidebar'>

                <h1 className='fixed-sidebar-logo'>
                    <Link to='/home'>
                        <img src={logo} width='135' height='37.5' />
                    </Link>
                </h1>

                <ul className='fixed-sidebar-list'>

                    {
                        map(linksData, (item) => {
                            return <SidebarItem target={item.target}
                                    icon={item.icon} text={item.text}
                                    active={'/' + this.props.match.params.page}
                                    sizes={item.sizes}
                                    key={item._targetId}/>
                        } )
                    }

                </ul>

            </aside>
        );
    }
}

export default FixedSidebar;