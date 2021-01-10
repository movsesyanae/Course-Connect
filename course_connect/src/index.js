import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SignUpSliderComponent from './SignUp_SignIn_Components/SignUpSliderComponent'
import SignUp_SignIn_Component_Mobile from './SignUp_SignIn_Components/SignUpSliderComponentMobile';
import CourseSelector from './Course_Selector_Component/CourseSelector';
import {isMobile} from 'react-device-detect';

ReactDOM.render(
  <React.StrictMode>

    {/* <SignUpSliderComponent /> */}

    {isMobile ? <body> <h1> Grace please</h1></body> : <SignUpSliderComponent />}

	{/* <CourseSelector /> */}

    {/* <OnStart/> */}

  </React.StrictMode>,
  document.getElementById('root')
);


