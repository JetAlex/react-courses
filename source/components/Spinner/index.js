import React, {Component} from 'react';
import { createPortal} from 'react-dom';

import Styles from './styles.m.css';

const portal = document.getElementById('spinner');

export default class Spinner extends Component {
  render () {
    const {isSpinning} = this.props;

    return isSpinning ? createPortal( <div className={ Styles.spinner} />, portal ) : null;
  }
}
