import React, { useState, useEffect} from 'react';
import '../SignInStyle.css'

const SignIn = () => {

    // const [person, setPerson] = useState({ email: '', password: ''})
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = (e) => {
        
    }


    return (
        <div class="form-container sign-in-container">
        <form action = '#'>
            <h1>Sign in</h1>
                <input 
                    type = 'text' 
                    id = 'email' 
                    placeholder = 'email'
                    name = 'email' 
                    value = {email} 
                    onChange = { (e) => setEmail(e.target.value) } 
                /> 

                <input 
                    type = 'password' 
                    id = 'password' 
                    placeholder ='password'
                    name = 'password' 
                    value = {password} 
                    onChange = {(e) => setPassword(e.target.value)} 
                />

                <button type = 'submit' onClick = { (e) => {e.preventDefault(); console.log(email, password)} }> Login </button>
           </form>
        </div>
    );

    
}

export default SignIn;
