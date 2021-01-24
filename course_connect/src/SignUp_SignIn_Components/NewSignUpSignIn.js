import {useState, useEffect, useRef, useImperativeHandle} from 'react'
import './newSignUpIn.scss';
import { Auth } from 'aws-amplify';
import SignUp from './SignUp'
import SignIn from './SignIn'
import Switcheroo from './Switcheroo'


const NewSignUpSignIn = (props) => {
    const [needsConfirm, setNeedsConfirm] = useState(false);
    const [authCode, setAuthCode] = useState('');
    const [backUpEmail, setBackUpEmail] = useState('');


    


    async function confirmSignUp(e) {    
        e.preventDefault();    

        const email = backUpEmail;
        const code = parseInt(authCode);

        try {
            await Auth.confirmSignUp(email, code);
        } catch (error) {
            console.log('error confirming sign up', error);
        }

    }

    return(
        <div id = "newOuterBox">
            
            <SignUp returnObject = {(value) => props.returnObject(value)}/>
            <SignIn returnObject = {(value) => props.returnObject(value)}/>
            <Switcheroo/>
        </div>
    );

}
export default NewSignUpSignIn;