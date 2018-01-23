import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import LoginMain from "../login-page/LoginMain";

import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';

import logo from '../../img/entire-logo.png'


class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            currentTab: 'login'
        };

        this.toggleTab = this.toggleTab.bind(this);
    }

    toggleTab(tab) {
        if (this.state.currentTab !== tab) {
            this.setState({
                currentTab: tab
            });
        }
    }

    render() {
        return (
            <div className='login-wrapper'>

                <section className='login'>

                    <header className='login-header'>

                        <h1 className='logo'>

                            <Link to="/">
                                <img src={logo} width="116" height="32"/>
                            </Link>

                        </h1>

                        <Nav tabs>

                            <NavItem className={ (this.state.currentTab === 'register')?
                                'active' : '' } >

                                <NavLink
                                    className={ (this.state.currentTab === 'register')?
                                        'active' : '' } onClick={ () => {
                                    this.toggleTab('register'); }}>

                                    Register

                                </NavLink>

                            </NavItem>

                            <NavItem className={ (this.state.currentTab === 'login')?
                                'active' : '' } >

                                <NavLink
                                    className={ (this.state.currentTab === 'login')?
                                        'active' : '' } onClick={ () => {
                                    this.toggleTab('login'); }}>

                                    Login

                                </NavLink>

                            </NavItem>

                        </Nav>

                    </header>

                    <TabContent activeTab={this.state.currentTab}>

                        <TabPane tabId='register'>

                        </TabPane>

                        <TabPane tabId='login'>

                            <LoginMain/>

                        </TabPane>

                    </TabContent>

                </section>

            </div>
        );
    }
}

export default Login;