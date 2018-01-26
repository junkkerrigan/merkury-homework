import React, { Component } from 'react';

import { Router, Route, Redirect } from 'react-router-dom';

import Sign from "./components/pages/Sign";

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

                    <Route exact path='/home' render={
                        () => { return <p>pp</p>; }
                    } />

                </div>

            </Router>

        );
    }
}

export default App;
