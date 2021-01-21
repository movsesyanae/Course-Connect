import React, { useState, useEffect} from 'react';
import './SignInStyle.css'
import axios from 'axios'


const SignIn = (props) => {

    // const [person, setPerson] = useState({ email: '', password: ''})
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = (e) => {
        
    }

    function submitHandler (e) {
        e.preventDefault();

        const stringInputs = [email, password];

        let submitPass = true;  //as long as true should succefully submit

        if(email == '' || password == '') {
            props.failMessage('You have not filled all fields');
            submitPass = false;
            return;
        }


        for(let x in stringInputs) { //injection prevention
            console.log(stringInputs[x]);
            if(stringInputs[x].includes('\'') || stringInputs[x].includes('<') || stringInputs[x].includes('>')) {
                // props.failMessage('Your email should not include symbols such as \' or < >');
                props.failMessage('Bru don\'t do that');
                submitPass = false;
                return;
            }
        }

        if(!email.endsWith('@umd.edu')) {
            props.failMessage('Please use your @umd.edu email');
            submitPass = false;
            return;
        }

        
        const requestJSON = createRequestJSON();

        //check servers return here
        const verified = true; // needs to be changed to be seen from server call

        const serverURL = 'https://3.92.91.162/';

        axios.post(
                serverURL, {createRequestJSON}
            ).then(
                res => {
                console.log(res); console.log(res.data);}
            ).catch(
                err => {console.log(err)}
        );
        


        // once ready to move to next screen
        const user = createUser();
        const logInObject = {user: user, verified: verified};
        props.logIn(logInObject);        

    }

    const createUser = () => {
        const crypto = require('crypto'); 
        const hash = crypto.createHash('sha256');
        const id = hash.update('email', 'binary').digest('hex');
        const passHash = hash.update('password', 'binary').digest('hex');
        // const user = {id: id, passHash: passHash};
        const user = {id: email, passHash: password};
        return user;

    }

    const createRequestJSON = () => {
        const user = createUser(); 
        const grace = {user: user, action: 1};
        console.log(grace);
        return grace;
    }

    return (
        <body id='mobileEnterBody'>
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

                <button className="entry-page" type = 'submit' onClick = { submitHandler }> Login </button>
           </form>
        </div>
        </body>
    );

    
}

export default SignIn;
