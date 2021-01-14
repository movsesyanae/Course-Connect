import React, { useState} from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect, useHistory } from 'react-router-dom';

import SignUpSliderComponent from './SignUp_SignIn_Components/SignUpSliderComponent';
import SignUpComponentMobile from './SignUp_SignIn_Components/SignUpComponentMobile';
import SignInComponentMobile from './SignUp_SignIn_Components/SignInComponentMobile';
import CourseSelector from './Course_Selector_Component/CourseSelector';
import Verification from './SignUp_SignIn_Components/Verification';
import {isMobile} from 'react-device-detect';
import MainPage from './MainPage';



const CreateRouter = () => {

    const [user, setUser] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const history = useHistory();


    const handleNextPage = (value) => {
        // 0 -- Sign Up/In page
        // 1 -- Verification Page
        // 2 -- Course Selection Page
        // 3 -- main page
        
        setCurrentPage(value);

        switch (value) {
            
            case 1: 
                history.push('/verification');
                break;

            case 2:
                history.push('/courses');
                break;
                
            case 3:
                history.push('/main');
                break;

            default:
                setUser(null);
                setCurrentPage(0);
                history.push('/');
                break;
        }


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
                        {isMobile ? <Redirect to = '/sign-up-mobile' /> : <SignUpSliderComponent user = {(user) => setUser(user)} nextPage = {(value) => handleNextPage(value)}  />}
                    </Route>
                    
                    {/* <Route exact path = '/courses' render = {() => <CourseSelector nextPage = {(value) => handleNextPage(value)} user = {user}/>}/> */}
                    <Route exact path = '/courses'> 
                        {!user || currentPage !== 2 ? <Redirect to = '/' /> : <CourseSelector nextPage = {(value) => handleNextPage(value)} user = {user}/>}
                    </Route>
                    
                    <Route exact path = '/verification'> 
                        {!user || currentPage !== 1 ? <Redirect to = '/' /> : <Verification user = {user} nextPage = {(value) => handleNextPage(value)}/>}
                    </Route>

                    <Route exact path = '/sign-up-mobile'> 
                        {/* {user ? <Verification /> : <h1>damn</h1>} */}
                        {!isMobile ? <Redirect to = '/' /> : <SignUpComponentMobile user = {(user) => setUser(user)} nextPage = {(value) => handleNextPage(value)} />}
                    </Route>
                    
                    <Route exact path = '/sign-in-mobile'> 
                        {/* {user ? <Verification /> : <h1>damn</h1>} */}
                        {!isMobile ? <Redirect to = '/' /> : <SignInComponentMobile user = {(user) => setUser(user)} nextPage = {(value) => handleNextPage(value)} />}
                    </Route>

                    <Route exact path = '/main'>
                        {!user || currentPage !== 3 ? <Redirect to = '/' /> : <MainPage user = {(user) => setUser(user)} nextPage = {(value) => handleNextPage(value)} />}
                    </Route>
                </Switch>
            {/* </Router> */}
        </div>
    );
}

export default CreateRouter;