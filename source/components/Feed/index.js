import React, {Component} from 'react';
import moment from 'moment';

import Styles from "./styles.m.css";
import StatusBar from "../StatusBar";
import Composer from "../Composer";
import Post from "../Post";
import Spinner from "../Spinner";
import { withProfile } from '../../components/HOC/withProfile';

import {getUniqueID, delay} from "../../instruments";

@withProfile
export default class Feed extends Component {
  state = {
    isPostsFetching: false,
    posts: [
      {
        id: '123',
        comment: 'Hi There!',
        created: 1526825076849,
        likes: [],
      },
      {
        id: '456',
        comment: 'Hello!',
        created: 1526825076855,
        likes: [],
      }
    ]
  };

  _setPostsFetchingState = (state) => {
    this.setState({
      isPostsFetching: state,
    });
  };

  _createPost = async (comment) => {
    this._setPostsFetchingState(true);

    const post = {
      id: getUniqueID(),
      created: moment().unix(),
      comment,
      likes: [],
    };

    await delay(1200);

    this.setState(({posts}) => ({
      posts: [post, ...posts],
      isPostsFetching: false,
    }))
  };

  _likePost = async (id) => {
    const {currentUserFirstName, currentUserLastName} = this.props;

    this._setPostsFetchingState(true);

    await delay(1200);

    const newPosts = this.state.posts.map(post => {
      if (post.id === id) {
        return {
          ...post,
          likes: [
            {
              id: getUniqueID(),
              firstName: currentUserFirstName,
              lastName: currentUserLastName,
            }
          ]
        }
      }

      return post;
    });

    this.setState({
      posts: newPosts,
      isPostsFetching: false,
    })
  };

  _removePost = async (id) => {
    this._setPostsFetchingState(true);

    await delay(1200);

    const newPosts = this.state.posts.filter(post => post.id !== id);

    this.setState({
      posts: newPosts,
      isPostsFetching: false,
    })
  };

  render() {

    const {posts, isPostsFetching} = this.state;

    const postsJSX = posts.map((post) => {
      return (
        <Post
          key={post.id}
          {...post}
          _likePost = { this._likePost }
          _removePost = { this._removePost }
        />
      );
    });

    return (
      <section className={Styles.feed}>
        <Spinner isPostsFetching={isPostsFetching}/>
        <StatusBar/>
        <Composer _createPost={this._createPost}/>
        {postsJSX}
      </section>
    )
  }
}

