import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import LoginTab from '../sign/LoginTab';
import RegisterTab from '../sign/RegisterTab';

import '../../scss/sign/SignPage.scss';

import logo from '../../img/entire-logo.png';

class Sign extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentTab: 'login',
    };

    this.toggleTab = this.toggleTab.bind(this);
  }

  toggleTab(tab) {
    if (this.state.currentTab !== tab) {
      this.setState({
        currentTab: tab,
      });
    }
  }

  render() {
    return (
      <div className="sign-wrapper">

        <section className="sign">

          <header className="sign-header">

            <h1 className="logo">

              <Link to="/" href="/">
                <img src={logo} width="116" height="32" alt="site logo" />
              </Link>

            </h1>

            <Nav tabs>

              <NavItem className={(this.state.currentTab === 'register') ?
                                'active' : ''}
              >

                <NavLink
                  className={(this.state.currentTab === 'register') ?
                                        'active' : ''}
                  onClick={() => {
                                    this.toggleTab('register');
}}
                >

                                    Register

                </NavLink>

              </NavItem>

              <NavItem className={(this.state.currentTab === 'login') ?
                                'active' : ''}
              >

                <NavLink
                  className={(this.state.currentTab === 'login') ?
                                        'active' : ''}
                  onClick={() => {
                                    this.toggleTab('login');
}}
                >

                                    Login

                </NavLink>

              </NavItem>

            </Nav>

          </header>

          <TabContent activeTab={this.state.currentTab}>

            <TabPane tabId="register">

              <RegisterTab />

            </TabPane>

            <TabPane tabId="login">

              <LoginTab />

            </TabPane>

          </TabContent>

        </section>

      </div>
    );
  }
}

export default Sign;
