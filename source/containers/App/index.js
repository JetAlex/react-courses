// Core
import React, {Component} from 'react';
import {hot} from 'react-hot-loader';
import {Switch, Route, Redirect} from 'react-router-dom';
import Feed from "../../components/Feed";
import Catcher from "../../components/Catcher";
import {Provider} from '../../components/HOC/withProfile';

import avatar from '../../theme/assets/lisa.png';
import Profile from "../../components/Profile";
import Login from "../../components/Login";
import StatusBar from "../../components/StatusBar";

@hot(module)
export default class App extends Component {

  state = {
    user: {},
    isLoggedIn: false,
  };

  _logIn = (currentUserFirstName, currentUserLastName) => {
    this.setState({
      user: {
        currentUserFirstName,
        currentUserLastName,
        avatar,
      },
      isLoggedIn: true
    });
  };

  _logOut = () => {
    this.setState({
      user: {},
      isLoggedIn: false
    })
  };

  getRoutes() {
    const {isLoggedIn} = this.state;

    return isLoggedIn ? (
      <Switch>
        <Route component={Feed} path='/feed'/>
        <Route component={Profile} path='/profile'/>
        <Redirect to='/feed'/>
      </Switch>
    ) : (
      <Switch>
        <Route
          exact
          render={() => (
            <Login
              logIn={this._logIn}
              logOut={this._logOut}
            />
          )}
          path='/'
        />
        <Redirect to='/'/>
      </Switch>
    );
  }

  render() {

    const {user} = this.state;

    return (
      <Catcher>
        <Provider
          value={{
            ...user,
            logOut: this._logOut
          }}
        >
          <StatusBar/>
          {this.getRoutes()}
        </Provider>
      </Catcher>
    )
  }
}
