import React from 'react';

import Styles from './styles.m.css';
import {withProfile} from '../HOC/withProfile';

import {Transition} from 'react-transition-group';
import {fromTo} from 'gsap';

const Postman = (props) => {
  const _animatePostmanEnter = (postman) => {
    fromTo(
      postman,
      2,
      {x: 1000},
      {x: 0}
    );
  };
  const _animatePostmanExit = (postman) => {
    fromTo(
      postman,
      2,
      {x: 0},
      {x: 1000}
    );
  };

  return (
    <Transition
      in
      appear
      timeout={
        {
          appear: 2000,
          enter: 4000,
        }
      }
      onEnter={_animatePostmanEnter}
      onEntered={_animatePostmanExit}
    >
      <section className={Styles.postman}>
        <img src={props.avatar}/>
        <span>Welcome online, {props.currentUserFirstName}</span>
      </section>
    </Transition>
  )
};

export default withProfile(Postman);

