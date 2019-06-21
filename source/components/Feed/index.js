import React, {Component} from 'react';


import Styles from "./styles.m.css";
import StatusBar from "../StatusBar";
import Composer from "../Composer";
import Post from "../Post";
import Spinner from "../Spinner";

export default class Feed extends Component {

  state = {
    isSpinning: true,
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

  render() {

    const {posts, isSpinning} = this.state;

    const postsJSX = posts.map((post) => {
      return <Post key={post.id} {...post}/>;
    });

    return (
      <section className={Styles.feed}>
        <Spinner isSpinning={ isSpinning }/>
        <StatusBar/>
        <Composer/>
        {postsJSX}
      </section>
    )
  }
}

