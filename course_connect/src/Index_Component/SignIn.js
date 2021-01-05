import React, { useState, useEffect} from 'react';
import './SignInStyle.css'

const SignIn = () => {

    // const [person, setPerson] = useState({ email: '', password: ''})
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = (e) => {
        
    }


    return (
        <form>
            <div>
                <label htmlFor = "email"> email : </label>
                <input 
                    type = 'text' 
                    id = 'email' 
                    name = 'email' 
                    value = {email} 
                    onChange = { (e) => setEmail(e.target.value) } 
                /> 
            </div>

            <div>
                <label htmlFor = "password"> Password : </label>
                <input 
                    type = 'password' 
                    id = 'password' 
                    name = 'password' 
                    value = {password} 
                    onChange = {(e) => setPassword(e.target.value)} 
                /> 
            </div>
            <div>
                <button type = 'submit' onClick = { (e) => {e.preventDefault(); console.log(email, password)} }> Login </button>
            </div>
        </form>
    );

    
}

export default SignIn;
