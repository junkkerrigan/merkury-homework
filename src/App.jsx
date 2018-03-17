import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import store from './redux-stuff/store';
import Sign from './components/pages/Sign';
import FixedHeader from './components/main-layout/FixedHeader';
import FixedSidebar from './components/main-layout/FixedSidebar';
import Home from './components/pages/Home';
import Workflow from './components/pages/Workflow';
import Statistics from './components/pages/Statistics';
import Calendar from './components/pages/Calendar';
import Users from './components/pages/Users';

const browserHistory = createBrowserHistory();

const App = () => (
  <Provider store={store}>

    <Router history={browserHistory}>

      <div>

        <Route exact path="/" component={Sign} />

        <Route strict path="/:page" component={FixedHeader} />

        <Route strict path="/:page" component={FixedSidebar} />

        <Switch>

          <Route path="/home" component={Home} />

          <Route path="/workflow" component={Workflow} />

          <Route path="/calendar" component={Calendar} />

          <Route path="/users" component={Users} />

          <Route path="/statistics" component={Statistics} />

        </Switch>

      </div>

    </Router>

  </Provider>
);

export default App;
