import React, { Component } from 'react';

import { Form, Input, Button, Label } from 'reactstrap';

import passwordIcon from '../../img/password-icon.png';

import userIcon from '../../img/user-icon.png'

class LoginMain extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
          <div className='login-main'>

              <h2 className='login-title'>
                  Welcome <span className='highlight'>back!</span>
              </h2>

              <Form className='login-form'>

                  <Label className='login-label'>
                      <img src={userIcon} width="13" height="14"/>
                      <Input placeholder='Username' type='text'
                             name='username' required className='login-input' />
                  </Label>

                  <Label className='login-label'>
                      <img src={passwordIcon} width="11" height="13"/>
                      <Input placeholder='Password' type='password'
                             name='password' required className='login-input' />
                  </Label>


                  <Button color='primary' className='login-submit'>
                      Enter
                      <i className='fa fa-angle-right' />
                  </Button>

              </Form>

          </div>
        );
    }
}

export default LoginMain;