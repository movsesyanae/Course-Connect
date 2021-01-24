import React, { useState, useEffect} from 'react';
import './newSignUpIn.scss';
import axios from 'axios'
import { Auth } from 'aws-amplify';



const SignIn = (props) => {
    const [signUpFields,setSignUpFields] = 
    useState({email:'',password:''});
    
    async function handleSignIn(e) {
        console.log('sign up init');
        e.preventDefault();

        
        try {
            const user = await Auth.signIn(signUpFields.email, signUpFields.password);
            console.log(user);
            props.returnObject({
                nextPage: 'course-selection'
            });
        } catch (error) {
            console.log('error signing in', error);
            if(error['code'] === 'UserNotConfirmedException' ) {
                //User hasnt verified email
                console.log('i want grace');
                Auth.resendSignUp(signUpFields.email);

                props.returnObject({
                    nextPage: 'confirm-email',
                    email: signUpFields.email,
                    password: signUpFields.password
                });
            }
        }
        
    }

    return (
        <div id = 'newSignInBox'>
        <div id='height-box'>
            <div id='Label-field'>
                <label><h1>Sign In</h1></label>
            </div>

            <div id='email-field'>
                <input 
                        type = 'text'  
                        name = 'email'
                        placeholder = 'email' 
                        value = {signUpFields.email} 
                        onChange = { (e) => setSignUpFields({...signUpFields,email:e.target.value}) } 
                    /> 
            </div>

            <div id='password-field'>
                <input 
                        type = 'password'  
                        name = 'password'
                        placeholder = 'password' 
                        value = {signUpFields.password} 
                        onChange = { (e) => setSignUpFields({...signUpFields,password:e.target.value}) }
                    /> 
            </div>

            <div id='submit-field'>
                <button type = 'submit' onClick = { handleSignIn }> Sign In </button>
            </div>
            </div>
        </div>
    );
}


export default SignIn;
