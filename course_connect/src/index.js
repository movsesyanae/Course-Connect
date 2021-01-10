import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SignUpSliderComponent from './SignUp_SignIn_Components/SignUpSliderComponent';
import CourseSelector from './Course_Selector_Component/CourseSelector';


ReactDOM.render(
  <React.StrictMode>

    {/* <SignUpSliderComponent /> */}

	  <CourseSelector />


  </React.StrictMode>,
  document.getElementById('root')
);

