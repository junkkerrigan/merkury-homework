import React, { Component } from 'react';

import { Form, Input, Button, Label } from 'reactstrap';

import passwordIcon from '../../img/password-icon.png';

import userIcon from '../../img/user-icon.png'

class LoginTab extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
          <div className='tab'>

              <h2 className='tab-title login'>
                  Welcome <span className='highlight'>back!</span>
              </h2>

              <Form className='form'>

                  <Label className='form-label login'>
                      <img src={userIcon} width="13" height="14"/>
                      <Input placeholder='Username' type='text'
                             name='username' required className='form-input' />
                  </Label>

                  <Label className='form-label login'>
                      <img src={passwordIcon} width="11" height="13"/>
                      <Input placeholder='Password' type='password'
                             name='password' required className='form-input' />
                  </Label>


                  <Button color='primary' className='form-submit login'>
                      Enter
                      <i className='fa fa-angle-right' />
                  </Button>

              </Form>

          </div>
        );
    }
}

export default LoginTab;