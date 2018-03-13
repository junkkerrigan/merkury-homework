import React, { Component } from 'react';
import { Form, Input, Button, FormGroup, FormFeedback } from 'reactstrap';
import { Redirect } from 'react-router-dom';

import '../../scss/sign/LoginTab.scss';

class LoginTab extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isFormSubmitted: undefined,
      isUsernameValid: undefined,
      isPasswordValid: undefined,
    };

    this.checkUser = this.checkUser.bind(this);
    this.checkUsername = this.checkUsername.bind(this);
  }

  checkUser(event) {
    event.preventDefault();

    const username = event.target.elements[0].value,
      password = event.target.elements[1].value;

    const userData = JSON.parse(localStorage.getItem(username));

    if (userData.password === password) {
      localStorage.setItem('currentUser', username);
      this.setState({
        isFormSubmitted: true,
      });
    } else {
      this.setState({
        isPasswordValid: false,
      });
    }
  }

  checkUsername(event) {
    const username = event.target.value;
    if (username.length === 0) {
      this.setState({
        isUsernameValid: undefined,
      });
    } else if (!localStorage.getItem(username)) {
      this.setState({
        isUsernameValid: false,
      });
    } else {
      this.setState({
        isUsernameValid: true,
      });
    }
  }

  render() {
    return (
      <div className="tab">

        <h2 className="tab-title login">
                  Welcome <span className="highlight">back!</span>
        </h2>

        <Form className="form" onSubmit={this.checkUser}>

          <FormGroup className="form-label username">
            <Input
              placeholder="Username"
              type="text"
              name="username"
              required
              className="form-input"
              onChange={this.checkUsername}
              valid={this.state.isUsernameValid}
            />

            <FormFeedback>Unknown username</FormFeedback>

          </FormGroup>

          <FormGroup className="form-label password">

            <Input
              placeholder="Password"
              type="password"
              name="password"
              required
              className="form-input"
              valid={this.state.isPasswordValid}
            />

            <FormFeedback>Wrong password</FormFeedback>

          </FormGroup>

          <Button
            color="primary"
            className="form-submit login"
            type="submit"
          >
                      Enter
            <i className="fa fa-angle-right" />
          </Button>

        </Form>

        {
                  this.state.isFormSubmitted &&
                  <Redirect to="/home" />
              }

      </div>
    );
  }
}

export default LoginTab;
