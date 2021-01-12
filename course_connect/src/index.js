import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SignUpSliderComponent from './SignUp_SignIn_Components/SignUpSliderComponent'
import SignUp_SignIn_Component_Mobile from './SignUp_SignIn_Components/SignUpSliderComponentMobile';
import CourseSelector from './Course_Selector_Component/CourseSelector';
import {isMobile} from 'react-device-detect';
import SignUpComplete from './SignUp_SignIn_Components/SignUpComplete';
import CreateRouter from './CreateRouter';
import { BrowserRouter as Router, Switch, Route, Redirect, useHistory } from 'react-router-dom';


ReactDOM.render(
  <React.StrictMode>

    {/* <SignUpSliderComponent /> */}

    {/* <SignUpComplete /> */}
    <Router>
      <CreateRouter />
    </Router>

	  {/* <CourseSelector /> */}


  </React.StrictMode>,
  document.getElementById('root')
);


