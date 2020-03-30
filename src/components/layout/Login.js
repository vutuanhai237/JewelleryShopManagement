import React, { Component } from 'react';
import TopNav from '../TopNav';
import LoginForm from "../../containers/login/login_form"

export default class Login extends Component {
    render() {
        return (
            <div>
                <div className="head">
                    <TopNav />
                </div>
                <div className="login_form">
                    <LoginForm/>
                </div>
            </div>
        );
    }
}
