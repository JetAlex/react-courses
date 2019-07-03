import React, {Component} from 'react';
import moment from 'moment';
import { func, string, number, array } from 'prop-types';

import Styles from './styles.m.css';

import Like from '../Like';
import {withProfile} from '../../components/HOC/withProfile';

@withProfile
export default class Post extends Component {
  static propTypes = {
    _likePost: func.isRequired,
    _removePost: func.isRequired,
    comment: string.isRequired,
    created: number.isRequired,
    likes: array.isRequired,
    id: string.isRequired,
  };

  _getCross = () => {
    const { firstName, lastName, currentUserFirstName, currentUserLastName, id, _removePost } = this.props;

    return `${firstName} ${lastName}` === `${currentUserFirstName} ${currentUserLastName}` ? (
      <span className={ Styles.cross} onClick={ () => _removePost(id)}/>
    ) : null;
  };

  render() {
    const {
      avatar,
      firstName,
      lastName,
      comment,
      created,
      _likePost,
      id,
      likes
    } = this.props;

    const cross = this._getCross();

    return (
      <section className={Styles.post}>
        {cross}
        <img src={avatar}/>
        <a>{firstName} {lastName}</a>
        <time>{moment.unix(created).format('MMMM D h:mm:ss a')}</time>
        <p>{comment}</p>
        <Like id = { id } likes={ likes } _likePost={_likePost} />
      </section>
    )
  }
}

