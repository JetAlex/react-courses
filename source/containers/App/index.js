// Core
import React, {Component} from 'react';
import {hot} from 'react-hot-loader';
import {Switch, Route, Redirect} from 'react-router-dom';
import Feed from "../../components/Feed";
import Catcher from "../../components/Catcher";
import {Provider} from '../../components/HOC/withProfile';

import avatar from '../../theme/assets/lisa.png';
import Profile from "../../components/Profile";
import StatusBar from "../../components/StatusBar";

const options = {
  avatar,
  currentUserFirstName: 'Алексей',
  currentUserLastName: 'Дьяченко'
};

@hot(module)
export default class App extends Component {
  render() {
    return (
      <Catcher>
        <Provider value={options}>
          <StatusBar/>
          <Switch>
            <Route component={Feed} path='/feed'/>
            <Route component={Profile} path='/profile'/>
            <Redirect to='/feed'/>
          </Switch>
        </Provider>
      </Catcher>
    )
  }
}
