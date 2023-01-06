import React, { Component } from "react";
import "./SigninPage.css";
import login from "./undraw_Login.svg"

class SigninPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            // formErrors: { email: '', password: '' },
            usrValid: false,
            passwordValid: false,
            formValid: false
        };
        // this.validate = this.validate.bind(this);
    }

    if(formValid) {
        console.log("Logged in")
    }

    handleUserInput(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value },
            () => { this.validateField(name, value) });
    }

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let usrValid = this.state.usrValid;
        let passwordValid = this.state.passwordValid;

        switch (fieldName) {
            case 'username':
                usrValid = value == "123"
                // emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                // fieldValidationErrors.email = emailValid ? '' : ' is invalid';
                break;
            case 'pass':
                passwordValid = value == "123"
                // passwordValid = value.length >= 6;
                // fieldValidationErrors.password = passwordValid ? '' : ' is too short';
                break;
            default:
                break;
        }
        this.setState({
            formErrors: fieldValidationErrors,
            usrValid: usrValid,
            passwordValid: passwordValid
        }, this.validateForm);
    }

    validateForm() {
        this.setState({ formValid: this.state.emailValid && this.state.passwordValid });
    }

    render() {
        return (
            <div>
                <div class="limiter">
                    <div class="container-login100">
                        <div class="logo_container">
                            <a>
                                <img class="logo" src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Apple-logo.png" alt="logo is not available" width="auto" height="50" />
                            </a>
                        </div>

                        <div class="wrap-login100">
                            <div class="login100-pic js-tilt" data-tilt>
                                <img src={login} alt="IMG" />
                            </div>

                            <form class="login100-form validate-form" method="post" action="login.php">
                                <span class="login100-form-title">
                                    Login
                                </span>

                                <div class="wrap-input100 validate-input">
                                    <input class="input100" type="text" name="username" placeholder="User Name" />
                                    <span class="focus-input100"></span>
                                    <span class="symbol-input100">
                                        <i class="fa fa-phone" aria-hidden="true"></i>
                                    </span>
                                </div>

                                <div class="wrap-input100 validate-input" data-validate="Password is required">
                                    <input class="input100" type="password" name="pass" placeholder="Password" />
                                    <span class="focus-input100"></span>
                                    <span class="symbol-input100">
                                        <i class="fa fa-lock" aria-hidden="true"></i>
                                    </span>
                                </div>

                                <div class="container-login100-form-btn">
                                    <a class="login100-form-btn" name="Login" onClick={this.handleUserInput}>
                                        Continue
                                    </a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SigninPage;