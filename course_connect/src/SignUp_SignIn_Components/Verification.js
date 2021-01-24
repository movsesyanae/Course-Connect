import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect, useHistory } from 'react-router-dom';
import './VerificationPageStyle.scss';
import { Auth } from 'aws-amplify';

const Verification = (props) => {
    const [code, setCode] = useState('');

    useEffect(() => {
        checkUser();
    }, [])

    async function checkUser() {
        console.log('doing this ');
        try {
            // const x = await Auth.currentSession();
            // console.log('well damn', x);
            const user = await Auth.currentAuthenticatedUser();
            console.log('already verified in verification page', user['attributes']['email']);
            props.returnObject({nextPage: 'sign-out', message: 'already verified in email confirmation page'});            
        } catch(error) {
        }

    }

    async function handleSubmit(e) {

        try {
            await Auth.confirmSignUp(props.email, code);
            


            try {
                const user = await Auth.signIn(props.email, props.password);
                console.log(user);
                props.returnObject({
                    nextPage: 'course-selection'
                });
            } catch (error) {
                props.returnObject({
                    nextPage: 'sign-out',
                    message: error
                });
            }




        } catch (error) {
            props.returnObject({
                nextPage: 'sign-in',
                message: 'something went wrong during email verification'
            });
        }

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