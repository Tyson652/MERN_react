import React, { Component } from "react";
import LoginForm from "./../forms/LoginForm";

class LoginPage extends Component {
    render() {
        return (
            <div>
                <h1> Login Page</h1>
                <LoginForm history = {this.props.history}/>
            </div>
        );
    }
}

export default LoginPage;