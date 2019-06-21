import React, { Component } from 'react';


import Styles from "./styles.m.css";
import StatusBar from "../StatusBar";
import Composer from "../Composer";
import Post from "../Post";

export default class Feed extends Component {
  render () {
    return (
      <section className={ Styles.feed }>
        <StatusBar />
        <Composer />
        <Post />
      </section>
    )
  }
}

