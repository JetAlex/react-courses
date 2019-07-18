import React, {Component} from 'react';
import {Transition} from 'react-transition-group';
import {fromTo} from 'gsap';
import { Link } from 'react-router-dom';

import Styles from './styles.m.css';
import cx from 'classnames';

import {withProfile} from '../../components/HOC/withProfile';
import {socket} from '../../socket/init';

@withProfile
export default class StatusBar extends Component {
  state = {
    online: false,
  };

  componentDidMount() {
    socket.on('connect', () => {
      this.setState({
        online: true,
      })
    });

    socket.on('disconnect', () => {
      this.setState({
        online: false,
      })
    })
  }

  componentWillUnmount() {
    socket.removeListener('connect');
    socket.removeListener('disconnect');
  }

  _animateStatusBarEnter = (statusBar) => {
    fromTo(statusBar, 1, {opacity: 0}, {opacity: 1});
  };

  getLinks() {
    const {currentUserFirstName, currentUserLastName, avatar, logOut} = this.props;

    return currentUserFirstName && currentUserLastName ? (
      <>
        <Link to = '/profile'>
          {avatar ? <img src={avatar}/> : null}
          <span>{currentUserFirstName}</span>
        </Link>
        <Link to = '/feed'>Feed</Link>

        <button onClick={logOut}>
          Log Out
        </button>
      </>
    ) : null;
  }

  render() {
    const {online} = this.state;

    const statusStyle = cx(Styles.status, {
      [Styles.online]: online,
      [Styles.offline]: !online,
    });

    const statusMessage = online ? 'Online' : 'Offline';

    return (
      <Transition
        in
        appear
        timeout={1000}
        onEnter={this._animateStatusBarEnter}
      >
        <section className={Styles.statusBar}>
          <div className={statusStyle}>
            <div>{statusMessage}</div>
            <span/>
          </div>
          {this.getLinks()}
        </section>
      </Transition>
    )
  }
}
