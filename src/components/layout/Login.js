import React, { Component } from 'react';
import LoginForm from "../../containers/login/LoginForm"
export default class Login extends Component {
    render() {
        return (
            <div>
               
                <div className="login_form">
                    <LoginForm/>
                </div>
 
            </div>
        );
    }
}
