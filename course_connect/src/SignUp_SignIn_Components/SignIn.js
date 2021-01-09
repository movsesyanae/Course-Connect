import React, { useState, useEffect} from 'react';
import './SignInStyle.css'

const SignIn = () => {

    // const [person, setPerson] = useState({ email: '', password: ''})
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = (e) => {
        
    }


    return (
        <div className="entry-page form-container sign-in-container">
        <form action = '#' className="entry-page">
            <h1 className="entry-page">Sign in</h1>
                <input 
                    className="entry-page"
                    type = 'text' 
                    id = 'email' 
                    placeholder = 'email'
                    name = 'email' 
                    value = {email} 
                    onChange = { (e) => setEmail(e.target.value) } 
                /> 

                <input 
                    className="entry-page"
                    type = 'password' 
                    id = 'password' 
                    placeholder ='password'
                    name = 'password' 
                    value = {password} 
                    onChange = {(e) => setPassword(e.target.value)} 
                />

                <button className="entry-page" type = 'submit' onClick = { (e) => {e.preventDefault(); console.log(email, password)} }> Login </button>
           </form>
        </div>
    );

    
}

export default SignIn;
