import React, { Component } from 'react';

import { Link, Redirect } from 'react-router-dom';

import { Form, Input, Button, Label } from 'reactstrap';

import passwordIcon from '../../img/password-icon.png';

import userIcon from '../../img/user-icon.png';

import '../../scss/sign-page/RegisterTab.scss';

class RegisterTab extends Component {

    constructor(props) {
        super(props);

        this.state= {
            isRegistered: 'undefined'
        };
        this.registerUser = this.registerUser.bind(this);
    }

    registerUser(event) {
        event.preventDefault();
        const email=event.target.elements[0].value,
            number=event.target.elements[1].value,
            username=event.target.elements[2].value,
            password=event.target.elements[3].value;
        if (localStorage.getItem(username + '-password')) this.setState({
           isRegistered: 'false'
        }); else {

            localStorage.setItem(username + '-email', email);
            localStorage.setItem(username + '-number', number);
            localStorage.setItem(username + '-password', password);
            this.setState({
                isRegistered: 'true'
            });
        }
    }

    render() {
        return (
            <div className='tab'>

                <h2 className='tab-title register'>Welcome!</h2>

                <Form className='form' onSubmit={this.registerUser}>

                    <Label className='form-label register'>
                        <i className='fa fa-envelope-o' />
                        <Input placeholder='Email' type='email'
                               name='email' className='form-input' />
                    </Label>

                    <Label className='form-label register'>
                        <i className='fa fa-mobile' />
                        <Input placeholder='Phone number' type='text'
                               name='number' className='form-input' />
                    </Label>

                    <Label className='form-label register'>
                        <img src={userIcon} width="13" height="14"/>
                        <Input placeholder='Username' type='text'
                               name='username' required className='form-input' />
                    </Label>

                    <Label className='form-label register'>
                        <img src={passwordIcon} width="11" height="13"/>
                        <Input placeholder='Password' type='password'
                               name='password' required className='form-input' />
                    </Label>


                    <Button color='primary' className='form-submit register'
                    type='submit'>
                        Enter
                        <i className='fa fa-angle-right' />
                    </Button>

                    {
                        (this.state.isRegistered === 'true') &&
                        <Redirect to='/home' />
                    }

                </Form>

            </div>
        );
    }
}

export default RegisterTab;
