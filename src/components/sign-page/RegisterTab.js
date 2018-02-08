import React, { Component } from 'react';

import { Link, Redirect } from 'react-router-dom';

import { Form, Input, Button, Label, FormGroup, FormFeedback } from 'reactstrap';

import passwordIcon from '../../img/password-icon.png';

import userIcon from '../../img/user-icon.png';

import '../../scss/sign-page/RegisterTab.scss';

class RegisterTab extends Component {

    constructor(props) {
        super(props);

        this.state= {
            isRegistered: undefined,
            isUsernameValid: undefined,
            isPasswordValid: undefined
        };
        this.registerUser = this.registerUser.bind(this);
        this.checkUsername = this.checkUsername.bind(this);
        this.checkPassword = this.checkPassword.bind(this);
    }

    registerUser(event) {
        event.preventDefault();
        const email=event.target.elements[0].value,
            number=event.target.elements[1].value,
            username=event.target.elements[2].value,
            password=event.target.elements[3].value;
        const userData = {
          email: email,
          number: number,
          password: password
        };
        if (localStorage.getItem(username) || username.length===0 ||
        password.length===0) this.setState({
           isRegistered: false
        }); else if (this.state.isPasswordValid && this.state.isUsernameValid &&
            (typeof this.state.isPasswordValid)!=='string') {
            localStorage.setItem('currentUser', username);
            localStorage.setItem(username, JSON.stringify(userData));
            this.setState({
                isRegistered: true
            });
        }
    }

    checkUsername(event) {
        if (event.target.value.length===0) this.setState({
            isUsernameValid: undefined
        }); else if (localStorage.getItem(event.target.value))
        this.setState({
            isUsernameValid: false
        }); else this.setState({
                isUsernameValid: true
        });
    }

    checkPassword(event) {
        const password = event.target.value;
        if (password.length===0) this.setState({
            isPasswordValid: undefined
        }); else if (password.length<6) this.setState({
           isPasswordValid: 'small'
        }); else if (password.length>20) this.setState({
           isPasswordValid: 'big'
        }); else this.setState({
           isPasswordValid: true
        });
        console.log(this.state.isPasswordValid);
    }

    render() {
        return (
            <div className='tab'>

                <h2 className='tab-title register'>Welcome!</h2>

                <Form className='form' onSubmit={this.registerUser}>

                    <FormGroup className='form-label'>
                        <i className='fa fa-envelope-o' />
                        <Input placeholder='Email' type='email'
                               name='email' className='form-input' />
                    </FormGroup>

                    <FormGroup className='form-label'>
                        <i className='fa fa-mobile' />
                        <Input placeholder='Phone number' type='text'
                               name='number' className='form-input' />
                    </FormGroup>

                    <FormGroup className='form-label username'>
                        <Input placeholder='Username' type='text'
                               name='username' required className='form-input'
                        valid={this.state.isUsernameValid} onChange={this.checkUsername}/>

                        <FormFeedback>Username is busy</FormFeedback>
                    </FormGroup>

                    <FormGroup className='form-label password'>

                        <Input placeholder='Password' type='password'
                               name='password' required className='form-input'
                               valid={
                                   this.state.isPasswordValid &&
                                   (typeof this.state.isPasswordValid)!=='string'
                               }
                        onChange={this.checkPassword}/>

                        <FormFeedback>
                            {
                                this.state.isPasswordValid==='small'?
                                'Password is too small' : 'Password is too big'
                            }
                        </FormFeedback>

                    </FormGroup>

                    <Button color='primary' className='form-submit register'
                    type='submit'>
                        Enter
                        <i className='fa fa-angle-right' />
                    </Button>

                    {
                        this.state.isRegistered &&
                        <Redirect to='/home' />
                    }

                </Form>

            </div>
        );
    }
}

export default RegisterTab;
