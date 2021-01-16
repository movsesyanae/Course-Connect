import React, { useState} from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect, useHistory } from 'react-router-dom';
import './VerificationPageStyle.scss';

const Verification = (props) => {
    const history = useHistory();

    const [code, setCode] = useState('');

    const createRequestJSON = () => {
        const user = props.user; 
        const grace = {user: user, code: code, action: 2};
        console.log(grace);
        return grace;
    }

    const handleSubmit = (e) => {
        //check 
        console.log('hello');
        const codeInt = parseInt(code);
        console.log(codeInt);

        // history.push('/courses');
        props.history.push('/courses');
    }

    return(
        <body >
            <div className = 'verification-page'>
                <h3> We need to verify your email </h3>
                <h4> Please check your umd email to for an email from us containing your security code </h4>
                <div className = 'input-and-submit'>
                    <input type = 'number' pattern = '\d*' placeholder = 'code' value = {code} onChange = {(e) => setCode(e.target.value)}/>
                    <button type = 'submit' onClick = {(e) => handleSubmit(e)} >Submit Code</button>
                </div>
            </div>
        </body>
    );

}

export default Verification;