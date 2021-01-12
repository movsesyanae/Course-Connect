import React from 'react';

import SignUpSliderComponent from './SignUpSliderComponent'
import SignUp_SignIn_Component_Mobile from './SignUpSliderComponentMobile';
import {isMobile} from 'react-device-detect';


const SignUpComplete = () => {
    return(
        <div>
            {isMobile ? <SignUp_SignIn_Component_Mobile/> : <SignUpSliderComponent />}
        </div>
    );
}

export default SignUpComplete;