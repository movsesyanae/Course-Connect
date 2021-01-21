import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MainPage from './MainPage'
import CreateRouter from './CreateRouter';
import CourseSelector from './Course_Selector_Component/CourseSelector'
import { BrowserRouter as Router, Switch, Route, Redirect, useHistory } from 'react-router-dom';
import SignUpComponentMobile from './SignUp_SignIn_Components/SignUpComponentMobile';
import VerificationPage from './SignUp_SignIn_Components/Verification';
import SignUpSliderComponent from './SignUp_SignIn_Components/SignUpSliderComponent'

ReactDOM.render(
  <React.StrictMode>

    {/* <SignUpSliderComponent /> */}

    {/* <SignUpComplete /> */}

    <Router>
      <CreateRouter />
    </Router>
  
    {/* <SignUpSliderComponent /> */}

   {/* <VerificationPage /> */}

  {/* <SignUp_SignIn_Component_Mobile/> */}

	  {/* <CourseSelector /> */}

    {/* <SignUpComponentMobile/> */}

    {/* <MainPage/> */}

  </React.StrictMode>,
  document.getElementById('root')
);


