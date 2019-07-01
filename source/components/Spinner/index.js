import React, {Component} from 'react';
import { createPortal} from 'react-dom';

import Styles from './styles.m.css';

const portal = document.getElementById('spinner');

export default class Spinner extends Component {
  render () {
    const { isPostsFetching } = this.props;

    return isPostsFetching ? createPortal( <div className={ Styles.spinner} />, portal ) : null;
  }
}
