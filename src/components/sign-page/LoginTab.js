import React, { Component } from 'react';

import { Form, Input, Button, Label, FormGroup, FormFeedback, FormText } from 'reactstrap';

import passwordIcon from '../../img/password-icon.png';

import userIcon from '../../img/user-icon.png'

import { Link, Redirect } from 'react-router-dom';

class LoginTab extends Component {

    constructor(props) {
        super(props);

        this.state = {
          isFormSubmitted: 'undefined'
        };

        this.checkUser = this.checkUser.bind(this);
    }

    checkUser(event) {
        event.preventDefault();

        const username = event.target.elements[0].value,
            password = event.target.elements[1].value;

        if (localStorage.getItem(username + '-password') === password) {

            localStorage.setItem('isUserLogged', 'true');
            localStorage.setItem('currentUser', username);
            this.setState({
                isFormSubmitted: 'true'
            });
        } else this.setState({
            isFormSubmitted: 'false'
        });
    }

    render() {
        return (
          <div className='tab'>

              <h2 className='tab-title login'>
                  Welcome <span className='highlight'>back!</span>
              </h2>

              <Form className='form' onSubmit={this.checkUser}>

                  <Label className='form-label login'>
                      <img src={userIcon} width="13" height="14"/>
                      <Input placeholder='Username' type='text'
                             name='username' required className='form-input' />
                  </Label>

                  <Label className='form-label login'>
                      <img src={passwordIcon} width="11" height="13"/>
                      <Input placeholder='Password' type='password'
                             name='password' required className='form-input'/>
                  </Label>

                  <Button color='primary' className='form-submit login'
                  type='submit'>
                      Enter
                      <i className='fa fa-angle-right' />
                  </Button>

              </Form>

              {
                  (this.state.isFormSubmitted === 'true') &&
                  <Redirect to='/home' />
              }

          </div>
        );
    }
}

export default LoginTab;