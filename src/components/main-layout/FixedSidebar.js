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

class FixedSidebar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isFixedMenuOpen: true,
            activeLink: this.props.location.pathname
        };

        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu() {
        this.setState({
            isFixedMenuOpen: !this.state.isFixedMenuOpen
        });
    }

    render() {

        const linksData=[
            {
                target: '/home',
                icon: homeIcon,
                text: 'Home',
                sizes: {
                    w: '12',
                    h: '10.5'
                }
            },
            {
                target: '/workflow',
                icon: workflowIcon,
                text: 'Workflow',
                sizes: {
                    w: '10',
                    h: '9.5'
                }
            },
            {
                target: '/statistics',
                icon: statisticsIcon,
                text: 'Statistics',
                sizes: {
                    w: '12',
                    h: '11'
                }
            },
            {
                target: '/calendar',
                icon: calendarIcon,
                text: 'Calendar',
                sizes: {
                    w: '10',
                    h: '10'
                }
            },
            {
                target: '/users',
                icon: usersIcon,
                text: 'Users',
                sizes: {
                    w: '10',
                    h: '10'
                }
            },
            {
                target: '/settings',
                icon: settingsIcon,
                text: 'Settings',
                sizes: {
                    w: '10.5',
                    h: '11'
                }
            }
        ];

        console.log(this.props);
        return (
            <aside className={`fixed-sidebar ${this.state.isFixedMenuOpen?
                'opened' : ''}`}>

                <button className='toggle-menu' onClick={this.toggleMenu}>
                    <i className='fa fa-bars' />
                    <i className={`fa fa-caret-${this.state.isFixedMenuOpen?
                        'left' : 'right'}`} />
                </button>

                <h1 className='fixed-sidebar-logo'>
                    <Link to='/home'>
                        <img src={logo} width='90' height='25' />
                    </Link>
                </h1>

                <ul className='fixed-sidebar-list'>

                    {
                        map(linksData, (item, index) => {
                            return <SidebarItem target={item.target}
                            icon={item.icon} text={item.text}
                            active={'/' + this.props.match.params.page}
                            sizes={item.sizes}
                            isOpened={this.state.isFixedMenuOpen} />
                        } )
                    }

                </ul>

            </aside>
        );
    }
}

export default FixedSidebar;