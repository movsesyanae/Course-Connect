import React, { useState} from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect, useHistory } from 'react-router-dom';
import SignUpComplete from './SignUp_SignIn_Components/SignUpComplete';
import CourseSelector from './Course_Selector_Component/CourseSelector';
import Verification from './SignUp_SignIn_Components/Verification';


const CreateRouter = () => {

    const [user, setUser] = useState(null);
    const [verified, setVerified] = useState(false)
    const history = useHistory();

    const handleAfterSignIn = (validated) => {
        setVerified(validated);
        console.log('User: ', user);
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
                    <Route exact path = '/'
                        render={() => <SignUpComplete user = {(user) => setUser(user)} verified = {(value) => handleAfterSignIn(value)}  />} 
                    />
                    <Route exact path = '/courses'> 
                        {!user || !verified ? <Redirect to = '/' /> : <CourseSelector />}
                    </Route>
                    <Route exact path = '/verification'> 
                        {/* {user ? <Verification /> : <h1>damn</h1>} */}
                        {!user || verified ? <Redirect to = '/' /> : <Verification />}
                    </Route>
                </Switch>
            {/* </Router> */}
        </div>
    );
}

export default CreateRouter;