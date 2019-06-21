import React, {Component} from 'react';

import Styles from './styles.m.css';
import avatar from '../../theme/assets/lisa.png';

export default class StatusBar extends Component {
  render() {
    return (
      <section className={Styles.statusBar}>
        <button>
          <img src={avatar}/>
          <span>Lisa</span>
          &nbsp;
          <span>Simpson</span>
        </button>
      </section>
    )
  }
}
