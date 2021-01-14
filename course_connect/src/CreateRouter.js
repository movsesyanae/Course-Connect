import React, { useState} from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect, useHistory } from 'react-router-dom';

import SignUpSliderComponent from './SignUp_SignIn_Components/SignUpSliderComponent';
import SignUpComponentMobile from './SignUp_SignIn_Components/SignUpComponentMobile';
import SignInComponentMobile from './SignUp_SignIn_Components/SignInComponentMobile';
import CourseSelector from './Course_Selector_Component/CourseSelector';
import Verification from './SignUp_SignIn_Components/Verification';
import {isMobile} from 'react-device-detect';



const CreateRouter = () => {

    const [user, setUser] = useState(null);
    const [verified, setVerified] = useState(false)
    const history = useHistory();

    const handleAfterSignIn = (validated) => {
        setVerified(validated);
        console.log('Verified: ', validated);
        if (validated) history.push('/courses');
        else history.push('/verification');
        // history.push("/courses");
    }

    return(
        <div>

            
            {/* { user ?  
            <h1>User: {user.id} -- Pass: {user.passHash}</h1> : null
            } */}
            

            {/* <Router> */}
                <Switch>
                    {/* <Route exact path = '/' render = {() => <SignUpSliderComponent user = {(user) => setUser(user)} verified = {(value) => handleAfterSignIn(value)}  />} />  */}
                    <Route exact path = '/'> 
                        {isMobile ? <Redirect to = '/sign-up-mobile' /> : <SignUpSliderComponent user = {(user) => setUser(user)} verified = {(value) => handleAfterSignIn(value)}  />}
                    </Route>
                    
                    <Route exact path = '/courses'> 
                        {!user || !verified ? <Redirect to = '/' /> : <CourseSelector nextPage = {(value) => handleNextPage(value)} user = {user}/>}
                    </Route>
                    
                    <Route exact path = '/verification'> 
                        {!user || verified ? <Redirect to = '/' /> : <Verification user = {user} verified = {(value) => handleAfterSignIn(value)}/>}
                    </Route>

                    <Route exact path = '/sign-up-mobile'> 
                        {/* {user ? <Verification /> : <h1>damn</h1>} */}
                        {!isMobile ? <Redirect to = '/' /> : <SignUpComponentMobile user = {(user) => setUser(user)} verified = {(value) => handleAfterSignIn(value)} />}
                    </Route>
                    
                    <Route exact path = '/sign-in-mobile'> 
                        {/* {user ? <Verification /> : <h1>damn</h1>} */}
                        {!isMobile ? <Redirect to = '/' /> : <SignInComponentMobile user = {(user) => setUser(user)} verified = {(value) => handleAfterSignIn(value)} />}
                    </Route>
                </Switch>
            {/* </Router> */}
        </div>
    );
}

export default CreateRouter;