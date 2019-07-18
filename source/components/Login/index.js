import React, {Component} from 'react';

import Styles from "./styles.m.css";

export default class Login extends Component {

  state = {
    firstName: '',
    lastName: '',
    firstNameError: false,
    lastNameError: false,
  };

  _updateComment = (event, key) => {
    this.setState({
      [key]: event.target.value,
    })
  };

  _handleFormSubmit = (event) => {
    event.preventDefault();
    const {firstName, lastName} = this.state;

    if (!firstName || !lastName) {
      this.setState({
        firstNameError: firstName === '',
        lastNameError: lastName === '',
      });

      return;
    }

    const {logIn} = this.props;
    logIn(firstName, lastName);
  };

  render() {

    const {firstName, lastName, firstNameError, lastNameError} = this.state;

    return (
      <section className={Styles.login}>
        <form onSubmit={this._handleFormSubmit}>
          <input
            className={`${Styles['input-field']} ${firstNameError ? Styles['input-field--error'] : ''}`}
            placeholder='First Name'
            value={firstName}
            type='text'
            onChange={(event) => this._updateComment(event, 'firstName')}
          />
          <input
            className={`${Styles['input-field']} ${lastNameError ? Styles['input-field--error'] : ''}`}
            placeholder='Last Name'
            value={lastName}
            type='text'
            onChange={(event) => this._updateComment(event, 'lastName')}
          />
          <input className={Styles['input-button']} type='submit' onClick={this._handleFormSubmit} value='Log In'/>
        </form>
      </section>
    )
  }
}

