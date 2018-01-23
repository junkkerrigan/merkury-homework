import React, { Component } from 'react';

import { Router, Route, Link } from 'react-router-dom';

import Login from "./components/pages/Login";

import { createBrowserHistory } from 'history';

const browserHistory=createBrowserHistory();

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router history={browserHistory}>

                <Route path='/' component={Login} />

            </Router>

        );
    }
}

export default App;
