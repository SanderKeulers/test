import React, {useState} from 'react';
import { Link } from 'react-router-dom'; 
import isEmpty from 'validator/lib/isEmpty';
import isEmail from 'validator/lib/isEmail';
import equals from 'validator/lib/equals';
import {showErrorMessage, showSuccessMessage} from '../utils/message';
import { showLoading } from '../utils/loading';

import './style.css'


const Register = () => {

    const[formData, setFormData] = useState({
        username: 'Sander',
        email:  'sander@sander.com',
        password: 'sander123',
        confirmpassword: 'sander123',
        success: false,
        error: false,
        loading: false

    })

    const {username, email, password, confirmpassword, success, error, loading} = formData;



    const handleChange = (evt) => {
        setFormData({
            ...formData,
            [evt.target.name]: evt.target.value,
        });
    }


    const handleSubmit = (evt) => {

        evt.preventDefault();
        
        if (isEmpty(username) || isEmpty(email) ||isEmpty(password) ||isEmpty(confirmpassword)) {
            setFormData({
                ...formData, error: 'Vul alle velden in'
            })
        } else if (!isEmail(email)) {
            setFormData({
                ...formData, error: 'Vul een valide email in'
            })
        } else if (!equals(password, confirmpassword)) {
            setFormData({
                ...formData, error: 'Wachtwoorden komen niet overeen'
            })
        } else {
            const { username, email, password } = formData;
            const data = { username, email, password };

            setFormData({...formData, loading: true}); 

            RegisterApi(data)
                .then(response => {
                    console.log(response);
                    setFormData({
                        username: '',
                        email: '',
                        password: '',
                        confirmpassword:'',
                        success: true,
                        error: false,
                        loading: false
                
                    });

                })

                .catch (err => {
                    console.log('Axios register error: ', err);
                });
        }


    };

    const RegisterForm = () => (
        <div className="sign-up form" onSubmit={handleSubmit}>
            <form>
                <h2>Registreer</h2>
                <p>Vul dit veld in om een account te maken</p>
                <hr/>
                <div className="form-group">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                                <span className="fa fa-user"></span>
                            </span>                    
                        </div>
				        <input type="text" 
                            className="form-control" 
                            name="username" 
                            value = {username}
                            placeholder="Username" 
                            required="required"
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="form-group">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                                <i className="fa fa-paper-plane"></i>
                            </span>          
                        </div>
				        <input type="text" 
                            className="form-control" 
                            name="email" 
                            value = {email}
                            placeholder="E-mail" 
                            required="required"
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="form-group">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                                <i className="fa fa-lock"></i>
                            </span>                    
                        </div>
				        <input type="password" 
                            className="form-control" 
                            name="password" 
                            value = {password}
                            placeholder="Wachtwoord" 
                            required="required"
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="form-group">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                                <i className="fa fa-key"></i>
                            </span>                  
                        </div>
				        <input type="password" 
                            className="form-control" 
                            name="confirmpassword" 
                            value = {confirmpassword}
                            placeholder="Bevestig Wachtwoord" 
                            required="required"
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="form-group">
                    <button type="submit" className="btn btn-primary btn-lg">Sign Up</button>
                </div>
            </form>
	        <div className="text-center">Already have an account? <Link to="../login">Login here</Link></div>
        </div>
        
    );

    return(
        <div>
            {success && showSuccessMessage(success)}
            {error && showErrorMessage(error)}
            {loading && showLoading()}
            {RegisterForm()}         

        </div>
        
    ); 

};

export default Register; 








