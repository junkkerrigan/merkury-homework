import React, { Component } from 'react';

import { Router, Route, Redirect } from 'react-router-dom';

import Sign from "./components/pages/Sign";

import FixedHeader from "./components/main-layout/FixedHeader";

import FixedSidebar from "./components/main-layout/FixedSidebar";

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

                </div>

            </Router>

        );
    }
}

export default App;
