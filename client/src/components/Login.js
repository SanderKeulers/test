import React from 'react';
import { Link } from 'react-router-dom'; 
import './style.css'

const Login = () => {

    const LoginForm = () => (
        <div class="container">
            <form class="form" id="login">
                <h1 class="form__title">Login</h1>
                <div class="form__message form__message--error"></div>
                <div class="form__input-group">
                    <input type="text" class="form__input" autofocus placeholder="Username or email"/>
                    <div class="form__input-error-message"></div>
                </div>
                <div class="form__input-group">
                    <input type="password" class="form__input" autofocus placeholder="Password"/>
                    <div class="form__input-error-message"></div>
                </div>
                <button class="form__button" type="submit">Continue</button>
                <p class="form__text">
                    <Link to="#" class="form__link">Forgot your password?</Link>
                </p>
                <p class="form__text">
                    <Link class="form__link" to="../register" id="linkCreateAccount">Don't have an account? Create account</Link>
                </p>
            </form>
        </div>
    );

    return(
        LoginForm()
    )

};

export default Login; 