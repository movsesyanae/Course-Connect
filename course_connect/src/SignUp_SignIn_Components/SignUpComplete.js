import React from 'react';

import SignUpSliderComponent from './SignUpSliderComponent'
import SignUp_SignIn_Component_Mobile from './SignUpSliderComponentMobile';
import {isMobile} from 'react-device-detect';


const SignUpComplete = (props) => {

    const handleUser = (user) => {
		console.log('grace please');
		console.log(user);
	}

    return(
        <div>
            {isMobile ? <SignUp_SignIn_Component_Mobile/> : <SignUpSliderComponent user = {(user) => props.user(user)} verified = {(value) => props.verified(value)}  />}
        </div>
    );
}

export default SignUpComplete;