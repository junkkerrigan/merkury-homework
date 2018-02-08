import React, { Component } from 'react';

import { Router, Route, Redirect } from 'react-router-dom';

import './scss/app.scss';

import './scss/_general.scss';

import Sign from "./components/pages/Sign";

import FixedHeader from "./components/main-layout/FixedHeader";

import FixedSidebar from "./components/main-layout/FixedSidebar";

import Home from "./components/pages/Home";

import Workflow from './components/pages/Workflow';

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

                    <Route path='/home' component={Home} />

                    <Route path='/workflow' component={Workflow} />

                </div>

            </Router>

        );
    }
}

export default App;
