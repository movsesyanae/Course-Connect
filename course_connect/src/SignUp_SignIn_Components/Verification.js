import React, { useState} from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect, useHistory } from 'react-router-dom';


const Verification = (props) => {
    const history = useHistory();

    const [code, setCode] = useState('');
    const handleSubmit = (e) => {
        //check 
        console.log('hello');
        const codeInt = parseInt(code);
        console.log(codeInt);

        // history.push('/courses');
        props.verified(true);
    }

    return(
        <body>
            <div>
                <h4> We need to verify your email </h4>
                <h4> Please check your umd email to for an email from us containing your security code </h4>
                <input type = 'number' placeholder = 'verification code' value = {code} onChange = {(e) => setCode(e.target.value)}/>
                <button type = 'submit' onClick = {(e) => handleSubmit(e)} >Submit Code</button>
            </div>
        </body>
    );

}

export default Verification;