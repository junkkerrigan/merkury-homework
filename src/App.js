import React, { Component } from 'react';

import { Router, Route, Switch } from 'react-router-dom';

import './scss/app.scss';

import './scss/_general.scss';

import Sign from "./components/pages/Sign";

import FixedHeader from "./components/main-layout/FixedHeader";

import FixedSidebar from "./components/main-layout/FixedSidebar";

import Home from "./components/pages/Home";

import Workflow from './components/pages/Workflow';

import Calendar from "./components/pages/Calendar";

import Users from "./components/users/Users";

import { createBrowserHistory } from 'history';

const browserHistory=createBrowserHistory();

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router history={browserHistory}>

                <div>

                    <Route exact path='/' component={Sign} />

                    <Route strict path='/:page' component={FixedHeader} />

                    <Route strict path='/:page' component={FixedSidebar} />

                    <Switch>

                        <Route path='/home' component={Home} />

                        <Route path='/workflow' component={Workflow} />

                        <Route path='/calendar' component={Calendar} />

                        <Route path='/users' component={Users} />

                    </Switch>

                </div>

            </Router>

        );
    }
}

export default App;
