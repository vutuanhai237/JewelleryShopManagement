import React, { Component } from 'react';
import TopNav from '../TopNav';
import RegisterForm from "../../containers/register/RegisterForm"
import Footer from '../Footer';
export default class Login extends Component {
    render() {
        return (
            <div>
                <div className="head">
                    <TopNav />
                </div>
                <div className="register_form">
                    <RegisterForm/>
                </div>
                <Footer/>
            </div>
        );
    }
}
