import React, {Component} from 'react';

import Styles from "./styles.m.css";
import {withProfile} from '../../components/HOC/withProfile';

@withProfile
export default class Profile extends Component {
  render() {

    const { currentUserFirstName, currentUserLastName, avatar } = this.props;

    return (
      <section className={Styles.profile}>
        <h1>Welcome, {currentUserFirstName} {currentUserLastName}</h1>
        <img src={avatar}/>
      </section>
    )
  }
}

