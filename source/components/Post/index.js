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

  render() {
    const {
      avatar,
      currentUserFirstName,
      currentUserLastName,
      comment,
      created,
      _likePost,
      _removePost,
      id,
      likes
    } = this.props;

    return (
      <section className={Styles.post}>
        <span className={ Styles.cross} onClick={ () => _removePost(id)}/>
        <img src={avatar}/>
        <a>{currentUserFirstName} {currentUserLastName}</a>
        <time>{moment.unix(created).format('MMMM D h:mm:ss a')}</time>
        <p>{comment}</p>
        <Like id = { id } likes={ likes } _likePost={_likePost} />
      </section>
    )
  }
}

