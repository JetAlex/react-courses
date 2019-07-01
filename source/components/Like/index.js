import React, {Component} from 'react';
import Styles from './styles.m.css';
import {string, func, number, arrayOf, shape} from 'prop-types';
import cx from 'classnames';

export default class Like extends Component {

  constructor() {
    super();

    this._getLikedByMe = this._getLikedByMe.bind(this);
    this._getLikeStyles = this._getLikeStyles.bind(this);
    this._likePost = this._likePost.bind(this);
  }

  static propTypes = {
    _likePost: func.isRequired,
    id: number.isRequired,
    likes: arrayOf(
      shape({
        id: string.isRequired,
        firstName: string.isRequired,
        lastName: string.isRequired,
      }),
    ).isRequired,
  };

  _likePost () {
    const { _likePost, id} = this.props;

    _likePost(id);
  }

  _getLikedByMe () {
    const {
      currentUserFirstName,
      currentUserLastName,
      likes,
    } = this.props;

    return likes.some(({ firstName, lastName}) => {
      return (
        `${firstName} ${lastName}` ===
        `${currentUserFirstName} ${currentUserLastName}`
      );
    })
  }

  _getLikeStyles () {
    const likedByMe = this._getLikedByMe();

    return cx(Styles.icon, {
      [Styles.liked]: likedByMe,
    })
  }

  render() {
    const likeStyles = this._getLikeStyles();

    return (
      <section className={Styles.like}>
        <span className={ likeStyles } onClick={ this._likePost }>Like</span>
      </section>
    )
  }
}

