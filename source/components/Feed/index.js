import React, {Component} from 'react';
import moment from 'moment';

import Styles from "./styles.m.css";
import StatusBar from "../StatusBar";
import Composer from "../Composer";
import Post from "../Post";
import Spinner from "../Spinner";

import { getUniqueID } from "../../instruments";

export default class Feed extends Component {

  constructor () {
    super();

    this._createPost = this._createPost.bind(this);
  }

  state = {
    isPostsFetching: true,
    posts: [
      {
        id: '123',
        comment: 'Hi There!',
        created: 1526825076849
      },
      {
        id: '456',
        comment: 'Hello!',
        created: 1526825076855
      }
    ]
  };

  _createPost ( comment ) {
    const post = {
      id: getUniqueID(),
      created: moment().unix(),
      comment,
    }

    this.setState(( {posts} ) => ({
      posts: [post, ...posts],
    }))
  }

  render() {

    const { posts, isPostsFetching } = this.state;

    const postsJSX = posts.map((post) => {
      return <Post key={post.id} {...post}/>;
    });

    return (
      <section className={Styles.feed}>
        <Spinner isPostsFetching={ isPostsFetching }/>
        <StatusBar/>
        <Composer _createPost = { this._createPost }/>
        {postsJSX}
      </section>
    )
  }
}

